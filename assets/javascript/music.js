$(document).ready(function(){
  var twisted= new Audio('./assets/images/Twist.mp3');
  twisted.volume = 0.5;
  twisted.pause();

  var better = new Audio ('./assets/images/Better.mp3');
  better.volume = 0.5;
  better.pause();

  const songs = document.querySelectorAll('.trigger');
  songs.forEach(song => song.addEventListener('click', playpauseSong));

  function playpauseSong(e){
    console.log(e.target.id);
    var songname = e.target.id;
    var songclasspause = '.' + songname + 'pause';
    var songclassplay = '.' + songname + 'play';
    console.log(songclasspause, songclassplay);
    if (songname == 'twisted'){
      if (twisted.paused == false) {
          twisted.pause();
          $(songclassplay).show();
          $(songclasspause).hide();
          $('.music-card').removeClass('playing');
      } else {
          twisted.play();
          $(songclasspause).show();
          $(songclassplay).hide();
          $('.music-card').addClass('playing');
      }
    }
    else if (songname == 'better'){
      if (better.paused == false) {
          better.pause();
          $(songclassplay).show();
          $(songclasspause).hide();
          $('.music-card').removeClass('playing');
      } else {
          better.play();
          $(songclasspause).show();
          $(songclassplay).hide();
          $('.music-card').addClass('playing');
      }
    }
    }

    //open and close music
    const musicContainer = document.querySelector('.music-container');
    const musicClose= musicContainer.querySelector('.music-back');
    const name = document.querySelector('.name');
    const menu = document.querySelector('.menu');
    const footer = document.querySelector('.footer');
    const musics = document.querySelectorAll('.music');
    musics.forEach(link => link.addEventListener('click', openMusic));

    function openMusic(e){
      console.log('open');

      musicContainer.classList.add('open');
      name.classList.add('dim');
      menu.classList.add('dim');
      footer.classList.add('dim');

      //when the back button is clicked
      musicClose.addEventListener('click', closeMusic);

    }

    function closeMusic(){

      musicContainer.classList.remove('open');
      name.classList.remove('dim');
      menu.classList.remove('dim');
      footer.classList.remove('dim');
    }


    // Init ScrollMagic
  	var controller = new ScrollMagic.Controller();

  	// Scene 1 - pin the second section
  	var pinScene01 = new ScrollMagic.Scene({
  		triggerElement: '.music-container',
  		triggerHook: 0,
  		duration: '100%'
  	})
  	.setPin('.uno .pin-wrapper')
  	.addTo(controller);

    // Scene 2 - pin the second section
  	var pinScene02 = new ScrollMagic.Scene({
  		triggerElement: '.music-container',
  		triggerHook: 0,
  		duration: '100%'
  	})
  	.setPin('.dos .pin-wrapper')
  	.addTo(controller);
});
