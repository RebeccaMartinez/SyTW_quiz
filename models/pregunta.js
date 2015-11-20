function Pregunta(preg){
  this.preg = preg;
  this.tipo = tipo;
}

function PreguntaCorta(preg){
  Pregunta.call(this, preg);
  tipo = "corta";
}

PreguntaCorta.prototype.getTipo = function(){
  return this.tipo;
}

PreguntaCorta.prototype.getPreg = function(){
  return this.preg;
}

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

PreguntaCorta.prototype = new Pregunta();
PreguntaCorta.prototype.constructor = PreguntaCorta;
PreguntaLarga.prototype = new Pregunta();
PreguntaLarga.prototype.constructor = PreguntaLarga;


module.exports = Pregunta;
module.exports = PreguntaCorta;
module.exports = PreguntaLarga;
