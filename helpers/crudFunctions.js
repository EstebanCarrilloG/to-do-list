import { renderTasks } from "../components/renderTasks.js";

/**
 * Adds a new task to the given array and renders it.
 * @param {Object} newTaskInfo - An object containing the task information, with 'date', 'title', and 'description' properties.
 * @param {Array} tasksList - The array of tasks to which the new task will be added.
 */
function addTask(newTaskInfo, tasksList) {
  tasksList.unshift(newTaskInfo);
}

/**
 * Deletes a task from the specified array at the given index and renders the updated list.
 *
 * Removes the task at the specified index from the array and updates the rendered list of tasks
 * in the DOM.
 *
 * @param {number} index - The index of the task to be deleted from the array.
 * @param {Array} tasksList - The array of tasks from which the task will be removed.
 */
function deleteTask(index, tasksList) {
  tasksList.splice(index, 1);
  renderTasks(tasksList);
}


/**
 * Edits the task at the specified index in the given array and renders the updated list.
 *
 * Edits the task at the specified index from the array and updates the rendered list of tasks
 * in the DOM.
 *
 * @param {Event} e - The event object which contains the new task information.
 * @param {number} index - The index of the task to be edited from the array.
 * @param {Array} tasksList - The array of tasks from which the task will be edited.
 */
function editTask(e,index, tasksList) {

  let { date, title, description } = tasksList;
  date = e.target.date.value;
  title = e.target.title.value;
  description = e.target.description.value;

  tasksList.splice(index, 1, {
    date: date,
    title: title,
    description: description,
  });
}

export { addTask, deleteTask, editTask };
