let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  if (calculation === ''){
    document.querySelector('.js-calculation')
    .innerHTML = '0';
  } else {
    document.querySelector('.js-calculation')
    .innerHTML = calculation;
  }
}