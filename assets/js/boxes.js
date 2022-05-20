document.addEventListener('DOMContentLoaded', () => {
  console.log('Boxes script loaded');

  // Buscamos en el HTML el botón de añadir caja
  const btnAddBox = document.getElementById('btn-add-box');
  // Confijuramos el evento de click para este botón, cada vez que se haga
  // click en el se ejecutará la función addBox
  btnAddBox.addEventListener('click', () => addBox());
});

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

  // Por último añadimos la caja al contenedor de cajas
  boxContainer.append(box);
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random();

  return `rgba(${r}, ${g}, ${b}, ${a})` 
}


