let numberButtons = document.querySelectorAll('button.number');
let operatorButtons = document.querySelectorAll('button.operator');
let clearButton = document.querySelector('#AC');
let display = document.querySelector('#display');
let deleteButton = document.querySelector('#DEL');
let displayValue= '';
let number1 = 0;
let number2 = 0;
let result = 0;
let op='';

operatorButtons.forEach((btn)=>{
   btn.addEventListener('click', function (e)
   {
      if (e.target.textContent !== '=' )
      {
         if(number1 == 0)
         {
            number1 = displayValue;
            op = e.target.textContent;
            display.innerHTML= '';
            displayValue = '';

         } else
         {
            number1 =result;
            console.log(number1);
            op =e.target.textContent;
            display.innerHTML= '';
            displayValue = '';
            
         }
      }else
      {
         number2 = displayValue;
         operate(op,number1,number2);
         op ='';
      }

   });

});

numberButtons.forEach((b)=>{
   b.addEventListener('click', function(e) 
   {
      populateDisplay(e.target.textContent);   
   });
});

clearButton.addEventListener('click',() =>{
   number1 = 0;
   number2 = 0;
   result = 0;
   op = ''
   displayValue = ''; 
   display.innerHTML = '';

});

deleteButton.addEventListener('click', () => {

   displayValue = displayValue.slice(0,-1);
   updateDisplay();
});

function populateDisplay(buttonID)
{
   displayValue += buttonID;
   updateDisplay();
}

function updateDisplay()
{
   display.textContent = displayValue;


}

function add(num1, num2)
{
   return num1+num2;
};

function subtract(num1, num2)
{
   return num1-num2;
};

function multiply(num1, num2)
{
   return num1*num2;
};

function divide(num1, num2)
{
   return num1/num2;
};

function operate(operator, num1, num2)
{
   num1 = Number(num1);
   num2 = Number(num2);

   switch (operator)
   {
      case '+':
         {
            result = add(num1,num2);
            displayValue = add(num1,num2);
            updateDisplay();
            break;
         }

      case '-':
         {
            result = subtract(num1,num2);
            displayValue = subtract(num1,num2);
            updateDisplay();
            break;
         }

      case '/':
         {
            result = divide(num1,num2);
            displayValue = divide(num1,num2);
            updateDisplay();
            break;
         }

      case '*':
         {
            result = multiply(num1,num2);
            displayValue = multiply(num1,num2);
            updateDisplay();
            break;
         }

   }
};