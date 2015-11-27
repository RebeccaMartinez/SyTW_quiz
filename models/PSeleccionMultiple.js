var Pregunta = require('../models/pregunta.js');

function PSeleccionMultiple(preg, opciones){
  //Pregunta.call(this, preg[0]);
  //this.opciones = preg.slice(1,preg.length);
  Pregunta.call(this,preg);
  this.opciones = opciones;
  this.vista = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
  /*var aux = [];
  for(var i=0; i<this.opciones.length; i++){
    aux[i] = "<option>" + this.opciones[i] + "</option>" 
  }
  aux.unshift("<select name='respuesta[]' size=" + this.opciones.length + " multiple>");
  aux.push("</select>");

  this.vista = aux;*/
}

PSeleccionMultiple.prototype = new Pregunta();
PSeleccionMultiple.prototype.constructor = PSeleccionMultiple;
module.exports = PSeleccionMultiple;
