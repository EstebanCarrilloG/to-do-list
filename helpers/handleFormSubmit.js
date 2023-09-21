import { renderTasks } from "../components/renderAndSaveTasks.js";
import { addTask, editTask } from "../programProperties.js";
import { cleanInputs } from "./cleanInputs.js";
import { showNotification } from "./notification.js";
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
