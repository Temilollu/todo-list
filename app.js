const inputFields = document.querySelectorAll('input');
const submitButton = document.querySelector('button');
const arti = document.querySelector('article');

let taskValue = inputFields[0].value;
let reminderValue = inputFields[1].value;
const todoList = []

function submitHandler(){
     taskValue = inputFields[0].value.trim();
 reminderValue = inputFields[1].value.trim();
if(taskValue == ''|| reminderValue == ''){
    alert('Input fields can\'t be empty')
}
else if(taskValue.length > 20){
    alert('Task can\'t be more than 20 letters long')
}

 const todoHandler = {
        id : Math.random().toString(),
        Task: taskValue,
        Deadline: reminderValue
    }

todoList.push(todoHandler);
console.log(todoList);
resetInput();
addToDoList(todoHandler.id,todoHandler.Task,todoHandler.Deadline)

}

function resetInput(){
inputFields[0].value = ' ';
    inputFields[1].value = ' ';
}

function addToDoList(id,tasks,remind){
    const displayElem = document.createElement('div');
    displayElem.innerHTML = `
     <h3>Task : ${tasks} </h3>
        <p>Deadline : ${remind} </p>
         <img src="close.png" alt="" class="close-icon">
`
    if (taskValue == '' || reminderValue == '' || taskValue.length > 20){
    return;
}
    arti.append(displayElem)
    const closeToDo = document.querySelectorAll('.close-icon')
 
  var i;
    for(i = 0; i < closeToDo.length; i++ ){
        
        closeToDo[i].onclick = function () {
            var div = this.parentElement;
         
            div.style.display = "none";
        }
    }
}

submitButton.addEventListener('click', submitHandler)
