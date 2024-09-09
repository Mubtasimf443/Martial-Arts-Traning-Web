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
        headerIcon.setAttribute('src','/img/newhi.jpg');
        headerNavIcon.style.color= 'white';
        return
    }
    if (!entries[0].isIntersecting) {
        header.style.backgroundColor =  'transparent';;
        headerAnchor.forEach(anchor => anchor.style.color ='#000');
        headerIcon.setAttribute('src' ,'/img/n.png');
        headerNavIcon.style.color= 'black';

        return
    }
})


VisibilityObserver.observe(heroH1)
