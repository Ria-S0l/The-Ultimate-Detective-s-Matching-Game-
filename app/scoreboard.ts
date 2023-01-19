import {ctx, canvas} from './canvas'

export let scoreboard = {
  score: 0,
  clicks: 0,
  draw() {
    ctx.font = '28px Comic Sans'; 
    ctx.fillStyle = 'black'
    ctx.fillText(
      `Score: ${this.score}`,
      canvas.width - 200,
      340
    )
    ctx.fillText(
      `Clicks: ${this.clicks}`,
      canvas.width - 200,
      410
      )
  }
}
