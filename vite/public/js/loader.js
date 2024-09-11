/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  inshaAllah 
Ya Allaj,  please help in animation
*/

window.addEventListener('load',e => {
  const Loader = document.getElementById('Loader');
  const main_logo = Loader.querySelector('#main_logo');
  main_logo.style.opacity=1;
  setTimeout(() => {
    main_logo.style.opacity=0.01;
    main_logo.style.width ='17em';
    setTimeout(() => {
      main_logo.setAttribute('src','/img/02572.png');
      main_logo.style.opacity=1;
      setTimeout(() => {
        main_logo.style.width ='20em';
        main_logo.style.opacity=0.01;
      }, 1000);
    },1000);
  }, 1000);
  
})


