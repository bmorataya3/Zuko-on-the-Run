const dog = document.getElementById('dog');
const rock = document.getElementById('rock');
const food = document.getElementById('food');
const score = document.getElementById('score');

function jump() {
    dog.classList.add("jump-animation");
    setTimeout(() => 
        dog.classList.remove("jump-animation"), 500);
}
document.addEventListener('keypress', (event) => {
    if (!dog.classList.contains('jump-animation')){
        jump();
    }
})

setInterval(() => {
    const dogTop = parseInt(window.getComputedStyle(dog)
    .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
    score.innerText++;

    if (rockLeft < 0) {
    rock.style.display = 'none';
    } else {
    rock.style.display = ''
    }

    if (rockLeft < 50 && rockLeft > 0 && dogTop > 150) {
    alert("You got a score of: " + score.innerText +
        "\n\nPlay again?");
    location.reload();
    }
}, 50);