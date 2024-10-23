import { renderTasks } from "../components/renderAndSaveTasks.js";

/**
 * Adds a new task to the given array and renders it.
 * @param {Object} e - An object containing the task information, with 'date', 'title', and 'description' properties.
 * @param {Array} arr - The array of tasks to which the new task will be added.
 */
function addTask(e, arr) {
  arr.unshift(e);
  renderTasks(arr);
}

/**
 * Deletes a task from the specified array at the given index and renders the updated list.
 *
 * Removes the task at the specified index from the array and updates the rendered list of tasks
 * in the DOM.
 *
 * @param {number} index - The index of the task to be deleted from the array.
 * @param {Array} arr - The array of tasks from which the task will be removed.
 */
function deleteTask(index, arr) {
  arr.splice(index, 1);
  renderTasks(arr);
}

/**
 * Populates the input fields with the task details from the specified index.
 *
 * Retrieves the 'date', 'title', and 'description' from the task at the given index
 * in the array and assigns them to the corresponding input fields.
 *
 * @param {number} index - The index of the task in the array whose details are to be edited.
 * @param {Array} arr - The array of tasks containing task objects with 'date', 'title',
 *                      and 'description' properties.
 */
function editTask(index, arr) {
  let { date, title, description } = arr[index];
  tdDate.value = date;
  tdTitle.value = title;
  tdDescription.value = description;
}

export { addTask, deleteTask, editTask };
