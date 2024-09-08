/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   
Insha Allab,  By the marcy of Allah,  I will gain success
*/

let header = document.querySelector('header');
let headerIcon = document.querySelector('.hd-icon');
let headerAnchor = header.querySelectorAll('a');
let headerBtn = header.querySelector('button');
let hero= document.getElementById('Hero_section');
let heroH1 = hero.querySelector('h1')
let headerNavIcon = header.querySelector('i')

let VisibilityObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        header.style.backgroundColor = 'transparent';
        headerAnchor.forEach(anchor => anchor.style.color ='#fff');
        header.style.boxShadow = '0px 0px 10px rgba(0,0,0,0)';
        headerIcon.setAttribute('src','/img/newhi.jpg');
        headerNavIcon.style.color= 'rgba(255, 255,255,.85)';
        return
    }
    if (!entries[0].isIntersecting) {
        header.style.backgroundColor = 'white';
        headerAnchor.forEach(anchor => anchor.style.color ='#000');
        header.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.15)';
        headerIcon.setAttribute('src' ,'/img/n.png');
        headerNavIcon.style.color= 'rgba(0,0,0,1)';

        return
    }
})


VisibilityObserver.observe(heroH1)
