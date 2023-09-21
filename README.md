# CRUD Project with HTML, CSS, and Vanilla JavaScript

This project is a simple web application that uses HTML, CSS, and Vanilla JavaScript to perform CRUD operations (Create, Read, Update, Delete) on a task list. Additionally, it utilizes the `localStorage` object to store tasks locally in the user's browser and employs `MutationObserver()` to detect changes in the DOM and keep the task list updated in real-time.

## Features

- **Create a Task:** Users can add new tasks by specifying a date, title  and description. When clicking the "Add Task" button, the task is saved in local storage and displayed in the task list.

- **Read Tasks:** All tasks stored locally are displayed in a list on the bottom side of the user interface. Users can view the details of a tasks.

- **Update Tasks:** Users can edit the date, title and description of an existing task by clicking the edit button. Once the editing is done, the changes will be reflected in the list and automatically saved in local storage.

- **Delete Tasks:** Users can delete a task by clicking the corresponding delete button. The task will be removed from the list and also deleted from local storage.

- **Detect DOM Changes:** `MutationObserver()` is used to detect changes in the task list and keep it updated. This means that if an action (creating, editing, or deleting a task) is performed, the list will automatically update without the need to reload the page.

## Technologies Used

- HTML5: For the page structure.
- CSS3: For styling and layout of the application.
- Vanilla JavaScript: For the application's logic.
- localStorage: For storing tasks locally in the browser.
- MutationObserver(): For detecting DOM changes and updating the task list in real-time.

## Usage Instructions

1. Clone or download this repository to your local machine.

2. Open the projects folder with Visual Studio Code and start [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

3. Interact with the application by adding, editing, or deleting tasks. Changes will be automatically saved in local storage and reflected in the task list in real-time.

## Screenshots

![Task List](https://raw.github.com/EstebanCarrilloG/to-do-list/main/assets/to-do-list-task-list.jpg)

![Add task](https://raw.github.com/EstebanCarrilloG/to-do-list/main/assets/to-do-list-add-task.jpg)

![Edit task](https://raw.github.com/EstebanCarrilloG/to-do-list/main/assets/to-do-list-edit-task.jpg)

## Contributions

Contributions are welcome! If you wish to improve this project, you can submit a pull request, and I will be happy to review it.

---

We hope this project proves useful to you and serves as an example of how to create a simple CRUD web application using HTML, CSS, and Vanilla JavaScript, along with utilizing `localStorage` and `MutationObserver()` for an enhanced user experience. Have fun exploring and learning!
