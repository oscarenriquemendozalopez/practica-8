const readline = require("readline");

const ccv = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularComision(montoVentas, porcentajeComision = 5) {
  return montoVentas * (porcentajeComision / 100);
}

ccv.question("Ingrese el monto total de ventas: ", (respuestaVentas) => {
  let montoVentas = Number(respuestaVentas);

  if (respuestaVentas === "" || isNaN(montoVentas)) {
    console.log("El monto de ventas debe ser un número válido.");
    ccv.close();
    return;
  }

  ccv.question("Ingrese el porcentaje de comisión (presione ENTER para usar el porcentaje 5% por defecto): ", (respuestaPorcentaje) =>  {
      let porcentajeComision;

      if (respuestaPorcentaje === "") {
        porcentajeComision = undefined;
      } else {
        porcentajeComision = Number(respuestaPorcentaje);
      }

      if (porcentajeComision !== undefined &&
        isNaN(porcentajeComision)
      ) {
        console.log("El porcentaje debe ser un número válido.");
        ccv.close();
        return;
      }

      let comision = calcularComision(montoVentas, porcentajeComision);
      console.log("Comisión: $", comision);

      ccv.close();

    }
  );
});