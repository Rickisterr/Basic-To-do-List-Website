function taskClicked(obj) {
    var selected_task = document.getElementById('selected-task');
    if(selected_task) {
        selected_task.removeAttribute('id');
    }
    obj.setAttribute('id', 'selected-task');
}

function trashButton() {
    var current = document.getElementById("selected-task");
    current.remove();
}

function taskSubmit() {
    var task_write = document.getElementById("task-write").value;
    if(task_write != "") {
        var html_add = `<button class="tasks" onclick="taskClicked(this)">${task_write}</button>`;
        document.getElementById("TasksDisp").innerHTML += html_add;
    }
}

function doneButton() {
    var current = document.getElementById("selected-task");
    if(current.getAttribute('style') != 'text-decoration: line-through;') {
        current.setAttribute('style', 'text-decoration: line-through;');
    }
    else {
        current.setAttribute('style', 'text-decoration: none;')
    }
}