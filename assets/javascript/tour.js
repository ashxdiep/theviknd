$(document).ready(function(){
  //open and close tour
  const tourContainer = document.querySelector('.tour-container');
  const tourClose= tourContainer.querySelector('.tour-back');
  const name = document.querySelector('.name');
  const menu = document.querySelector('.menu');
  const footer = document.querySelector('.footer');
  const tours = document.querySelectorAll('.tour');
  tours.forEach(link => link.addEventListener('click', openTour));

  function openTour(e){
    console.log('open');

    tourContainer.classList.add('open');
    name.classList.add('dim');
    menu.classList.add('dim');
    footer.classList.add('dim');

    //when the back button is clicked
    tourClose.addEventListener('click', closeTour);

  }

  function closeTour(){

    tourContainer.classList.remove('open');
    name.classList.remove('dim');
    menu.classList.remove('dim');
    footer.classList.remove('dim');
  }
});
