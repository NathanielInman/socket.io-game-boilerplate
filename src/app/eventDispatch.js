import {id,player,socket} from './globals';

export const eventDispatch= {
  start:  emitPlayer,
  update: emitPlayer
};

function emitPlayer(){
  socket.emit('player',{id: id,px: player.x,py: player.y});
} //end emitPlayer()
