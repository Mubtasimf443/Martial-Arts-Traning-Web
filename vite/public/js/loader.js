/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  inshaAllah 
Ya Allaj,  please help in animation
*/

window.addEventListener('load',e => {
  const Loader = document.getElementById('Loader');
  const main_logo = Loader.querySelector('#main_logo');
  const y_logo_1 = Loader.querySelector('#y_logo_1');
  const y_logo_2 = Loader.querySelector('#y_logo_2');
  const y_logo_container=Loader.querySelector('div');
  let animaionTime =90;
  function animation() {
    // first y logo will apear slidely
    setTimeout(() => {
      y_logo_container.style.transition="all 1500ms ease-in-out";
      y_logo_1.style.transition="all 1500ms ease";
      y_logo_2.style.transition="all 1500ms ease";
      y_logo_container.style.translate = '0px 0vh';
      y_logo_1.style.opacity=1;
      y_logo_2.style.opacity=1;
    setTimeout(e => {
      // MAIN Logo apeare
      main_logo.style.transition = 'all 600ms ease-in-out';
      main_logo.style.opacity = 1;
      main_logo.style.marginTop = '-3em'
    setTimeout(e => {
      y_logo_1.style.transition ='all 800ms ease-in-out';
      y_logo_2.style.transition ='all 800ms ease-in-out';
      y_logo_1.style.translate ='-30vw 0vh';
      y_logo_1.style.opacity =.05;
       y_logo_2.style.translate ='30vw 0vh';
      y_logo_2.style.opacity =.05;
    },600)
    },1500)
    },5)
  } 
  
  requestAnimationFrame(animation);
})


















