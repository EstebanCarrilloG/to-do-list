import { renderInputform } from "./components/renderTaskInputForm.js";
import { renderTasks } from "./components/renderAndSaveTasks.js";
import { mutationObserverTask } from "./helpers/mutationObservers.js";
import handleFormSubmit from "./helpers/handleFormSubmit.js";
import closeModal from "./helpers/closeModal.js";

document.addEventListener("DOMContentLoaded", function () {
  var arr = JSON.parse(localStorage.getItem("names"));
  const td_list_container = document.querySelector("body");

  arr != null ? renderTasks(arr) : (arr = new Array());

  if (arr.length === 0) {
    const texto = `<div class="no-tasks__container">No tasks added yet</div>`;
    tContainer.innerHTML = texto;
  }

  adDNewTask.addEventListener("click", function () {
    const task_container = renderInputform(
      td_list_container,
      "New Task Information",
      "add-task",
      "Add Task"
    );

    handleFormSubmit(td_list_container, arr, task_container);
    closeModal(td_list_container, task_container);
  });

  mutationObserverTask(arr, td_list_container);
});
