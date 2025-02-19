let weight = document.getElementById('weightinput');
let height= document.getElementById('heightinput');
let button = document.getElementById('btn');
let para = document.getElementById('ans');

function calculate(weight,height){
    let result = weight.value/(height.value/100*height.value/100);
    para.innerText = "Your BMI = " + result.toFixed(2);
if (result < 18.5) {
    para.style.color = 'blue';  
} else {
    if (result < 25) {
        para.style.color = 'green';  
    } else {
        if (result < 30) {
            para.style.color = 'orange'; 
        } else {
            para.style.color = 'red'; 
        }
    }
}
    
}

button.addEventListener('click',()=>{
    if(weight.value===""||height.value===""){
        alert("Enter Height and Weight Value");
    }else{
        calculate(weight,height);
    }
})