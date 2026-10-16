const readline = require("readline");

const ces = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularCostoTotal(tarifaSeguro = 15, ...pesosPaquetes) {
  let pesoTotal = 0;

  for (let peso of pesosPaquetes) {
    pesoTotal += peso;
  }

  let costoTransporte = pesoTotal * 3.50;
  return costoTransporte + tarifaSeguro;
}

function imprimirCotizacion(cliente, totalCobro) {
  console.log("===Resumen de cotización===");
  console.log("Cliente:", cliente);
  console.log("Total a pagar: $" + totalCobro.toFixed(2));
}

ces.question("Ingrese el nombre del cliente: ", (cliente) => {
  ces.question("Ingrese el costo del seguro (presione ENTER para usar $15.00 por defecto): ", (respuestaSeguro) => {
    let tarifaSeguro;

    if (respuestaSeguro === "") {
      tarifaSeguro = undefined;
    } else {
      tarifaSeguro = parseFloat(respuestaSeguro);

      if (isNaN(tarifaSeguro)) {
        console.log("El costo del seguro debe ser numérico.");
        ces.close();
        return;
      }
    }

    ces.question("Ingrese el peso del paquete 1 en kg: ", (respuestaPeso1) => {
      let peso1 = parseFloat(respuestaPeso1);

      if (isNaN(peso1)) {
        console.log("El peso debe ser numérico.");
        ces.close();
        return;
      }

      ces.question("Ingrese el peso del paquete 2 en kg: ", (respuestaPeso2) => {
        let peso2 = parseFloat(respuestaPeso2);

        if (isNaN(peso2)) {
          console.log("El peso debe ser numérico.");
          ces.close();
          return;
        }

        ces.question("Ingrese el peso del paquete 3 en kg: ", (respuestaPeso3) => {
          let peso3 = parseFloat(respuestaPeso3);

          if (isNaN(peso3)) {
            console.log("El peso debe ser numérico.");
            ces.close();
            return;
          }

          let totalCobro = calcularCostoTotal(
            tarifaSeguro,
            peso1,
            peso2,
            peso3
          );

          imprimirCotizacion(cliente, totalCobro);
          ces.close();

        });
      });
    });
  });
});