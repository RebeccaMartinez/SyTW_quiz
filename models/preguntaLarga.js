var Pregunta = require('../models/pregunta.js');

function PreguntaLarga(preg){
  Pregunta.call(this, preg);
  tipo = "larga";
}

PreguntaLarga.prototype.getTipo = function(){
  return this.tipo;
}

PreguntaLarga.prototype.getPreg = function(){
  return this.preg;
}

PreguntaLarga.prototype = new Pregunta();
PreguntaLarga.prototype.constructor = PreguntaLarga;
module.exports = PreguntaLarga;