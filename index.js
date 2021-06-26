const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let changeColor = null;

// Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}; 

start.addEventListener('click', () => {        
    changeColor = setInterval(() => {            
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);

    start.setAttribute('disabled', true);
    stop.removeAttribute('disabled');
});

stop.addEventListener('click', () => {
    clearInterval(changeColor);

    stop.setAttribute('disabled', true);
    start.removeAttribute('disabled');
});