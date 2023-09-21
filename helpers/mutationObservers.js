import { renderInputform } from "../components/renderTaskInputForm.js";
import { deleteTask, editTask } from "../programProperties.js";
import handleFormSubmit from "./handleFormSubmit.js";
import { showNotification } from "./notification.js";

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
