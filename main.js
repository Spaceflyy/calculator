let numberButtons = document.querySelectorAll('button.number');
let operatorButtons = document.querySelectorAll('button.operator');
let clearButton = document.querySelector('#AC');
let display = document.querySelector('#mainDisplay');
let deleteButton = document.querySelector('#DEL');
let miniDisplay = document.querySelector('#miniDisplay');


let displayValue= '';
let number1 = 0;
let number2 = 0;
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
            display.innerHTML= number1;
            miniDisplay.textContent = `${number1} ${op}`;
            displayValue = '';

         } else
         {
            number2 = displayValue;
            operate(op,number1,number2);
            number1 = displayValue;
            op =e.target.textContent;
            miniDisplay. textContent = `${number1} ${op}`;
            display.innerHTML= number1;
            displayValue = '';
            
         }
      }else
      {
         if (op !== ''){
            number2 = displayValue;
            operate(op,number1,number2);
            miniDisplay.textContent = `${number1} ${op} ${number2} =`;
            number1 = displayValue;
            op = '';
         }
      }

   });

});

numberButtons.forEach((b)=>{
   b.addEventListener('click', function(e) 
   {
      populateDisplay(e.target.textContent);   
      if(e.target.textContent == '.' && displayValue.includes('.'))
      {
         console.log(document.getElementById('.').disabled = true);
      }  else 
      {
         document.getElementById('.').disabled= false;
      }
   });
});


function clearAll()
{
   number1 = 0;
   number2 = 0;
   op = ''
   displayValue = ''; 
   display.innerHTML = 0;
   miniDisplay.textContent = '';
}

clearButton.addEventListener('click',clearAll);

deleteButton.addEventListener('click', () => {

   displayValue = String(displayValue).slice(0,-1);
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
            displayValue =  add(num1,num2);
            updateDisplay();
            break;
         }

      case '-':
         {
            displayValue = subtract(num1,num2);
            updateDisplay();
            break;
         }

      case '/':
         {
            if(num1 !== 0 && num2 !== 0)
            {
            displayValue = divide(num1,num2);
            } else
            {
               alert("Cannot divide by 0");
               clearAll();
            }
            updateDisplay();
            break;
         }

      case '*':
         {
            displayValue = multiply(num1,num2);
            updateDisplay();
            break;
         }

   }
};