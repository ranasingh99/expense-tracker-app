
function savetolocalstorage(event){
    event.preventDefault();
    let amount = event.target.amount_value.value;
    localStorage.setItem(amount);
}