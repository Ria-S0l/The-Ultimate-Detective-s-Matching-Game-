import { ctx, canvas } from './canvas'
import { saihara } from './saiharaSprite'

export let saiharaAction = {
  blinking: true,
  frame: 0,
  jumping: false,
  closeEye: false,
  x: 5,
  y: 290,
  w: 200,
  h: 200,
  draw() {
    saihara.draw(saiharaAction.x, saiharaAction.y, saiharaAction.frame, saiharaAction.w, saiharaAction.h)
  }
}

setInterval(
  function() {
    //jumping code:
    if (saiharaAction.jumping) {
      // If he's jumping...
      if (saiharaAction.frame == 2) { // if we're on frame 2
        // switch to frame 3
        saiharaAction.frame = 3;
      } else { // otherwise, put us on frame 2
        saiharaAction.frame = 2;
      }
    }

    //blinking code:
    if (saiharaAction.blinking) {
      if (saiharaAction.frame == 0) {
        saiharaAction.frame = 1;
      } else {
        saiharaAction.frame = 0;
      }
    }

    //closeEye code:
    if (saiharaAction.closeEye) {
      if (saiharaAction.frame == 1) {
        saiharaAction.frame = 2;
      } else {
        saiharaAction.frame = 1;
      }
    }

  },
  330)

//update function
export function blinking() {
  saiharaAction.blinking = true
  saiharaAction.jumping = false
  saiharaAction.closeEye = false
}


//plays whenever card match
export function jumping() {
  saiharaAction.jumping = true;
  saiharaAction.blinking = false
  saiharaAction.closeEye = false
}

//plays whenever card doesn't match
export function closeEye() {
  saiharaAction.closeEye = true;
  saiharaAction.jumping = false
  saiharaAction.blinking = false
}
