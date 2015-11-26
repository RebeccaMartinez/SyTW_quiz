function PSeleccionMultiple(preg, opciones){
  Pregunta.call(this, preg);
  this.opciones = opciones;
  
}

PSeleccionMultiple.prototype = new Pregunta();
PSeleccionMultiple.prototype.constructor = PSeleccionSimple;
module.exports.PSeleccionMultiple;