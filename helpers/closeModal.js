import cleanInputs from "./cleanInputs.js";

/**
 * Adds an event listener to the close button of the modal window to close the window and clean the form inputs when it is clicked.
 *
 * @param {HTMLElement} body - The container where the modal window was appended.
 * @param {HTMLElement} taskForm - The created modal window element.
 */
export default function closeModal(body, taskForm) {
  closeModalBtn.addEventListener("click", function () {
    cleanInputs();
    body.removeChild(taskForm);
  });
}
