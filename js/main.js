// Esperar a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su ID
    const loadDataBtn = document.getElementById('loadData');
    
    // Agregar un evento de clic al botón
    loadDataBtn.addEventListener('click', () => {
        // Llamar a la API de prueba y obtener datos
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())  // Convertir la respuesta en JSON
            .then(data => {
                // Seleccionar el contenedor donde se mostrará el contenido
                const contentDiv = document.getElementById('content');

                // Inyectar los datos obtenidos de la API en el DOM
                contentDiv.innerHTML = `
                    <div class="card bg-dark">
                      <div class="card-body">
                        <h3 class="card-title">${data.title}</h3>
                        <p class="card-text">${data.body}</p>
                      </div>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos:', error);
                document.getElementById('content').innerHTML = `
                  <p class="text-danger">Error al cargar los datos. Intenta nuevamente.</p>
                `;
            });
    });
});
