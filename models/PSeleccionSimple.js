var Pregunta = require('../models/pregunta.js');

function PSeleccionSimple(preg, opciones){
  Pregunta.call(this, preg);
  this.opciones = opciones;
  this.vista = "";
  var aux = [];
  for(var i=0; i<opciones.length; i++){
    this.vista += "<input type='radio' name='respuesta' + value='" + this.opciones[i] +"'>" + this.opciones[i]+"<br>";
  }
}

PSeleccionSimple.prototype = new Pregunta();
PSeleccionSimple.prototype.constructor = PSeleccionSimple;
module.exports = PSeleccionSimple;



