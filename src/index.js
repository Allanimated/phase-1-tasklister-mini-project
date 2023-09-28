document.addEventListener("DOMContentLoaded", () => {
  //submit event
  document.querySelector('#create-task-form').addEventListener('submit', submitTask);
});

function submitTask(e) {
  //prevent default behaviour
  e.preventDefault();
  //get the input node 
  const input = document.querySelector('#new-task-description');
  //get the content inside input node
  const newTaskDescription = input.value;
  //check input validity
  if (!newTaskDescription) {
    alert("Please type a task");
  }else {
    //select task list
    const ul = document.querySelector('#tasks');
    //create new li elements
    const li = document.createElement('li');
    //initialize text content with task description
    li.textContent = newTaskDescription;
    // append li to ul
    ul.appendChild(li);
    //clear out the input field
    input.value="";
    //create delete button
    const btn = document.createElement('button');
    btn.textContent = "del"
    li.appendChild(btn);
    btn.style.marginLeft = "10px"
    //add eventlistener to button
    btn.addEventListener('click', deleteTask);
    //create dropdown
    const select = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    option1.textContent = "Red";
    option2.textContent = "Yellow";
    option3.textContent = "Green"
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.style.marginLeft = "10px";
    li.appendChild(select);
    //add event listener for dropdown 
    select.addEventListener('change', changePriority);

  }
  
}

//delete task function
function deleteTask() {
  //delete parentNode
  console.log(this);
  this.parentNode.remove();
}

//toggle priority using color
function changePriority(e) {
  switch (this.value) {
    case "Red":
      this.parentNode.style.color = "red"
      break;
    case "Yellow":
      this.parentNode.style.color = "yellow"
      break;
    case "Green":
      this.parentNode.style.color = "green"
      break;
    default:
      this.parentNode.style.color = "black"
      break;
  }
  
  
}