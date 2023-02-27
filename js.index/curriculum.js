document.addEventListener('DOMContentLoaded', function() {
    

const mostrarBtn = document.getElementById("experiencia-mostrar");
const cerrarBtn = document.getElementById("experiencia-cerrar");
const contenidoDiv = document.getElementById("oculto1");

mostrarBtn.addEventListener("click", function() {
  contenidoDiv.style.display = "block";
  mostrarBtn.style.display = "none";
  cerrarBtn.style.display = "block";
});

cerrarBtn.addEventListener("click", function() {
  contenidoDiv.style.display = "none";
  cerrarBtn.style.display = "none";
  mostrarBtn.style.display = "block";
});
});


document.addEventListener('DOMContentLoaded', function() {


    
    const mostrarBtn = document.getElementById("educacion-mostrar");
    const cerrarBtn = document.getElementById("educacion-cerrar");
    const contenidoDiv = document.getElementById("oculto2");
    
    mostrarBtn.addEventListener("click", function() {
      contenidoDiv.style.display = "block";
      mostrarBtn.style.display = "none";
      cerrarBtn.style.display = "block";
    });
    
    cerrarBtn.addEventListener("click", function() {
      contenidoDiv.style.display = "none";
      cerrarBtn.style.display = "none";
      mostrarBtn.style.display = "block";
    });
    
    });
