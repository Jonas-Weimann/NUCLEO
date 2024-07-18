const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cliente1 = document.querySelector('.cliente-1');
const cliente2 = document.querySelector('.cliente-2');
const cliente3 = document.querySelector('.cliente-3');

leftArrow.addEventListener('click',()=>{
    console.log(cliente1);
    if (cliente2.classList.contains('active')) {
            cliente2.classList.toggle('active');
            cliente1.classList.toggle('active');
    } else {
        if (cliente3.classList.contains('active')) {
            cliente3.classList.toggle('active');
            cliente2.classList.toggle('active');
        }
    }
})

rightArrow.addEventListener('click',()=>{
    console.log(cliente1);
    if (cliente2.classList.contains('active')) {
            cliente2.classList.toggle('active');
            cliente3.classList.toggle('active');
    } else {
        if (cliente1.classList.contains('active')) {
            cliente1.classList.toggle('active');
            cliente2.classList.toggle('active');
        }
    }
})