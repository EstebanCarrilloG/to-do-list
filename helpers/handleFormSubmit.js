import { renderTasks } from "../components/renderAndSaveTasks.js";
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
 * @param {HTMLElement} td_list_container - The container where the tasks are rendered.
 * @param {Array} arr - The array of tasks to which the new task will be added or edited.
 * @param {HTMLElement} task_container - The container that contains the form and will be removed from the DOM.
 * @param {number} index - The index of the task to be edited.
 */
function handleFormSubmit(td_list_container, arr, task_container, index) {
  newProductForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.attributes["data-type"].value === "add-task") {
      let date = e.target.date.value;
      let title = e.target.title.value;
      let description = e.target.description.value;

      if (date == "" || title == "" || description == "") {
        showNotification("notf-wrong", "Error: Complete all fields.");
      } else {
        addTask({ date: date, title: title, description: description }, arr);
        showNotification("notf-succes", "Task Saved Successfully.");
        cleanInputs();
        td_list_container.removeChild(task_container);
      }
    } else {
      let { date, title, description } = arr;
      date = e.target.date.value;
      title = e.target.title.value;
      description = e.target.description.value;

      arr.splice(index, 1, {
        date: date,
        title: title,
        description: description,
      });
      renderTasks(arr);
      showNotification("notf-succes", "Task edited successfully.");
      cleanInputs();
      td_list_container.removeChild(task_container);
    }
  });
}

export default handleFormSubmit;
