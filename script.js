

const container = document.querySelector('#container');
const bGroup = document.querySelector('#bGroup');

let reset = document.createElement('button');
reset.classList.add('btn');
reset.textContent = 'Grid Reset';
bGroup.appendChild(reset);

reset.addEventListener('click', (e) => {
    var x = prompt('How many squares wide should the grid be? Please type a number between 1 and 125.');
    var num = parseInt(x);
    
    newGrid(num);
});


function newGrid(y) {

    if (y <= 125 && y > 0) {
        document.getElementById("container").innerHTML = "";

        container.style.gridTemplateRows = `repeat(${y}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${y}, 1fr)`;


        for (let i = 0; i < (y * y); i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);     
        }


        boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.addEventListener('mouseover', (e) => {
                box.classList.add('etchOver');
            });
        });
    } else {
        alert('This number is too big!');
    }
}

newGrid(16);