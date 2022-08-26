const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const pulo = () =>{
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

        clearInterval(loop);
    }
}, 10);