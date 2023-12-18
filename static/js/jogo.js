const harry = document.querySelector('.harry');
const pipe = document.querySelector('.pipe');

const jump = () => {
    harry.classList.add('jump');

    setTimeout(()=>{
        harry.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const harryPosition = +window.getComputedStyle(harry).bottom.replace('px', '');

    if (pipePosition <= 30 && pipePosition > 0 && harryPosition < 140) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        harry.style.animation = 'none';
        harry.style.bottom = `${harryPosition}px`

        harry.src = '../static/img/vassoura.gif'

        clearInterval(loop);

    }

}, 10);
document.addEventListener('keydown', jump);

