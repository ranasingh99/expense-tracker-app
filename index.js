
let mainDiv = document.getElementById('mainheddiv');
let mainheading = document.createElement('h1');
mainheading.className = 'mainHeading';
mainheading.textContent = 'Expense-Manager';
mainheading.style.textAlign = 'center';
mainheading.style.color = 'blue';
mainDiv.appendChild(mainheading);

function showexpenseonscreen(){
    
     const parentElement = document.getElementById('listofExpense');
     const childElement = document.createElement('li');
    let test1 = document.getElementById('expenseamt').value;
    let test2 = document.getElementById('expenseitem').value;
    let test3 = document.getElementById('expensecategory').value;
    let obj = {
        amt:test1,
        itme:test2,
        category:test3
    }
    childElement.textContent = test1+" "+test2+" "+test3;

   let myObj = JSON.stringify(obj);
   localStorage.setItem(test2,myObj);
   // deleteButton for deleting expense
    console.log()
   let deleteButton = document.createElement('input');
   deleteButton.type = 'button';
   deleteButton.value = 'Delete';
   deleteButton.className = 'dltbtn';
   deleteButton.id = 'btn1'
   deleteButton.onclick = ()=>{
    localStorage.removeItem(test2);
    parentElement.removeChild(childElement);
   }
   // edit button
   let editButton = document.createElement('input');
   editButton.type = 'button';
   editButton.value = 'Edit';
   editButton.onclick = ()=>{
    localStorage.removeItem(test2);
    parentElement.removeChild(childElement);
    document.getElementById('expenseamt').value = test1;
    document.getElementById('expenseitem').value = test2;
    document.getElementById('expensecategory').value = test3;

   }
  
   childElement.appendChild(deleteButton);
   childElement.appendChild(editButton);
   parentElement.appendChild(childElement);

}
