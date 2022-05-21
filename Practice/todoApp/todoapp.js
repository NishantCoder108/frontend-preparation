const addTaskBtn = document.getElementById("addTaskBtn");
const editTaskBtn = document.getElementById("editTaskBtn");
const taskListWrapper = document.getElementById("taskList");
 
addTaskBtn.onclick = function () {
    const taskDescription = document.getElementById("addTaskDescription");
    const taskType = document.getElementById("addTaskType");
 
    const rowEl = document.createElement("TR");
    rowEl.id = "task-" + taskListWrapper.children.length;
    rowEl.innerHTML = '<th scope="row">' + taskListWrapper.children.length + '</th>'
        + '<td>' + taskDescription.value + '</td>'
        + '<td>' + taskType.value + '</td>'
        + '<td>'
            + '<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal"'
            + 'data-bs-target="#editTaskModal" onclick="openEditForm(' + taskListWrapper.children.length + ')">'
            + 'Edit'
            + '</button>'
            + '<button type="button" class="btn btn-danger" onclick="deleteTask(' + taskListWrapper.children.length + ')">Delete</button>'
        + '</td>';
 
    taskListWrapper.appendChild(rowEl);
 
    taskDescription.value = "Add Description";
    taskType.selectedIndex = 0;
}
 
editTaskBtn.onclick = function () {
    const taskDescription = document.getElementById("editTaskDescription");
    const taskType = document.getElementById("editTaskType");
    taskListWrapper.children[currentEditTask].children[1].textContent = taskDescription.value;
    taskListWrapper.children[currentEditTask].children[2].textContent = taskType.value;
}
 
function renderTaskList() {
    if (searchInput.value) {
        renderFilteredTasks();
    } else {
        if (filterTaskType1.checked || filterTaskType2.checked || filterTaskType3.checked) {
            renderFilteredTasks();
        } else {
            for (let i = 0; i < taskListWrapper.children.length; i++) {
                taskListWrapper.children[i].style.display = 'table-row';
            }
        }
    }
}
 
function openEditForm(i) {
    currentEditTask = i;
    document.getElementById("editTaskDescription").value = taskListWrapper.children[i].children[1].textContent;
    document.getElementById("editTaskType").value = taskListWrapper.children[i].children[2].textContent;
}
 
function deleteTask(i) {
    taskListWrapper.removeChild(taskListWrapper.children[i]);
}