let tasks = [];

let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn")
let list = document.getElementById("taskList")

button.addEventListener("click", addTask);

// function for add task
function addTask() {
    let text = input.value.trim();
    if (text === "") return;

    tasks.push(text);
    input.value = "";

    displayTasks();
}

// function for diaplay task
function displayTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.textContent = task + "";

        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.onclick = function () {
            li.style.textDecoration = "line-through";
        };

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onClick = function() {
            deleteTask(index);
        }

        li.appendChild(doneBtn);
        li.appendChild(delBtn);

        list.appendChild(li)
    });
}

// function for delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}