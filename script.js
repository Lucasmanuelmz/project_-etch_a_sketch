let body = document.querySelector('body');
let button = document.querySelector('#button');
let container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

function hiddenClasslist() {
    let hiddenDiv = document.querySelector('#content-container');
    hiddenDiv.classList.add('hidden');
    button.style.cssText = ` 
    position: fixed; 
    padding: 10px 15px; 
    color: gray; 
    left: 20px;
    top: 20px
    background-color: #800020; 
    font-size: 17px; 
    border-radius: 16px;`;
    button.textContent ='Create new grid';
}

function createGrid(numberOfSquares) {
    container.innerHTML = ''; 

    for (let i = 0; i < numberOfSquares; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.flex = `1 1 calc(100% / ${numberOfSquares} - 1px;)`;
        container.appendChild(row);

        for (let j = 0; j < numberOfSquares; j++) {
            let div = document.createElement('div');
            div.classList.add('grade');
            div.style.flex = `1 1 calc(100% / ${numberOfSquares} - 1px;)`;
            row.appendChild(div);


        }
    }

    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grade')) {
            let divOuver = '0123456789ABCDEF';
            let backgroundColor = '#';
            for (let i = 0; i < 6; i++) {
                backgroundColor += divOuver[Math.floor(Math.random() * 16)];
                }
                e.target.style.backgroundColor = backgroundColor;
            }

            setTimeout( () => {
                e.target.style.backgroundColor = ''
            }, 3000)
    });

}

button.addEventListener('click', () => {
    let newNumber = parseInt(prompt('Enter the number of squares on each side: '));
    
    if (!isNaN(newNumber) && newNumber <= 45 && newNumber > 0) {
        createGrid(newNumber);
        hiddenClasslist();
    } else {
        alert('You can only enter a valid number between 1 and 45.');
    }
});

