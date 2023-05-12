
const mMenuButton = document.querySelector('#mobile-menu');
const mMFirst = document.querySelectorAll('#mobile-menu::after');
const mMSecond = document.querySelector('#mobile-menu::before');
const mMenu = document.querySelector('#mobile-roll');
const playButton = document.querySelector('.ob-playbtn');
const videoBox = document.querySelector('.object-video video');




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