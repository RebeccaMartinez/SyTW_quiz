var AbstractQuiz = require('../models/abstract_quiz_model.js');
var PreguntaCorta = require('../models/preguntaCorta.js');
var PreguntaLarga = require('../models/preguntaLarga.js');
var Respuesta = require('../models/respuesta.js');
var debug = require('debug');


function Quiz() {
	AbstractQuiz.call(this);
	this.q.push(
		{ pregunta: new PreguntaCorta('¿Capital de Italia?'),
		respuesta: new Respuesta(/^\s*roma\s*$/i)
		},
		{
		pregunta: new PreguntaCorta('¿Capital de Alemania?'),
		respuesta: new Respuesta(/^\s*berlin\s*$/i)
		},
		{ /* Código inseguro. ¡No ejecute esta pregunta salvo en un
		entorno en el que el código del "alumno" sea fiable!
		*/
		pregunta: new PreguntaLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+ 
		'que recibe un número y devuelve el cuadrado'),
		respuesta: new Respuesta(function(x) {
			try {
				eval(x); /* DANGER DANGER DANGER */
				var z = Math.floor(Math.random()*100);
				return (square(z) == z*z);
			}
			catch(e) {
				return false;
			}
			return false;
			})
		}
	);

// insertar unas cuantas preguntas sobre
// la tabla de multiplicar
var self = this;
for(var i = 0; i<3;i++) {
	(function() {
		var n1 = Math.randomInt(9)+1;
		debug("n1 = "+n1);
		var n2 = Math.randomInt(9)+1;
		debug("n2 = "+n2);
		self.q.push(
		{ pregunta: new PreguntaCorta('¿ '+n1+'x'+n2+"= ?"),
		respuesta: new Respuesta(function(x) {
			return (x == n1*n2);
		})
		})
	})();
}
debug(this.q);
}


Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;


module.exports = Quiz;
