var mensaje = document.querySelector(".mensaje");
var temperaturas = document.querySelectorAll('.temperaturas');

function alerta() {
    alert("Cargando informe meteorológico … ");
}

function aceptar() {
    mensaje.remove();
}

function cambiarTemperaturas(elemento) {
    let valor = elemento.value;
    let temperaturaMaxima = 0;
    let temperaturaMinima = 0;

    for (let index = 0; index < temperaturas.length; index++) {
        temperaturaMaxima = temperaturas[index].querySelector(".maximo").innerText;
        temperaturaMinima = temperaturas[index].querySelector(".minimo").innerText;
        temperaturaMaxima = temperaturaMaxima.substring(0, temperaturaMaxima.length - 1);
        temperaturaMinima = temperaturaMinima.substring(0, temperaturaMinima.length - 1);

        if(valor === "f"){
            temperaturaMaxima = Math.round((temperaturaMaxima*1.8)+32);
            temperaturaMinima = Math.round((temperaturaMinima*1.8)+32);
        } else {
            temperaturaMaxima = Math.round((temperaturaMaxima-32)*5/9);
            temperaturaMinima = Math.round((temperaturaMinima-32)*5/9);
        }

        temperaturas[index].querySelector(".maximo").innerText = temperaturaMaxima+"º";
        temperaturas[index].querySelector(".minimo").innerText = temperaturaMinima+"º";
    } 
}