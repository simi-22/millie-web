
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
const contentTitle = document.querySelectorAll('.content-title li')



//

const mMenuActive = () => {
    mMenu.classList.toggle('menu-height');
}

mMenuButton.addEventListener('click', mMenuActive)


//
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



const videoPause = document.querySelector('.object-video video');


const videoPauseEvent = () => {
    if (videoPause.paused) {
        videoPause.play(); 
      } else { 
        videoPause.pause();
      } 
}

videoPause.addEventListener('click', videoPauseEvent)





//


const viewerBoxButton =document.querySelector('#v-button')
const audioBoxButton = document.querySelector('#a-button')
const audioBookZone = document.querySelector('#audio-book');
const viewerBookZone = document.querySelector('#viewer-book');

viewerBoxButton.addEventListener('click', function(){
    audioBookZone.classList.add('hidden');
    viewerBookZone.classList.remove('hidden');
    audioBoxButton.classList.remove('content-title-bg');
    viewerBoxButton.classList.add('content-title-bg');
})

audioBoxButton.addEventListener('click', function(){
    audioBookZone.classList.remove('hidden');
    viewerBookZone.classList.add('hidden');
    audioBoxButton.classList.add('content-title-bg');
    viewerBoxButton.classList.remove('content-title-bg');
})




//
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


//

const audioBookButton = document.querySelectorAll('.audio-book-button li button')
const viewerButton = document.querySelectorAll('.millie-viewer-button li button')
const audioContentVideo = document.querySelectorAll('#audio-book .phone-frame div p')
const audioContentTitle = document.querySelector('#audio-book .left-bottom b');
const audioContentComment = document.querySelector('#audio-book .left-bottom span');

const viewerContentVideo = document.querySelectorAll('#viewer-book .phone-frame div p')
const viewerContentTitle = document.querySelector('#viewer-book .left-bottom b');
const viewerContentComment = document.querySelector('#viewer-book .left-bottom span');

console.log(viewerContentTitle)

for(let i = 0 ; i<audioBookButton.length ; i++){
    audioBookButton[i].addEventListener('click',function(e){contentFilter(e)});
}

const contentRender = () => {
        audioBookButton[0].classList.remove('button-bg');
        audioBookButton[1].classList.remove('button-bg');
        audioBookButton[2].classList.remove('button-bg');
        audioBookButton[3].classList.remove('button-bg');
        audioContentVideo[0].classList.add('hidden');
        audioContentVideo[1].classList.add('hidden');
        audioContentVideo[2].classList.add('hidden');
        audioContentVideo[3].classList.add('hidden');
}

function contentFilter(e){
    mode = e.target.id
    
    
    if( mode === "c-button1"){
       
        contentRender();
        audioBookButton[0].classList.add('button-bg');
        audioContentVideo[0].classList.remove('hidden');
        audioContentTitle.innerHTML = `하루의 시작과 마무리를 오디오북과 함께`
        audioContentComment.innerHTML =`지하철에서도 잠들기 전에도 독서하세요`


    }
    
    if( mode === "c-button2" ){
       
        contentRender();
        audioBookButton[1].classList.add('button-bg');
        audioContentVideo[1].classList.remove('hidden');
        audioContentTitle.innerHTML = `귀로 듣다가 눈으로도 같이 보면`
        audioContentComment.innerHTML =`더 내용이 잘 이해돼요`

    }
    if(mode === "c-button3"){
       
        contentRender();
        audioBookButton[2].classList.add('button-bg');
        audioContentVideo[2].classList.remove('hidden');
        audioContentTitle.innerHTML = `30분만에 책 요약`
        audioContentComment.innerHTML =`핵심만 쏙 골라 읽어주는 오디오북`

    }else if(mode === "c-button4"){
       
        contentRender();
        audioBookButton[3].classList.add('button-bg');
        audioContentVideo[3].classList.remove('hidden');
        audioContentTitle.innerHTML = `이제훈부터 옥주현까지`
        audioContentComment.innerHTML =`셀럽이 읽어주는 오디오북`
    }
    
}



//

for(let i = 0 ; i<viewerButton.length ; i++){
    viewerButton[i].addEventListener('click',function(k){viewerFilter(k)});
}

const viewerRender = () => {
    viewerButton[0].classList.remove('button-bg');
    viewerButton[1].classList.remove('button-bg');
    viewerButton[2].classList.remove('button-bg');
    viewerButton[3].classList.remove('button-bg');
    viewerContentVideo[0].classList.add('hidden');
    viewerContentVideo[1].classList.add('hidden');
    viewerContentVideo[2].classList.add('hidden');
    viewerContentVideo[3].classList.add('hidden');
}

function viewerFilter(k){
    mode = k.target.id
    
    if( mode === "c-button1"){
       
        viewerRender();
        viewerButton[0].classList.add('button-bg');
        viewerContentVideo[0].classList.remove('hidden');
        viewerContentTitle.innerHTML = `시선 추적 기능`
        viewerContentComment.innerHTML =`눈동자로 페이지를 넘길 수 있어요`


    }
    
    if( mode === "c-button2" ){
       
        viewerRender();
        viewerButton[1].classList.add('button-bg');
        viewerContentVideo[1].classList.remove('hidden');
        viewerContentTitle.innerHTML = `어느 기기에서도 OK`
        viewerContentComment.innerHTML =`스마트폰, 태블릿, PC, E ink 기기까지`

    }
    if(mode === "c-button3"){
       
        viewerRender();
        viewerButton[2].classList.add('button-bg');
        viewerContentVideo[2].classList.remove('hidden');
        viewerContentTitle.innerHTML = `다크모드`
        viewerContentComment.innerHTML =`전자책이 눈 아프다는 편견은 버려요`

    }else if(mode === "c-button4"){
       
        viewerRender();
        viewerButton[3].classList.add('button-bg');
        viewerContentVideo[3].classList.remove('hidden');
        viewerContentTitle.innerHTML = `자유로운 보기 설정`
        viewerContentComment.innerHTML =`줄 간격부터 폰트까지 내 마음대로 설정하면<br>더욱 편한 독서를 할 수 있어요`
    }
    
}


const questionList = document.querySelectorAll('#question ul li');

for(let i = 0 ; i < questionList.length; i++){
questionList[i].addEventListener('click', function(s){wideList(s)});
}

function wideList(s){
    mode = s.target.id
    if(mode === "question1"){
        questionList[0].classList.toggle('list-height')
    }if(mode === "question2"){
        questionList[1].classList.toggle('list-height')
    }if(mode === "question3"){
        questionList[2].classList.toggle('list-height')
    }else if(mode === "question4"){
        questionList[3].classList.toggle('list-height')
    }
}

console.log(questionList)