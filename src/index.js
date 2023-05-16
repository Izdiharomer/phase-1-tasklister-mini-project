//document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  const submitButton = document.getElementById('Create-New-Task');
  const tasks = document.getElementById('tasks');
  const list = document.getElementById('list');
  const inputBox = document.getElementById('new-task-description')

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputBox.value === '') {
      alert('You must add a task here!')
    } else {
      let li = document.createElement('li');
      li.className = 'li'
      li.innerHTML = inputBox.value;
      list.appendChild(li)
      //Add the cross icon for deleting the task
      let span = document.createElement('span')
      span.innerHTML = '\u00d7'
      li.appendChild(span);

    }
    inputBox.value = '';
    saveData() 
  
  })


  //delete the task by clicking on the cross icon
  list.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      inputBox.value = '';
      saveData() 
    } else if (e.target.tagName === "SPAN") {
      if (e.target.parentElement) {
        e.target.parentElement.remove();
        inputBox.value = '';
        saveData() 
      }
    }
  }, false);
  
//Save data via local storage

function saveData() {
  localStorage.setItem("data", list.innerHTML)
}


function showTask() {
  list.innerHTML = localStorage.getItem("data");

} 
showTask()


//});


























// red for high priority, yellow for medium, green for low)