//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

guardar_usuarioLocalstorage();
obtener_localStorage();

function obtener_localStorage(){

if (localStorage.getItem("usuario")){
    let usuario = localStorage.getItem("usuario");
    let persona = JSON.parse(localStorage.getItem("persona"));
    
    console.log(usuario);
}else
console.log("No Registrado");
}

function guardar_usuarioLocalstorage(){
    let persona = {
        usuario: "Lucelys",
        contraseña: "12345"
    }


    let usuario = "Marc";

    localStorage.setItem("usuario", usuario);
}




