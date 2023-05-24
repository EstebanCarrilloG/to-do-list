export function renderInputform(td_list_container, title) {

    const task_container = document.createElement("div");
    task_container.classList.add("modal-new-edit-task");

    task_container.innerHTML = `
    <div class = "ingreso-datos__container">
    
    <form class="ingreso-datos__form" action="" method="post">
    <h2 class="ingreso-datos__title">${title}</h2>
        <div class="contenedor-campos">
            <p class="campo-titulo">Fecha:</p> <input type="date" name="td-time" id="tdTime">
        </div>
        <div class="contenedor-campos">
            <p class="campo-titulo">Titulo:</p> <input type="text" name="td-title" id="tdTitle">
        </div>
        <div class="contenedor-campos">
            <p class="campo-titulo">Descripción:</p> <textarea  name="td-description"
                id="tdDescription"></textarea>
        </div>
        <input class="form-btn" type="button" value="Agregar tarea" id="btnAddNewTask">
        <a class="close-modal" id="closeModal"><i class="fa-solid fa-xmark"></i></a>

        
        

    </form>
    </div>`

    td_list_container.appendChild(task_container);

    return task_container;



}