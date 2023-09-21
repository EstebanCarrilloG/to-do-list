import { renderTasks } from "../components/renderAndSaveTasks.js"
import { cleanInputs } from "./cleanInputs.js"
import { showNotification } from "./notification.js"

export function editCancelTask(di_form, eCBtn_container, arr, index, task_container, td_list_container,) {

    const newTask_Btn = document.getElementById("btnAddNewTask");


    /*btnEditTaskCancel.addEventListener("click", function () {
      di_form.appendChild(newTask_Btn)
      di_form.removeChild(eCBtn_container);
      cleanInputs();
      td_list_container.removeChild(task_container);
    });*/




    di_form.removeChild(newTask_Btn);

    btnEditTask.addEventListener("click", function () {
        let { time, title, description } = arr;
        time = tdDate.value;
        title = tdTitle.value;
        description = tdDescription.value;

        arr.splice(index, 1, { time: time, title: title, description: description })
        di_form.appendChild(newTask_Btn)
        di_form.removeChild(eCBtn_container);
        renderTasks(arr);
        showNotification("notf-succes", "Task edited successfully.");
        cleanInputs();
        td_list_container.removeChild(task_container);
    })
}