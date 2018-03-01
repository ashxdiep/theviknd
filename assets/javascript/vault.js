$(document).ready(function(){

  //for the pictures
  const gallery = document.querySelector('.gallery');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('img');
  const overlayClose= overlay.querySelector('.close');

  function makeHtmlforImages([h, v]){
    return `
      <div class = "item h${h} v${v}">
        <img src = "./assets/images/img${randomNumber(13)}.jpg">
        <div class = "item__overlay">
          <button> View --> </button>
        </div>
      </div>
      `
  }

  function randomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
  }

  //making a bunch of random sized images
  //adding a bunch of 1x1 so we can fill up those tiny hoes
  const digits = Array.from({ length: 12 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1],[1, 1],
    [1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]]);

  //making array of generated html converted into string
  const html = digits.map(makeHtmlforImages).join('');
  gallery.innerHTML = html;

  //making image pop up on click
  const items = document.querySelectorAll('.item');
  items.forEach(item => item.addEventListener('click', handleClick));

  function handleClick(e){

    console.log(e.currentTarget);
    const src = e.currentTarget.querySelector('img').src;
    //giving the overlay the image src so it can show

    overlayImage.src = src;

    overlay.classList.add('open');

    overlayClose.addEventListener('click', close);

    function close(){
      overlay.classList.remove('open');
    }
  }

  //open and close vault
  const galleryContainer = document.querySelector('.gallery-container');
  const vaultClose= galleryContainer.querySelector('.back');
  const name = document.querySelector('.name');
  const menu = document.querySelector('.menu');
  const footer = document.querySelector('.footer');
  const menulinks = document.querySelectorAll('.vault');
  menulinks.forEach(link => link.addEventListener('click', openVaultLink));

  function openVaultLink(e){
    galleryContainer.classList.add('open');
    name.classList.add('dim');
    menu.classList.add('dim');
    footer.classList.add('dim');

    //when the back button is clicked
    vaultClose.addEventListener('click', closeVault);

  }

  function closeVault(){

    galleryContainer.classList.remove('open');
    name.classList.remove('dim');
    menu.classList.remove('dim');
    footer.classList.remove('dim');
  }



});
