import cleanInputs from "./cleanInputs.js";

/**
 * Adds an event listener to the close button of the modal window to close the window and clean the form inputs when it is clicked.
 *
 * @param {HTMLElement} td_list_container - The container where the modal window was appended.
 * @param {HTMLElement} task_container - The created modal window element.
 */
export default function closeModal(td_list_container, task_container) {
  closeModalBtn.addEventListener("click", function () {
    cleanInputs();
    td_list_container.removeChild(task_container);
  });
}
