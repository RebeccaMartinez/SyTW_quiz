function PSeleccionSimple(preg, opciones){
  Pregunta.call(this, preg);
  this.opciones = opciones;
  
}

PSeleccionSimple.prototype = new Pregunta();
PSeleccionSimple.prototype.constructor = PSeleccionSimple;
module.exports.PSeleccionSimple;



