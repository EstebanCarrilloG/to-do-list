export function renderTasks(arr) {

    console.log(arr)

    
    
    tContainer.innerHTML = "";

    if(arr.length === 0){
        const texto = `<div class="no-tasks__container">Aun no hay tareas</div>`
        tContainer.innerHTML= texto;
      }
    localStorage.setItem("names", JSON.stringify(arr));

    arr.forEach((e, index) => {
        let { time, title, description } = e;

        const task_container = document.createElement("div");
        task_container.classList.add("task-container");

        const taskSkin = `<div class="task-info__container">
            <p class="task-info__info"><b class="task-info__title">Date:</b>
            ${time}</p>
            </div>
            <div class="task-info__container">
            <p class="task-info__info"><b class="task-info__title">Title:</b>
            ${title}</p>
            </div>
            <div class="task-info__container">
            <p class="task-info__info"><b class="task-info__title">Description:</b>
            ${description}</p>
            </div>
            <button class="btn-eliminar btn-task red-btn" type="button" id ="btnDelete" data-number="${index}"><i class="fa-sharp fa-solid fa-trash"></i> Delete</button>
            <button class="btn-editar btn-task green-btn" type="button" id = "btnEdit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            `;

        task_container.innerHTML = taskSkin;

        tContainer.appendChild(task_container);
    });
}