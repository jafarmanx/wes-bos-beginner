const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOutter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  console.log(imgSrc);
  modalInner.innerHTML = `
    <img 
      src="${imgSrc.replace(/300/gi,'600')}" 
      alt="${name}"
    />
    <p>${desc}</p>
    `;
  // show the modal
  modalOutter.classList.add('open')
  console.log(modalOutter.querySelector('img').src);
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOutter.classList.remove('open')
} 

modalOutter.addEventListener('click', function(event){
  const isOutside = !event.target.closest('.modal-inner');
  console.log(isOutside);
  if(isOutside)
  {
    closeModal()    
  }
});

window.addEventListener('keydown', event=>{
  if (event.key === 'Escape'){
    closeModal()
  }
});