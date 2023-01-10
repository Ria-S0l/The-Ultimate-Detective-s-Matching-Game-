import {ctx, canvas} from './canvas'

export let scoreboard = {
  score: 0,
  write() {
    ctx.font = '48px Comic Sans'; 
    ctx.fillStyle = 'black'
    ctx.fillText(
      `Score: ${this.score}`,
      10, 50
    )
  }
}
