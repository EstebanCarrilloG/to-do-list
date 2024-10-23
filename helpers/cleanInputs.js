/**
 * Clean the input fields of the form.
 *
 * This function is used to clean the input fields of the form after a form
 * submission. It sets the value of the input fields to an empty string.
 * @function
 * @name cleanInputs
 */
export default function cleanInputs() {
  tdDate.value = "";
  tdTitle.value = "";
  tdDescription.value = "";
}
