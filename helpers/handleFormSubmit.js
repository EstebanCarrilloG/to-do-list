import { renderTasks } from "../components/renderTasks.js";
import { addTask, editTask } from "./crudFunctions.js";
import cleanInputs from "./cleanInputs.js";
import { showNotification } from "./notification.js";
/**
 * Handles the submit event of the form, either adding a new task or editing an existing one.
 * It prevents the default form submission, checks if the form is of type "add-task" or "edit-task",
 * and based on that, it either adds a new task to the array and renders it, or it edits the task
 * at the given index and renders the updated array.
 * It also shows a success notification and removes the task container from the DOM.
 * If any of the fields are empty, it shows an error notification.
 *
 * @param {HTMLElement} body - The container where the tasks are rendered.
 * @param {Array} tasksList - The array of tasks to which the new task will be added or edited.
 * @param {HTMLElement} taskForm - The container that contains the form and will be removed from the DOM.
 * @param {number} index - The index of the task to be edited.
 */
function handleFormSubmit(body, tasksList, taskForm, index) {
  newProductForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.attributes["data-type"].value === "add-task") {
      let date = e.target.date.value;
      let title = e.target.title.value;
      let description = e.target.description.value;

      if (date == "" || title == "" || description == "") {
        showNotification("notf-wrong", "Error: Complete all fields.");
      } else {
        addTask({ date: date, title: title, description: description }, tasksList);
        renderTasks(tasksList);
        showNotification("notf-succes", "Task Saved Successfully.");
        cleanInputs();
        body.removeChild(taskForm);
      }
    } else {
         
      editTask(e, index, tasksList);
      renderTasks(tasksList);
      showNotification("notf-succes", "Task edited successfully.");
      cleanInputs();
      body.removeChild(taskForm);
    }
  });
}

export default handleFormSubmit;
