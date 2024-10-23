import { renderInputform } from "../components/renderTaskInputForm.js";
import { deleteTask, editTask } from "./crudFunctions.js";
import closeModal from "./closeModal.js";
import handleFormSubmit from "./handleFormSubmit.js";
import { showNotification } from "./notification.js";

/**
 * MutationObserver that observes the #tContainer node for changes in the number
 * of child elements. When a change is detected, it adds event listeners to the
 * buttons in the tasks list to delete or edit a task. It also calls the
 * callback function immediately to set up the event listeners when the function
 * is called.
 *
 * @param {Array} arr - The array of tasks to be rendered.
 * @param {HTMLElement} td_list_container - The container where the tasks are
 *                                          rendered.
 */
function mutationObserverTask(arr, td_list_container) {
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector("#tContainer");

  // Options for the observer (which mutations to observe)
  const config = { childList: true };

  // Callback function to execute when mutations are observed

  const callback = () => {
    document.querySelectorAll(".btn-eliminar").forEach((button, index) => {
      button.addEventListener("click", function () {
        deleteTask(index, arr);
        showNotification("notf-succes", "Task Deleted.");
      });
    });

    document.querySelectorAll(".btn-editar").forEach((button, index) => {
      button.addEventListener("click", function () {
        const task_container = renderInputform(
          td_list_container,
          "Edit task information.",
          "edit-task",
          "Edit task"
        );
        editTask(index, arr, task_container, td_list_container);
        handleFormSubmit(td_list_container, arr, task_container, index);
        closeModal(td_list_container, task_container);
      });
    });
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations

  observer.observe(targetNode, config);

  callback();
}

export { mutationObserverTask };
