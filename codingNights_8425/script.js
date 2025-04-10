// Elementi del DOM
const appContainer = document.querySelector('#app-container');
console.log(appContainer);

const videos = document.querySelectorAll('video');
console.log(videos);

const audioIcons = document.querySelectorAll('.volume');

const heartIcons = document.querySelectorAll('.like');


// Variabili globali
const halfScreenHeight = window.innerHeight / 2;


appContainer.addEventListener('scroll', function () {
    console.log('Scroll app container')
    //Per ogni video
    videos.forEach((video, index) => {

        //Recupero le infomazione della pozisione del video nella pagina
        const videoRect = video.getBoundingClientRect();
        //Determinare la distanza fra il bordo superiore del video e il bordo superiore della pagina
        console.log(index, videoRect);
        //Se il bordo superiore del video videoRect è maggiore di halfScreenHeight faccio partire il video oppure lo metto in pausa
        if (videoRect.top >= 0 && videoRect.top <= halfScreenHeight) {
            video.play();
        }
        else {
            video.pause();
        };
    });
});

// Variable para controlar el estado del audio
let isVolumeEnabled = false;

audioIcons.forEach((audioIcon) => {
    audioIcon.addEventListener('click', () => {
        isVolumeEnabled = !isVolumeEnabled;

        //Per ogni video cambio il valore dell'attributo muted
        // videos.forEach((video) => {
        //     if (isVolumeEnabled == true) {
        //         video.muted = false
        //     } else {
        //         video.muted = true
        //     }
        // });
        // Cambia el estado de mute en todos los videos
        videos.forEach((video) => {
        video.muted = !isVolumeEnabled;
         });

        //Cambio l'icona dell'auduio all click
        // let iconClass = "";
        // if (isVolumeEnabled == true) {
        //     iconClass = "fa-solid fa-volume-high volume";
        // } else {
        //     iconClass = "fa-solid fa-volume-xmark volume";
        // };
        // audioIcons.forEach((audioIcon) => {
        //     audioIcon.className = iconClass;
        // });

         // Cambia la clase del ícono de audio
         const iconClass = isVolumeEnabled
         ? "fa-solid fa-volume-high volume"
         : "fa-solid fa-volume-xmark volume";
     audioIcons.forEach((icon) => {
         icon.className = iconClass;
     });
    });
});

// Agrega un evento de clic a cada ícono
heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener('click', () => {
        // Alterna la clase 'heart-red' para cambiar el color
        heartIcon.classList.toggle('heart-red');
// Crear un corazón flotante
const floatingHeart = document.createElement('span');
floatingHeart.classList.add('floating-heart');

// Verifica si el ícono tiene la clase 'heart-red'
if (heartIcon.classList.contains('heart-red')) {
    floatingHeart.innerHTML = '❤️'; // Corazón lleno
} else {
    floatingHeart.innerHTML = '💔'; // Corazón roto
}

        // Posicionar el corazón flotante cerca del ícono
        const rect = heartIcon.getBoundingClientRect();
        floatingHeart.style.left = `${event.clientX - rect.left}px`;
        floatingHeart.style.top = `${event.clientY - rect.top}px`;

        // Agregar el corazón al contenedor del ícono
        heartIcon.parentElement.appendChild(floatingHeart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            floatingHeart.remove();
        }, 1500); // Duración de la animación (1.5s)
        
    });
});