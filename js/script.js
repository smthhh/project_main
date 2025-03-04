//Burger
document.querySelector('#burger').onclick = function () {
    document.querySelector('.burger').classList.toggle('show');
}

document.querySelector('#close').onclick = function () {
    document.querySelector('.burger').classList.remove('show');
}