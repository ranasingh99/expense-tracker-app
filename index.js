
let mainDiv = document.getElementById('mainheddiv');
let mainheading = document.createElement('h1');
mainheading.className = 'mainHeading';
mainheading.textContent = 'Expense-Manager';
mainheading.style.textAlign = 'center';
mainheading.style.color = 'blue';
mainDiv.appendChild(mainheading);
// function savetolocalstorage(event){
//     event.preventDefault();
//     let amount = event.target.expensevalue.value;
//     let description = event.target.description.value;
//     localStorage.setItem("amount",amount);
//     localStorage.setItem('description',description);
//     console.log(amount);
//  showexpenseonscreen(amount,description);

//}

function showexpenseonscreen(){
     const parentElement = document.getElementById('listofExpense');
     const childElement = document.createElement('li');
    let test1 = document.getElementById('expenseamt').value;
    let test2 = document.getElementById('expenseitem').value;
    let test3 = document.getElementById('expensecategory').value;
   localStorage.setItem("expenseAmt",test1);
   localStorage.setItem("expenseitem",test2);
   localStorage.setItem("expensecategory",test3);
   childElement.textContent = test1+" "+test2+" "+test3;
   //console.log(childElement.textContent);
   parentElement.appendChild(childElement);

}

// let test1 = document.getElementById('expenseamt').value;
// let test2 = document.getElementById('expenseitem').value;




// function showUsersOnScreen(obj){
//     const parentElement = document.getElementById('listOfItems');
//     const childElement = document.createElement('li');
//     childElement.textContent = obj.name+" "+obj.email;
//     const deleteButton = document.createElement('input');
//      deleteButton.type = 'button';
//      deleteButton.value ='Delete';
//      deleteButton.id = 'btn-1';
//      deleteButton.onclick = ()=>{
//         localStorage.removeItem(obj.email);
//        parentElement.removeChild(childElement);
//     }

  

    //edit button 
//     const editButton = document.createElement('input');
//     editButton.type = 'button';
//     editButton.value = 'Edit';
//     editButton.id = 'btn-2';
//     editButton.onclick = ()=>{
//         localStorage.removeItem(obj.email);
//         parentElement.removeChild(childElement);
//         document.getElementById('username').value =obj.name;
//         document.getElementById('ueremail').value =obj.email;
//         document.getElementById('usercontact').value =obj.contact;
//         document.getElementById('datetime').value =obj.callhrs;
//     }
//     childElement.appendChild(deleteButton);
//     childElement.appendChild(editButton);
//     parentElement.appendChild(childElement);

      
//     let button1 = document.getElementById('btn-1');
//     button1.style.width = '50px';
//     let button2 = documnet.getElementById('btn-2');
//     button2.style.width = '50px';
   
// }
// ;