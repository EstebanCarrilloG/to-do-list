/**
 * Shows a notification to the user with the given type and message.
 * The notification will automatically disappear after 2 seconds.
 *
 * @param {String} type - The type of notification to show. Can be "notf-succes" or "notf-wrong".
 * @param {String} message - The message to be shown in the notification.
 */
export function showNotification(type, message) {
  let icon = "";

  switch (type) {
    case "notf-succes":
      icon = "fa-sharp fa-solid fa-circle-check";
      break;
    case "notf-wrong":
      icon = "fa-sharp fa-solid fa-circle-exclamation";
      break;
    default:
      break;
  }

  const notfContainer = document.createElement("div");
  notfContainer.classList.add("notf-cont", type);
  notfContainer.innerHTML = `<i class ="${icon}"></i> ` + message;
  notfContainer.id = "notContainer";

  const body = document.querySelector("body");

  body.appendChild(notfContainer);

  setTimeout(() => {
    body.removeChild(notfContainer);
  }, 2000);
}
