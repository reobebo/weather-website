console.log('Client side javascript file is loaded');



const weatherForm=document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');



weatherForm.addEventListener('submit', (e)=>{
    const location =search.value;
    messageOne.textContent='Loading..';
    messageTwo.textContent='';
    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
    response.json().then((data)=>{
if(data.error){
    messageOne.textContent = data.error;
    console.log(data.error);
}else{
    messageOne.textContent = data.address;
    messageTwo.textContent = data.forcast;
        console.log(data.address);
        console.log(data.forcast);
    }
    })
}); 
    e.preventDefault();
    
    console.log(location);
})