import { renderTasks } from "./components/renderAndSaveTasks.js"
import { editCancelTask } from "./helpers/editCanselTask.js";

function addTask(e, arr) {
    arr.unshift(e);
    renderTasks(arr);
}

function deleteTask(index, arr) {
    arr.splice(index, 1);
    renderTasks(arr);
}

function editTask(index, arr, task_container, td_list_container) {

    let { time, title, description } = arr[index];
    tdDate.value = time;
    tdTitle.value = title;
    tdDescription.value = description;

    const eCBtn_container = document.createElement("div");
    eCBtn_container.id = "edCanBtnCon";
    eCBtn_container.classList.add("eCancel-btns__container");

    //<div class = "eCancel-btns__container" id = "edCanBtnCon" name = "objetObserved"></div>

    let editButton = `<input class="form-btn green-btn" type="button" value="Edit Task" id="btnEditTask">`;
    //let cancelEditButton = `<input class="form-btn red-btn" type="button" value="Cancelar" id="btnEditTaskCancel">`;

    eCBtn_container.innerHTML = editButton;// + cancelEditButton;

    const di_form = document.querySelector(".ingreso-datos__form")
    
    di_form.appendChild(eCBtn_container);
    editCancelTask(di_form, eCBtn_container, arr, index, task_container, td_list_container);
}

export { addTask, deleteTask, editTask }

