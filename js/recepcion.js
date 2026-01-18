
 // Inicializar jsPDF
const { jsPDF } = window.jspdf;

const container = document.getElementById('productsContainer');
const añadir = document.getElementById('addProduct');

// Agregar evento click al botón
añadir.addEventListener('click', function() {
  // Crear el nuevo div
  const newDiv = document.createElement('div');
  const quitar = document.createElement('button');
  
  quitar.textContent = 'cerrar';
  
  // Agregar contenido o atributos al div si es necesario
  newDiv.textContent = 'Div generado al hacer clic';
  newDiv.className = 'divEquipo';

    quitar.addEventListener('click', function() {
        newDiv.remove();
    });
  
  
  
  
  // Insertar el div en el documento
  // Puedes cambiar esto según donde quieras insertarlo
  container.appendChild(newDiv);
  newDiv.appendChild(quitar);
  
});
