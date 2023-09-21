import { renderInputform } from "./components/renderTaskInputForm.js"
import { addTask } from "./programProperties.js"
import { renderTasks } from "./components/renderAndSaveTasks.js"
import { cleanInputs } from "./helpers/cleanInputs.js"
import { showNotification } from "./helpers/notification.js"
import { mutationObserverTask } from "./helpers/mutationObservers.js"

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
    const task_container = renderInputform(td_list_container, "New Task Information");

    closeModal.addEventListener("click", function () {
      td_list_container.removeChild(task_container)
    })

    btnAddNewTask.addEventListener("click", getData)

    function getData() { 
      let time = tdDate.value;
      let title = tdTitle.value;
      let description = tdDescription.value;


      // VALIDACIONES
      if (time == "" || title == "" || description == "") {
        showNotification("notf-wrong", 'Error: Complete all fields.');
      } else {
        addTask({ time: time, title: title, description: description }, arr);
        showNotification("notf-succes", "Task Saved Successfully.");
        cleanInputs();
        td_list_container.removeChild(task_container);

      }

    }
  })

  mutationObserverTask(arr, td_list_container);

})