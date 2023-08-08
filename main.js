
alert("Bienvenido al programa!");
let PIN = 2023;
let ingresar = false;

function loguear() {

    for (let i = 2; i >= 0; i--) {
        let nombre = prompt("Ingresa tu nombre: ");
        let ingreso = prompt("Ingresa tu PIN: ");

        if (ingreso == PIN) {
            alert(`Bienvenido ${nombre}`);
            ingresar = true;
            break
        } else {
            alert("PIN equivocado");
        }
    }
}

loguear()

function solicitar() {
    let prestamo = prompt("¿ Cuánto quieres de préstamo ?");
    let meses = prompt("¿En cuántos meses quieres pagarlo?");
    const tasa = 10/100;
    let total_a_pagar_mensual = 0;
    total_a_pagar_mensual = (prestamo*(meses)*(tasa))/12;
    alert("Tienes que pagar: " + total_a_pagar_mensual + " mensualmente");
}

function cancelar(){
    alert("Mes cancelado")
    
}

function menu() {

    while (ingresar) {
        let opcion = prompt("Digite una opción: \n 1-Solicitar Préstamo \n 2-Cancelar préstamo");
        if (opcion == 1) {
            solicitar();
        }
        else if (opcion == 2) {
            cancelar();
            break;
        } else {
            alert("Opción inválida. Por favor, seleccione una opción válida.");
        }
    }    
}




menu()
