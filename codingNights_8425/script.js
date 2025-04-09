// Elementi del DOM: app container
const appContainer = document.querySelector('#app-container');
console.log(appContainer);

const videoContainer = document.querySelectorAll('video');
console.log(videoContainer);


// Variabili globali
const halfScreenHeight = window.innerHeight / 2;
// Eventi: Scroll dell'app containner, click
// appContainer.addEventListener('scroll', () => {
//     console.log('Scroll dell\'app container');
// });
// appContainer.addEventListener('click', () => {
//     console.log('Click sull\'app container');
// });
appContainer.addEventListener('scroll', function() {
    console.log('Scroll app container')
//Per ogni video
videoContainer.forEach((video, index) => {
    
    //Recupero le infomazione della pozisione del video nella pagina
    const videoRect = video.getBoundingClientRect();
    //Determinare la distanza fra il bordo superiore del video e il bordo superiore della pagina
    console.log(index, videoRect);

    //Se il bordo superiore del video videoRect è maggiore di halfScreenHeight faccio partire il video oppure lo metto in pausa
    if(videoRect.top >= 0 && videoRect.top <= halfScreenHeight) {
        video.play();
    }
    else {
        video.pause();
    }

    });
    
    
});