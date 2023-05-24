import { renderInputform } from "../components/renderTaskInputForm.js"
import { deleteTask, editTask } from "../programProperties.js"
import { showNotification } from "./notification.js"


function mutationObserverTask(arr, td_list_container) {

  // Select the node that will be observed for mutations
  const targetNode = document.querySelector('#tContainer');



  // Options for the observer (which mutations to observe)
  const config = { childList: true };


  // Callback function to execute when mutations are observed
  const callback = () => {
    document.querySelectorAll(".btn-eliminar").forEach((button, index) => {
      button.addEventListener("click", function () {
        deleteTask(index, arr);
        showNotification("notf-succes", "Tarea eliminada.");
      })
    });

    let i = 0;

    document.querySelectorAll(".btn-editar").forEach((button, index) => {
      button.addEventListener("click", function () {
        i++;
        const task_container = renderInputform(td_list_container, "Editar tarea.");
        //showNotification("notf-info", "Edite la tarea.");
        editTask(index, arr, task_container, td_list_container);
        closeModal.addEventListener("click", function () {
          td_list_container.removeChild(task_container)
        })
        // observer2.observe(targetNode2, config);
      })

    });

  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations

  observer.observe(targetNode, config);

  callback();

}


export { mutationObserverTask };