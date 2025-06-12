function checkRut(rut) {
  let valor = rut.value.replace(/\./g, '').replace('-', '');
  let cuerpo = valor.slice(0, -1);
  let dv = valor.slice(-1).toUpperCase();

  rut.value = cuerpo + '-' + dv;

  if (cuerpo.length < 7) {
    rut.setCustomValidity("RUT Incompleto");
    return false;
  }

  let suma = 0;
  let multiplo = 2;

  for (let i = 1; i <= cuerpo.length; i++) {
    let index = multiplo * parseInt(cuerpo.charAt(cuerpo.length - i));
    suma += index;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  let dvEsperado = 11 - (suma % 11);
  dvEsperado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

  if (dv !== dvEsperado) {
    rut.setCustomValidity("RUT inválido");
    return false;
  }

  rut.setCustomValidity('');
}

  


