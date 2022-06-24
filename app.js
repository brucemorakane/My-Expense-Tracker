var state ={
 balance:1000,
 income:400,
 expense:200,
 transactions:[
    {name: 'salary',amount :500, type: 'income'},
    {name: 'Buy Grocery',amount :50, type: 'expense'},
    {name: 'Buy Guitar',amount :500, type: 'expense'},
 ]
}
var balanceEL = document.querySelector('#balance');
var incomeEL = document.querySelector('#income');
var expenseEL = document.querySelector('#expense');
var transactionEL = document.querySelector('#transaction');

function init(){
  updateState();
  render();
}

function updateState(){
  var balance = 0;
      income = 0;
      expense = 0;
      item;
  for(var i = 0;i<state.transactions.length; i++) {
      item = state.transactions[i];

      if (item.type === 'income'){
         income += (item.type === 'expense') 
            expense += item.amount;
         }
      
      }

      console.log(balance, income , expense);
    } 




function render() {
  balanceEL.innerHTML = '$${state.balance}';
  incomeEL.innerHTML = '$${state.income}';
  expenseEL.innerHTML = '$${state.expense}';


  var transactionEL = document.createElement('li');
}

    var transactionEL; containerEL, amountEL, item;

  for (var i = 0;i <state.transactions.length; i++){
    item = state.transactions[i];
    transactionsEL = document.createElement('li');
    transactionEL.append(item.name[i].name);
     
    transactionEL.appendChild(transactionEL);

    containerEL = document.createElement('div');
    amountEL = document.createElement('span');
    if(item.type ==='income '){
      amountEl.classList.add('income-amt');
    } else if(item.type === 'expense'){
      amountEl.classList.add('expense-amt');
    }
    amountEL.innerHTML = '$${item.amount}';

    containerEL.appendChild(amountEL);

    btnEL = document.createElement('button');
    btnEL.innerHTML ='X';

    containerEL.appendChild(btnEL);

    transactionEL.appendChild(containerEL);
  }



    amountEL.classList.addd(amountEL);




  









