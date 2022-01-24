const colorBox = document.querySelector('.color-box');
const colors = ['red', 'green', 'blue', 'white', 'black', 'yellow', 'orange', 'violet']

colorBox.style.backgroundColor = 'grey';
colorBox.addEventListener('click', changeBackground);

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length)
    colorBox.style.backgroundColor = colors[colorIndex]
    }