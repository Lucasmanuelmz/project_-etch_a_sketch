let button = document.querySelector('#button');
 

function selectGrades() {
    const popUpNumber = 5176//parseInt(prompt('Enter the number of squares on each side: '));

    let container = document.querySelector('.container');
    container.innerHTML ='';

   if(popUpNumber <= 6400) {
    for(let i= 0; i < popUpNumber; i++){
        let div = document.createElement('div');
        div.classList.add('grade');
        container.appendChild(div);
    
    div.addEventListener('mouseover', (e) => {
        let divOuver = '0123456789ABCDEF';
        let backgroundColor = '#';
        for (let i = 0; i < 6; i++) {
            backgroundColor += divOuver[Math.floor(Math.random() * 16)];
        }
       e.target.style.backgroundColor = backgroundColor;

       setTimeout(() => {
        e.target.style.backgroundColor = 'black';
        }, 30000)
    }); 
    } 
   } else {
    alert('The number should not be greater than 100!');
}
}   

button.addEventListener('click', selectGrades);