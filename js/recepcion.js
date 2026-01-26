
 // Inicializar jsPDF
const { jsPDF } = window.jspdf;

const container = document.getElementById('productsContainer');
const añadir = document.getElementById('addProduct');

// Agregar evento click al botón
añadir.addEventListener('click', function() {
  // Crear el nuevo div
  const newDiv = document.createElement('div');
  const quitar = document.createElement('button');
  const equipo = document.createElement('input');
  const marca = document.createElement('input');
  const modelo = document.createElement('input');
  

  quitar.textContent = 'X';
  quitar.className = 'quitarFormato';
  
  // Agregar contenido o atributos al div si es necesario
  newDiv.textContent = 'Div generado al hacer clic';
  newDiv.className = 'divEquipo';

    quitar.addEventListener('click', function() {
        newDiv.remove();
    });
  
  container.appendChild(newDiv);
  newDiv.appendChild(quitar);
  newDiv.appendChild(equipo, marca, modelo);
  
});
