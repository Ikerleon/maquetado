const nombre= document.getElementById("nombre");
const email= document.getElementById("correo");
const contrasena= document.getElementById("contrasena");
const repetircontrasena= document.getElementById("repe_contrasena");
const terminos_condiciones=document.getElementById("terminosycondiciones");
const form= document.getElementById("form");
/*Validacion de datos de registro*/
  function validacionRegistro(){
    let comprobar = true;
    if (nombre.value.length < 1){
      mensaje_error("nombre", "Nombre incorrecto");
      comprobar = false;
    }else{
      mensaje_error("nombre", "");
    }
    if (email.value.length < 1 || email.value.trim() == ""){
      mensaje_error("correo", "Correo incorrecto");
      comprobar = false;
    }else{
      mensaje_error("correo", "");
    }
    if (contrasena.value.length < 1 || contrasena.value.trim() == ""){
      mensaje_error("contrasena", "Contraseña incorrecta");
      comprobar = false;
    }else{
      mensaje_error("contrasena", "");
    }
    if (repetircontrasena.value != contrasena.value || repetircontrasena.value.trim() == ""){
      mensaje_error("repe_contrasena", "Las contraseñas no coinciden");
      comprobar = false;
    }else{
      mensaje_error("repe_contrasena", "");
    }
    if (!terminos_condiciones.checked) {
      mensaje_error("terminosycondiciones", "Acepte los terminos");
      condicion = false;
    } else {
      mensaje_error("terminosycondiciones", "");
    }
    if(comprobar){
      form.reset();
    }
  }
  /*Validacion de datos de iniciar sesion*/
   function validacionIniciarsesion(){
    let comprobar = true;
    if (correo.value.length < 1 || correo.value.trim() == ""){
      mensaje_error("correo", "Correo incorrecto");
      comprobar = false;
    }else{
      mensaje_error("correo", "");
    }
    if (contrasena.value.length < 1 || contrasena.value.trim() == ""){
      mensaje_error("contrasena", "Contraseña incorrecta");
      comprobar = false;
    }else{
      mensaje_error("contrasena", "");
    }
    if(comprobar){
      form.reset();
    }
  }
  /*Funcion que permite enviar los mensajes de error*/
  function mensaje_error(nombreclase,texto){
    let elemento= document.querySelector(`.${nombreclase}`);
    elemento.lastElementChild.innerHTML= texto;
  }
  