document.addEventListener('DOMContentLoaded', () => {
  console.log('Boxes script loaded');

  // Buscamos en el HTML el botón de añadir caja
  const btnAddBox = document.getElementById('btn-add-box');
  // Confijuramos el evento de click para este botón, cada vez que se haga
  // click en el se ejecutará la función addBox
  btnAddBox.addEventListener('click', () => addBox());

  const btnDeleteAllBoxes = document.getElementById('btn-delete-all-boxes');
  btnDeleteAllBoxes.addEventListener('click', () => clearBoxes());

  const btnDeleteBoxes = document.querySelectorAll('.box .btn-delete');
  for (let btnDeleteBox of btnDeleteBoxes) {
    btnDeleteBox.addEventListener('click', (event) => deleteBox(event))
  }
});

function clearBoxes() {
  const boxContainer = document.querySelector('.box-container');
  // Eliminamos todos los hijos del nodo, solo usar para esto.
  boxContainer.innerHTML = '';
}

function addBox() {
  console.log('Adding new box...');

  // Bucamos el contenedor de las cajas, más tarde añadiremos la caja en él
  const boxContainer = document.querySelector('.box-container');

  // Creamos en memória una nueva caja, para ello tenemos que crear un div
  // y configurarlo
  const box = document.createElement('div');
  // Añadimos la clase box al div y cambiamos su estilo
  box.classList.add('box');
  box.style.backgroundColor = getRandomRGB();
  // Creamos el botón de borrado
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-delete');
  // Le añadimos un nodo de texto
  btnDelete.append(document.createTextNode('x'));
  btnDelete.addEventListener('click', (event) => deleteBox(event));
  box.append(btnDelete);

  // Por último añadimos la caja al contenedor de cajas
  boxContainer.append(box);
}

function deleteBox(event) {
  console.log('Deleting box...');
  const btnDelete = event.target;
  btnDelete.parentNode.remove();
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random();

  return `rgba(${r}, ${g}, ${b}, ${a})` 
}


