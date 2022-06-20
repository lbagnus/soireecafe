 window.onload = paginaCargada;

function paginaCargada()
{
      // Evento que captura el envio del formulario
      var submit = document.getElementById("submit");
      submit.onclick = validarFormulario;
    
};


  // Función para validar el formulario.
  function validarFormulario()
  { 
      var name = document.getElementById("name");
      if(name.value == "")
      { 
        alert("*** INGRESE SU NOMBRE ***");
        return;
      }
      var email = document.getElementById("email");
      if(email.value == "")
      {
        alert("*** INGRESE SU EMAIL ***");
        return;
      }
      var telefono = document.getElementById("telefono");
      if(telefono.value == "")
      {
        alert("*** INGRESE SU TELÉFONO ***");
        return;
      }
      var mensaje = document.getElementById("mensaje");
      if(mensaje.value == "")
     
      { 
        alert("*** INGRESE UN MENSAJE ***");
        return;
      }
    alert("*** FELICITACIONES! SE ENVIÓ SU MENSAJE ***")  
    }
  

    document.querySelector(".barsmenu").addEventListener("click", animateBars);

    var line1bars = document.querySelector(".line1bars-menu");
    var line2bars = document.querySelector(".line2bars-menu");
    var line3bars = document.querySelector(".line3bars-menu");
    var containermenu = document.querySelector(".menu")
    
    function animateBars(){
        line1bars.classList.toggle("activeline1bars-menu");
        line2bars.classList.toggle("activeline2bars-menu");
        line3bars.classList.toggle("activeline3bars-menu");
    
        containermenu.classList.toggle("menuactive");
    }
