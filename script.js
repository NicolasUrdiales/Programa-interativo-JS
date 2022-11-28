let monto = Number(prompt("Ingrese un monto"))
let opcion = 0
do {
    opcion = Number(prompt("Ingrese un valor para calcular sus cuotas \n Ingrese 1 para calcular 3 cuotas \n Ingrese 2 para calcular 6 cuotas \n Ingrese 3 para calcular 9 cuotas \n Ingrese 0 para salir"))
    if (opcion == 1){
        alert("3 cuotas de : " + monto / 3)
    } else if (opcion == 2) {
        alert("6 cuotas de : " + monto/6)
    } else if (opcion == 3) {
        alert("9 cuotas de : " + monto / 9)
    } else if (opcion != 0) {
        alert("El numero ingresado es incorrecto")
    }
} while (opcion != 0)
