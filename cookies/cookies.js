/* Ã©sto comprueba la localStorage si ya tiene la variable guardada */
function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies == 'true'){
      cajacookies.style.display = 'none';
    }
  }
  
  /* aquÃ­ guardamos la variable de que se ha
  aceptado el uso de cookies asÃ­ no mostraremos
  el mensaje de nuevo */
  function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
  }
  
  /* Ã©sto se ejecuta cuando la web estÃ¡ cargada */
  $(document).ready(function () {
    compruebaAceptaCookies();
  });