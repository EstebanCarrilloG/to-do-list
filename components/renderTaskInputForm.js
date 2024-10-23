/**
 * Renders a modal window with a form to either add or edit a task
 * and appends it to the given container.
 *
 * @param {HTMLElement} td_list_container - The container where the modal will be appended.
 * @param {String} title - The title of the modal window.
 * @param {String} formType - The type of the form, either "add-task" or "edit-task".
 * @param {String} buttonText - The text of the submit button.
 *
 * @returns {HTMLElement} The created modal window element.
 */
export function renderInputform(
  td_list_container,
  title,
  formType,
  buttonText
) {
  const task_container = document.createElement("div");
  task_container.classList.add("modal-new-edit-task");

  task_container.innerHTML = `
    <div class = " px-5 py-5 relative min-w-max w-[40rem] rounded-md bg-slate-100  ">
    
    <form class="flex flex-col gap-3 " id="newProductForm" data-type=${formType}>
    <div class="w-full flex justify-end" >
    <button id="closeModalBtn" class="w-6 text-center" type="button"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <h2 class=" text-3xl mb-4">${title}</h2>
    
    
        <div class="contenedor-campos">
            <b class="text-xl mb-2 block">Date:</b> <input type="date" class="rounded-md shadow-md py-3 px-4 text-xl" name="date" id="tdDate">
        </div>
        <div class="contenedor-campos">
            <b class="text-xl mb-2 block">Title:</b> <input type="text" class="rounded-md shadow-md py-3 px-4 text-xl" name="title" id="tdTitle">
        </div>
        <div class="contenedor-campos">
            <b class="text-xl mb-2 block">Description:</b> <textarea rows="2" class="w-full rounded-md shadow-md py-3 px-4 text-xl"  name="description"
                id="tdDescription"></textarea>
        </div>
        <button class=" bg-green-600 cursor-pointer text-white border-2 px-3 py-1 rounded-md" type="submit" id="btnAddNewTask">${buttonText}</button>       

    </form>
    </div>`;

  td_list_container.appendChild(task_container);

  return task_container;
}
