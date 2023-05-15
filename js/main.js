
const mMenuButton = document.querySelector('#mobile-menu');
const mMFirst = document.querySelectorAll('#mobile-menu::after');
const mMSecond = document.querySelector('#mobile-menu::before');
const mMenu = document.querySelector('#mobile-roll');
const playButton = document.querySelector('.ob-playbtn');
const videoBox = document.querySelector('.object-video video');
const bookSectionButton = document.querySelectorAll('.book-section>li>button');
const stockSection = document.querySelector('.stock');
const englishSection = document.querySelector('.english');
const classicSection = document.querySelector('.classic');
const interiorSection = document.querySelector('.interior');
const dietSection = document.querySelector('.diet');

console.log(bookSectionButton)

const mMenuActive = () => {
    mMenu.classList.toggle('menu-height');
}

mMenuButton.addEventListener('click', mMenuActive)

const objectVideoPlay = () => {
    playButton.classList.add('hidden');
    videoBox.classList.add('show');
    setTimeout(stopVideo,33600);
}

const stopVideo = () => {
    videoBox.classList.remove('show');
    playButton.classList.remove('hidden');
}

playButton.addEventListener('click', objectVideoPlay)



for(let i = 0 ; i<bookSectionButton.length ; i++){
    bookSectionButton[i].addEventListener('click',function(event){filter(event)});
}

const render = () => {
        stockSection.classList.add('hidden');
        englishSection.classList.add('hidden');
        classicSection.classList.add('hidden');
        interiorSection.classList.add('hidden');
        dietSection.classList.add('hidden');
        bookSectionButton[0].classList.remove('button-bg');
        bookSectionButton[1].classList.remove('button-bg');
        bookSectionButton[2].classList.remove('button-bg');
        bookSectionButton[3].classList.remove('button-bg');
        bookSectionButton[4].classList.remove('button-bg');
}

function filter(event){
    mode = event.target.id
    
    
    if( mode === "stock-button"){
        render();
        stockSection.classList.remove('hidden');
        bookSectionButton[0].classList.add('button-bg');
    }
    
    if( mode === "english-button" ){
        render();
        englishSection.classList.remove('hidden');
        bookSectionButton[1].classList.add('button-bg');

    }
    if(mode === "classic-button"){
        render();
        classicSection.classList.remove('hidden');
        bookSectionButton[2].classList.add('button-bg');

    }
    if(mode === "interior-button"){
        render();
        interiorSection.classList.remove('hidden');
        bookSectionButton[3].classList.add('button-bg');
    
    }else if(mode === "diet-button"){
        render();
        dietSection.classList.remove('hidden');
        bookSectionButton[4].classList.add('button-bg');
    
    } 
    
}


