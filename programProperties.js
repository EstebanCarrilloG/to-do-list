import { renderTasks } from "./components/renderAndSaveTasks.js"

function addTask(e, arr) {
    arr.unshift(e);
    renderTasks(arr);
}

function deleteTask(index, arr) {
    arr.splice(index, 1);
    renderTasks(arr);
}

function editTask(index, arr) {

    let { date, title, description } = arr[index];
    tdDate.value = date;
    tdTitle.value = title;
    tdDescription.value = description;

}

export { addTask, deleteTask, editTask }

