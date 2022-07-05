const addNewBtn = document.querySelector('#addExpense');
const formInputField = document.querySelector('.expense-form');
const cancelBtn = document.querySelector('#buttonOne');
const addItemBtn = document.querySelector('#buttonTwo');
const inputItemField = document.querySelectorAll('input');
const expenseList = document.querySelector('.list-menu');
const listHeader = document.querySelector('.expense-list-head');
const itemList = document.querySelectorAll('.expense-items-list');
const listEL = document.querySelector('.list');



// let expenses = {expenseListItem : [{item: 'House', date: '1,july, 2022', amount: 100}]}


 // listEL.innerHTML = '';





addNewBtn.addEventListener('click', function(){
    formInputField.style.display = 'block';
});

cancelBtn.addEventListener('click', function(){


    inputItemField.forEach(input => {
        input.value = ''
    });

    formInputField.style.display = 'none';
    
})

 addItemBtn.addEventListener('click', function(){
    let item = '';
    let amount = 0;
    let date = '';

    // console.log('All input:', inputItemField);
    // console.log('Title field:', inputItemField[0].value);
    // console.log('Amount field:', inputItemField[1].value);
    // console.log('Date field:', inputItemField[2].value);

    if(inputItemField[0].value.trim() === '' || (inputItemField[1].value === '' || inputItemField[1].value <= 0) || inputItemField[2].value === '') {
        return alert('you no dey see \n fill the empty fields out!');
    }



   
    inputItemField.forEach(input => {
        if(input.type === 'text') {
            item = input.value;
        }

       else if(input.type === 'number') {
            amount = input.value;
        }

       else if(input.type === 'date') {
            date = input.value;
        }

    
    });

    listHeader.style.display = 'block';

    expenseList.innerHTML += listOfExpenses(item, amount, date);
    formInputField.style.display = 'none';

    inputItemField.forEach(input => {
        input.value = ''
    });

    removeButtonItem();

    cancelBtn.addEventListener('click', function(){


    inputItemField.forEach(input => {
        input.value = ''
    });
    
    formInputField.style.display = 'none';
    
}) 
// will reove

// const removeBtn = document.querySelector('#remove');
//  console.log(removeBtn)
//  removeBtn.addEventListener('click', function() {
//     expenseList.style.display = 'none'
//  })
  
});


 function listOfExpenses(item, amount, date) {

     const theMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'july', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const presentPeriod = date.split('-');

    const presentYear = presentPeriod[0];
    const presentMonth = presentPeriod[1];
    const presentDay = presentPeriod[2];

    return (`
    <li class="list">
    <p class="expense-items-list" id="list-date"><span>${presentDay}</span><br><span>${theMonth[presentMonth - 1]}</span><br><span>${presentYear}</span></p>
    <p class="expense-items-list" id="list-item">${item}</p>
    <p class="expense-items-list" id="list-amount">&dollar;${amount}</p>
    <button  id="remove" class="expense-items-list out">Remove</button>
   </li>
`)
 };




// listOfExpenses('item: inputItemField[0].value', 'amount: inputItemField[1].value', 'date: inputItemField[2].value');







const ul = document.querySelector('ul');

 function removeButtonItem() {
    document.querySelectorAll('#remove').forEach((removeBtn, i) => {
        removeBtn.addEventListener('click', function(){
            ul.removeChild(document.querySelectorAll('.list')[i]);
        })

    })

   



 }
   