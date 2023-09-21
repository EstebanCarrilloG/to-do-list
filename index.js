import { renderInputform } from "./components/renderTaskInputForm.js"
import { addTask } from "./programProperties.js"
import { renderTasks } from "./components/renderAndSaveTasks.js"
import { cleanInputs } from "./helpers/cleanInputs.js"
import { showNotification } from "./helpers/notification.js"
import { mutationObserverTask } from "./helpers/mutationObservers.js"
import handleFormSubmit from "./helpers/handleFormSubmit.js"


document.addEventListener("DOMContentLoaded", function () {

  var arr = JSON.parse(localStorage.getItem("names")); 
  const td_list_container = document.querySelector("body");


  (arr != null)
    ? renderTasks(arr)
    : arr = new Array();

  if (arr.length === 0) {
    const texto = `<div class="no-tasks__container">No tasks added yet</div>`
    tContainer.innerHTML = texto;
  }

  
  adDNewTask.addEventListener("click", function () {
    const task_container = renderInputform(td_list_container, "New Task Information","add-task","Add Task");

    handleFormSubmit(td_list_container,arr,task_container);

  })

  mutationObserverTask(arr, td_list_container);

})