var Pregunta = require('../models/pregunta.js');

function PSeleccionSimple(preg, opciones){
  Pregunta.call(this, preg);
  this.opciones = opciones;
  this.vista = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
  var aux = [];
  for(var i=0; i<this.opciones.length; i++){
    aux[i] = "<input type='radio' name='respuesta' + value=" + this.opciones[i] + "</option>";
  }
  this.vista = aux;
}

PSeleccionSimple.prototype = new Pregunta();
PSeleccionSimple.prototype.constructor = PSeleccionSimple;
module.exports = PSeleccionSimple;



