import {escapeHTML} from "../helpers/escapeHTML.js";

/**
 * Renders a list of tasks into the DOM and updates local storage.
 *
 * Clears the existing task container and checks if the given array of tasks is empty.
 * If empty, displays a message indicating no tasks are available. Otherwise, it iterates
 * over the array and creates a DOM element for each task, displaying its date, title,
 * and description, along with edit and delete buttons. The tasks are stored in local
 * storage under the key "names".
 *
 * @param {Array} tasksList - An array of task objects to be rendered, each containing 'date',
 *                      'title', and 'description' properties.
 */
export function renderTasks(tasksList) {
  tasksListContainer.innerHTML = "";

  if (tasksList.length === 0) {
    const noTasksText = `<div class="no-tasks__container">Aun no hay tareas</div>`;
    tasksListContainer.innerHTML = noTasksText;
  }
  localStorage.setItem("Tasks", JSON.stringify(tasksList));

  tasksList.forEach((e, index) => {
    let { date, title, description } = e;

    const task_container = document.createElement("div");
    task_container.classList.add(
      "task-container",
      "border-2",
      "shadow-md",
      "px-3",
      "py-3",
      "rounded-md"
    );

    const taskTemplate = `<div>
            <p><b>Date:</b>
            ${date}</p>
            </div>
            <div>
            <p><b>Title:</b>
            ${escapeHTML(title)}</p>
            </div>
            <div class="mb-4">
            <p><b>Description:</b>
            ${escapeHTML(description)}</p>
            </div>
            <button class="btn-eliminar bg-red-600 text-white border-2 px-3 py-1 rounded-md" type="button" id ="btnDelete" data-number="${index}"><i class="fa-sharp fa-solid fa-trash"></i> Delete</button>
            <button class="btn-editar bg-blue-600 text-white border-2 px-3 py-1 rounded-md" type="button" id = "btnEdit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            `;

    task_container.innerHTML = taskTemplate;

    tasksListContainer.appendChild(task_container);
  });
}
