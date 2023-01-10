import {ctx} from './canvas'

export const img = document.createElement('img'); // Create <img> 
img.src = 'Saihara.png'; // Set to filename
document
  .querySelector('#assets')
  .appendChild(img); // Add image to assets

// Create object for our image manegment
export const saihara = { 
  img, 
  ready : img.complete, 
  frameWidth : 80,
  frameHeight: 80,
  totalFrames : 5,
    draw (x,y,frame,w=null,h=null) { 
    // If the image isn't loaded, wait...
    if (!this.ready) {
      setTimeout(
        ()=>this.draw(x,y,frame,w,h),
        100
      )
      console.log('Warning: Image not yet ready...',this.img);
      return
    }
    
    if (!w) {w = this.frameWidth} // Default to image size
    if (!h) {h = this.frameHeight} // Default to imag esize
    // Make frame number less than # of frames (i.e. if we ask
    // for frame 12 but have only 8 frames, we'll get frame 4)
    frame = frame % this.totalFrames;     
    ctx.drawImage(
        this.img, // image Element
        this.frameWidth * frame, // Source X
        0, // Source Y
        this.frameWidth, // Source width
        this.frameHeight, // Source Height
        x, // Target X
        y, // Target Y
        w, // Target width
        h // Target Height
      );        
  }
}

// Update sprite when image loaded!
img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  saihara.ready=true
});