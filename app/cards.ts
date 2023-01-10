import { ctx, canvas } from './canvas'
import { shuffle } from './util';
import { blinking, closeEye, jumping } from './spriteAnimate'

// card images

/* let imageElement = document.querySelector('#ballMonokuma')
const width = 32;
const height = 32;
export function drawBallMonokuma(x,y) {
  ctx.drawImage(imageElement, x, y, width, height)
}

/* export const img = document.createElement('img'); // Create <img> 
img.src = 'ballMonokuma.png'; // Set to filename
document
  .querySelector('#assets')
  .appendChild(img); // Add image to asset
*/


let words = [ //the words on the cards
  'ball-kuma', 'Kaito', 'Maki', 'Kokichi', 'Kaede',
  'ball-kuma', 'Kaito', 'Maki', 'Kokichi', 'Kaede',
]
shuffle(words); //shuffle every refresh

canvas.addEventListener(
  'mousemove', //when you move your mouse
  function(e) {
    let card = cardDrawer.getCardAtPoint(e.offsetX, e.offsetY);
    if (card) {
      cardDrawer.cards.map((c) => c.hover = false);
      //console.log('Hover over', card);
      card.hover = true;
    }
  }
)


canvas.addEventListener(
  'click',
  function(e) {
    let card = cardDrawer.getCardAtPoint(e.offsetX, e.offsetY);
    if (card) {
      cardDrawer.showCard(card);
    }

  }
)

export const cardDrawer = { //draws the cards/ obviously 
  rows: 4,
  guesses: 0,
  cardWidth: 70,
  cardHeight: 100,
  cards: words.map((w) => (
    { name: w, show: false, hover: false })),
  getCardAtPoint(x, y) {
    let theCard = null;
    this.cards.forEach(
      (card) => {
        if (x > card.x) {
          if (x < (card.x + this.cardWidth)) {
            if (y > card.y) {
              if (y < (card.y + this.cardHeight)) {
                theCard = card;
              }
            }
          }
        }
      }
    );
    return theCard;
  },
  layout() {
    let perCol = 5;
    let padding = 25;
    let row = 0;
    let col = 0;
    this.cards.forEach(
      (card) => {
        card.y = row * (this.cardHeight + padding) + padding;
        card.x = col * (this.cardWidth + padding) + padding;
        col += 1;
        if (col >= perCol) {
          col = 0;
          row += 1;
        }
      }
    )
  },
  showCard(card) {
    this.guesses += 1;
    let shown = this.cards.filter((c) => c.show); //get a list of all the cards
    if (shown.length == 2) {
      this.cards.forEach((c) => c.show = false); //once you get two, hide them
      console.log('Blink!');
      blinking()
    }
    card.show = true;
    // 2 cards, check for a match!
    if (shown.length == 1) {     
      // if (they have the same name) {
      //this.cards.forEach((c) => c.show = true)}
      let shownCard = shown[0] //get 0 index from list
      if (shownCard.name == card.name) {
        //window.alert("bussy")
        shownCard.matched = true;
        card.matched = true;
        console.log('Jump!');
        // Matched, jump!
        jumping();
      } else {
         // Close eyes if wrong...
        closeEye()
      }
    }

  },
  draw() {
    ctx.fillText(
      this.guesses,
      canvas.width - 200,
      300
    );

    this.layout();
    const width = 80;
    const height = 100;
    let x = 75; // starting x
    let y = 75; // starting y
    let row = 0;
    this.cards.forEach(
      (card) => {
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'magenta';
        if (card.hover) {
          ctx.fillStyle = 'magenta';
        }
        // Remember where we were...   
        ctx.strokeRect(
          card.x, card.y,
          this.cardWidth, this.cardHeight
        );
        if (card.show || card.matched) {
          ctx.fillText(
            card.name, card.x + 5, card.y + this.cardHeight / 2
          );
          if (card.matched) {
            ctx.strokeStyle = 'red';
            ctx.strokeRect(card.x - 2, card.y - 2, this.cardWidth + 4, this.cardHeight + 4);
          }
        } else {
          ctx.fillRect(card.x, card.y, this.cardWidth, this.cardHeight);
        }
      }
    )
  }
}


//a majority of this is based off of Mr Hinkles example code he gave me