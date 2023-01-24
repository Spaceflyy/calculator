let buttons = document.querySelectorAll('button');
let displayValue= '';
buttons.forEach((b)=>{
   b.addEventListener('click', function(){

      if(this.classList.value !== "operator"){
         populateDisplay(this.id);
      }
   
   });
});



function populateDisplay(buttonID)
{
   displayValue += buttonID;
   document.querySelector("#display").textContent = displayValue;
}

function add()
{

};

function subtract()
{

};

function multiply()
{

};

function divide()
{

};

function operate(operator, num1, num2)
{

};