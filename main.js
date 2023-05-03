let inp = document.querySelector('.conv__inp');
let output = document.querySelector('.conv__output');
let som = document.querySelector('.som').addEventListener('click', () => {
    output.textContent = (+inp.value);
});
let rub = document.querySelector('.rub').addEventListener('click', () => {
    output.textContent = (+inp.value) * 1.2;
});
let dol = document.querySelector('.dol').addEventListener('click', () => {
    output.textContent = (+inp.value) * 84;
});;
let ten = document.querySelector('.ten').addEventListener('click', () => {
    output.textContent = (+inp.value) * 5;
});;
let eur = document.querySelector('.eur').addEventListener('click', () => {
    output.textContent = (+inp.value) * 100;
});;
