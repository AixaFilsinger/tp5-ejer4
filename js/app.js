function obtenerHora() {
    let fechaActual = new Date();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
  
    let pmOam = " AM";
    if (horas > 12) {
      horas = horas - 12;
      sufijo = " PM";
    }
    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
  
    const diaSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  
    let parrafoFecha = document.getElementById("fecha");
  
    parrafoFecha.innerHTML = `${
      diaSemana[fechaActual.getDay()]
    } ${fechaActual.getDate()} de ${
      meses[fechaActual.getMonth()]
    } del ${fechaActual.getFullYear()}`;
  
    let parrafoHora = document.getElementById("hora");
  
    parrafoHora.innerHTML = `${horas}:${minutos}:${segundos} ${pmOam}`;
  }
  
  setInterval(obtenerHora, 1000);
  