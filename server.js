var app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    port = 4000,
    users = [];

console.log(`Server listening on port ${port}.`);
server.listen(port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('player', function (data) {
    var user = users.find(user=> user.id===data.id);

    // Either update existing user or add new one
    if(user){
      user.px=data.px;
      user.py=data.py;
    }else{
      users.push(data);
    } //end if
    socket.emit('update',users);
  });
});
