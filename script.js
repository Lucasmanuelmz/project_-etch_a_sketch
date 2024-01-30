let button = document.querySelector('#button');
 

function selectGrades() {
    const popUpNumber = parseInt(prompt('Enter the number of squares on each side: '));

    let container = document.querySelector('.container');
    container.innerHTML ='';

   if(popUpNumber <= 100) {
    for(let i= 0; i < popUpNumber; i++){
        let div = document.createElement('div');
        div.classList.add('grade');
        container.appendChild(div);
    

    div.addEventListener('mouseover', (e) => {
       e.target.style.backgroundColor = 'white';

       setTimeout(() => {
        e.target.style.backgroundColor = 'black';
        }, 500)
    }); 
    } 
   } else {
    alert('The number should not be greater than 100!');
}
}   

button.addEventListener('click', selectGrades);