import { renderInputform } from "../components/renderInputForm.js";
import { deleteTask, editTask } from "./crudFunctions.js";
import closeModal from "./closeModal.js";
import handleFormSubmit from "./handleFormSubmit.js";
import { showNotification } from "./notification.js";
import { showDataOnInputs } from "./showDataOnInputs.js";

/**
 * MutationObserver that observes the #tasksListContainer node for changes in the number
 * of child elements. When a change is detected, it adds event listeners to the
 * buttons in the tasks list to delete or edit a task. It also calls the
 * callback function immediately to set up the event listeners when the function
 * is called.
 *
 * @param {Array} taskList - The array of tasks to be rendered.
 * @param {HTMLElement} body - The container where the tasks are
 *                                          rendered.
 */
function mutationObserverTask(taskList, body) {
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector("#tasksListContainer");

  // Options for the observer (which mutations to observe)
  const config = { childList: true };

  // Callback function to execute when mutations are observed

  const callback = () => {
    document.querySelectorAll(".btn-eliminar").forEach((button, index) => {
      button.addEventListener("click", function () {
        deleteTask(index, taskList);
        showNotification("notf-succes", "Task Deleted.");
      });
    });

    document.querySelectorAll(".btn-editar").forEach((button, index) => {
      button.addEventListener("click", function () {
        
        const taskForm = renderInputform(
          body,
          "Edit task information.",
          "edit-task",
          "Edit task"
        );

        showDataOnInputs(index, taskList);
        handleFormSubmit(body, taskList, taskForm, index);
        closeModal(body, taskForm);
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
