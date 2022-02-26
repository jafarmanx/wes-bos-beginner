// select the elements on the page -canvas, skate button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;
let hue = 0;

// setup our canvas for drawing
const { width } = canvas;
const { height } = canvas;

// Create Random x and y
let x = Math.floor(width * Math.random());
let y = Math.floor(height * Math.random());

// related to the painting object
ctx.strokeStyle = `hsl(${hue},100%,50%)`
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  console.log(key);
  ctx.strokeStyle = `hsl(${hue+=10},100%,50%)`
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y based on input
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear /shake funtion
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0,0,width,height)
  canvas.addEventListener (
    'animationend', 
    function(){
      console.log('Haters gonna shake shake shake ')
      canvas.classList.remove('shake')
    },
    {once:true} // this will remove the addEventListener
  )
}
// listen for arrow keys
window.addEventListener('keydown', handleKey);

shakebutton.addEventListener('click', clearCanvas);