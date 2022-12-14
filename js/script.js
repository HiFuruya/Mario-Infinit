//IMAGENS
const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

//AUDIOS
const music = document.querySelector('.music');
const somPulo = document.querySelector('.som-pulo');
const gameOver = document.querySelector('.game-over');

//BOTOES
const buttonMusic = document.querySelector('.btn-music');
const buttonSound = document.querySelector('.btn-sound');

//SVGS
const musicNote = document.querySelector('.music-note');
const svgSound = document.querySelector('.svg-sound');

const pulo = () =>{
    if (!somPulo.src.includes("#")) {
        somPulo.play();
    }
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    },500)
};

document.addEventListener('keydown', pulo);


const loop = setInterval(()=> {

    const tuboPosition = tubo.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (tuboPosition <= 124 && marioPosition <= 100 && tuboPosition > 0) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "images/game-over.png";
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        if (!music.src.includes('#')) {
            music.src = '#'
            gameOver.play();
        }

        clearInterval(loop);
    }
}, 10);

buttonMusic.addEventListener('click', () => {

    if (music.src.includes('#')) {
        music.src = 'music/Overworld Theme - Super Mario World.mp3';
        music.play();
        buttonMusic.disabled = true;
        buttonMusic.disabled = false;
        musicNote.src = 'svg/music-note-beamed.svg';
    }else{
        music.src = '#';
        musicNote.src = 'svg/music-off-icon.svg';
    }
});

buttonSound.addEventListener('click', () => {

    if (!somPulo.src.includes('#')) {
        somPulo.src = '#';
        buttonSound.disabled = true;
        buttonSound.disabled = false;
        svgSound.src = 'svg/volume-mute.svg';
    }else{
        buttonSound.disabled = true;
        buttonSound.disabled = false;
        somPulo.src = 'music/Super Mario - Som do pulo do M??rio.mp3';
        svgSound.src = 'svg/volume-up.svg';
    }
});