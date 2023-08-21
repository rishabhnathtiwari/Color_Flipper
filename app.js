const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    //get random number between 0-3 colors[1];
    // const randomNumber=2;
    const randomNumber=(getRandomNumbers());
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})

function getRandomNumbers(){

    return Math.floor(Math.random()*colors.length);
}