export function renderTasks(arr) {

    console.log(arr)

    
    
    tContainer.innerHTML = "";

    if(arr.length === 0){
        const texto = `<div class="no-tasks__container">Aun no hay tareas</div>`
        tContainer.innerHTML= texto;
      }
    localStorage.setItem("names", JSON.stringify(arr));

    arr.forEach((e, index) => {
        let { date, title, description } = e;

        const task_container = document.createElement("div");
        task_container.classList.add("task-container","border-2","shadow-md","px-3","py-3","rounded-md");

        const taskSkin = `<div>
            <p><b>Date:</b>
            ${date}</p>
            </div>
            <div>
            <p><b>Title:</b>
            ${title}</p>
            </div>
            <div class="mb-4">
            <p><b>Description:</b>
            ${description}</p>
            </div>
            <button class="btn-eliminar bg-red-600 text-white border-2 px-3 py-1 rounded-md" type="button" id ="btnDelete" data-number="${index}"><i class="fa-sharp fa-solid fa-trash"></i> Delete</button>
            <button class="btn-editar bg-blue-600 text-white border-2 px-3 py-1 rounded-md" type="button" id = "btnEdit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            `;

        task_container.innerHTML = taskSkin;

        tContainer.appendChild(task_container);
    });
}