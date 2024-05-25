const redButton = document.getElementById('redButton');
const yellowButton = document.getElementById('yellowButton');
const greenButton = document.getElementById('greenButton');
const cars = document.querySelectorAll('.car');
const tyres = document.querySelectorAll('.tair img');

let carAnimations = [];
let tyreAnimations = [];

cars.forEach((car, index) => {
    carAnimations[index] = {
        animation: car.style.animation,
        playState: 'paused'
    };
});

tyres.forEach((tyre, index) => {
    tyreAnimations[index] = {
        animation: tyre.style.animation,
        playState: 'paused'
    };
});

redButton.addEventListener('click', () => {
    pauseAnimations();
});

yellowButton.addEventListener('click', () => {
    pauseAnimations();
    cars.forEach((car, index) => {
        car.style.animation = carAnimations[index].animation.replace('10s', '15s');
        carAnimations[index].playState = 'running';
    });
    tyres.forEach((tyre, index) => {
        tyre.style.animation = tyreAnimations[index].animation.replace('3s', '6s');
        tyreAnimations[index].playState = 'running';
    });
});

greenButton.addEventListener('click', () => {
    pauseAnimations();
    cars.forEach((car, index) => {
        car.style.animation = carAnimations[index].animation;
        carAnimations[index].playState = 'running';
    });
    tyres.forEach((tyre, index) => {
        tyre.style.animation = tyreAnimations[index].animation;
        tyreAnimations[index].playState = 'running';
    });
    resumeAnimations();
});

function pauseAnimations() {
    cars.forEach((car, index) => {
        car.style.animationPlayState = 'paused';
        carAnimations[index].playState = 'paused';
    });
    tyres.forEach((tyre, index) => {
        tyre.style.animationPlayState = 'paused';
        tyreAnimations[index].playState = 'paused';
    });
}

function resumeAnimations() {
    cars.forEach((car, index) => {
        let animationDuration = car.style.animationDuration;
        if (animationDuration === '') {
            animationDuration = '10s'; // Default duration if not set
        }
        car.style.animation = carAnimations[index].animation.replace(/(\d+)s/, animationDuration);
        car.style.animationPlayState = carAnimations[index].playState;
    });
    tyres.forEach((tyre, index) => {
        let animationDuration = tyre.style.animationDuration;
        if (animationDuration === '') {
            animationDuration = '3s'; // Default duration if not set
        }
        tyre.style.animation = tyreAnimations[index].animation.replace(/(\d+)s/, animationDuration);
        tyre.style.animationPlayState = tyreAnimations[index].playState;
    });
}
