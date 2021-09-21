let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


document.querySelectorAll('.t-shirt-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.t-shirt-image-2').forEach(image_2 =>{
    image_1.addEventListener('click', () => {
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.t-shirt-image-3').forEach(image_3 =>{
    image_1.addEventListener('click', () => {
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.t-shirt-image-4').forEach(image_4 =>{
    image_1.addEventListener('click', () => {
        var src = image_4.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});