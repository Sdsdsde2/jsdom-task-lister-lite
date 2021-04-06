document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const newDesc = document.getElementById("new-task-description").value;
    const newTask = document.createElement("li");
    newTask.innerText = newDesc;
    appendNewTask(newTask);
    //document.getElementById("list").appendChild(newDesc)
  });
});

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};