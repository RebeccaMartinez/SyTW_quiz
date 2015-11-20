function PreguntaCorta(preg){
  Pregunta.call(this, preg);
  this.tipo = "corta";
}

PreguntaCorta.prototype.getTipo = function(){
  return this.tipo;
}

PreguntaCorta.prototype.getPreg = function(){
  return this.preg;
}

PreguntaCorta.prototype = new Pregunta();
PreguntaCorta.prototype.constructor = PreguntaCorta;
module.exports = PreguntaCorta;