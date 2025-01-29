import { renderInputform } from "./components/renderInputForm.js";
import { renderTasks } from "./components/renderTasks.js";
import { mutationObserverTask } from "./helpers/mutationObservers.js";
import handleFormSubmit from "./helpers/handleFormSubmit.js";
import closeModal from "./helpers/closeModal.js";

document.addEventListener("DOMContentLoaded", function () {
  var tasksList = JSON.parse(localStorage.getItem("Tasks"));
  const body = document.querySelector("body");

  tasksList != null ? renderTasks(tasksList) : (tasksList = new Array());

  addNewTask.addEventListener("click", function () {
    const taskForm = renderInputform(
      body,
      "New Task Information",
      "add-task",
      "Add Task"
    );

    handleFormSubmit(body, tasksList, taskForm);
    closeModal(body, taskForm);
  });

  mutationObserverTask(tasksList, body);
});
