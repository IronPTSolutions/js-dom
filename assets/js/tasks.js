document.addEventListener('DOMContentLoaded', () => {
  console.log('Tasks file loaded');

  // Configuramos el evento de clock sobre el botón de añadir tarea
  const btnAddTask = document.getElementById('btn-add-task');
  btnAddTask.addEventListener('click', addTask);

  // Configuramos el evento de soltar tecla en el input de la tarea
  const taskInput = document.querySelector('[name="task"]');
  taskInput.addEventListener('keyup', (event) => {
    // Solo si la tecla es el enter añadimos tarea
    if (event.keyCode === 13) {
      addTask()
    }
  })

  document.addEventListener('keydown', (event) => console.log(event))
});

function addTask() {
  console.log('Adding task...');

  // Obtenemos el imput, más tarde querremos limpiar su valor
  const taskInput = document.querySelector('[name="task"]');
  // Limpiamos la tarea, eliminamos espacios sobrantes al inicio y final del texto
  const taskName = taskInput.value.trim();

  if (taskName) {
    const taskList = document.querySelector('.task-list');

    // Creamos el nodo de la tarea
    const task = document.createElement('li');
    // Establecemos el texto, importante NUNCA usar innerHTML => XSS
    task.innerText = taskName;

    taskList.append(task);
    // Reseteamos el input
    taskInput.value = '';
  }

}