var botonResumen = document.getElementById('botonResumen');
var botonBorrar = document.getElementById('botonBorrar');
const precioUnitario=200;
const descuentoEstudiante = 80/100;
const descuentoTrainee = 50/100;
const descuentoJunior = 15/100;

botonResumen.addEventListener("click", calcularTotal);

function calcularTotal() {
    let cantidad = document.getElementById('inputCantidad');
    let categoria = document.getElementById('inputCategoria');
    let totalPagar = document.getElementById('totalPagar');
    let precio = 0;
    
    switch (categoria.value) {
        case 'Estudiante':
          precio = precioUnitario*(1-descuentoEstudiante);
          break;
        case 'Trainee':
          precio = precioUnitario*(1-descuentoTrainee);
          break;
        case 'Junior':
          precio = precioUnitario*(1-descuentoJunior);
          break;
        default:
           cantidad = 0; 
            totalPagar.innerHTML="Completar formulario";  
            console.log("Completar forumlario");
          break;
      }
    
    if (cantidad!=0) {
        let suma = Math.round(cantidad.value*precio);
        totalPagar.innerHTML="$"+suma;
    }
   

    
    console.log(suma);
} 

botonBorrar.addEventListener("click", borrar);

function borrar () {
    document.getElementById('inputCantidad').value = "";
    //document.getElementById('inputCategoria').value = "";
    document.getElementById('totalPagar').innerHTML = "";

}