const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
  console.log('its ya boy');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);
