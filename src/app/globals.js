const socket = io.connect('http://localhost:4000');
const id = Math.random(); // player id will never change

// global variables for player x and y position
var player = {
  x: Math.floor(v.w/2),
  y: Math.floor(v.h/2)
};

export {player,id,socket};
