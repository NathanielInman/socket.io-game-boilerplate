import {id,player,socket} from './globals';
import {eventDispatch} from './eventDispatch';

export const eventListeners = {
  attach: ()=>{
    let c = document.querySelector('body');

    // Start by attaching listeners to the canvas for input
    // that way we can capture player movement
    c.addEventListener('keydown',e=>{
      var key = e.keyIdentifier,
          updated = false; //determines whether to emit change

      if(key==='U+0057'&&player.y>0){ //'w'
        player.y-=1; updated = true;
      }else if(key==='U+0041'&&player.x>0){ //'a'
        player.x-=1; updated = true;
      }else if(key==='U+0053'&&player.y<v.h){ //'s'
        player.y+=1; updated = true;
      }else if(key==='U+0044'&&player.x<v.w){ //'d'
        player.x+=1; updated = true;
      } //end if

      // if we actually updated, then emit the event
      if(updated) eventDispatch.update();
    });

    // attach a listener to the socket so we know when data
    // has changed outside of just the player movement
    socket.on('update', data=>{
      ctx.fillStyle='#000';
      ctx.fillRect(0,0,v.w,v.h);
      data.forEach(user=>{
        if(user.id===id){
          ctx.fillStyle='#0F0';
        }else{
          ctx.fillStyle='#F00';
        } //end if
        ctx.fillRect(user.px,user.py,5,5);
      });
    });
  }
};
