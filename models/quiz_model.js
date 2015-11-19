var AbstractQuiz = require('../models/abstract_quiz_model.js');
var debug = require('debug');




function Quiz() {
	AbstractQuiz.call(this);
	this.q.push(
		{ pregunta: '¿Capital de Italia?',
		respuesta: function(x) {
		return (/^\s*roma\s*$/i).exec(x);
		}
		},
		{
		pregunta: '¿Quien reinaba en España cuando se descubrió América?',
		respuesta: function(x) {
			if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
				return true;
			}
			if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
			return false;
		},
		},
		{ /* Código inseguro. ¡No ejecute esta pregunta salvo en un
		entorno en el que el código del "alumno" sea fiable!
		*/
		pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
		'que recibe un número y devuelve el cuadrado',
		respuesta: function(x) {
			try {
				eval(x); /* DANGER DANGER DANGER */
				var z = Math.floor(Math.random()*100);
				return (square(z) == z*z);
			}
			catch(e) {
				return false;
			}
			return false;
			}
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
		{ pregunta: '¿ '+n1+'x'+n2+"= ?",
		respuesta: function(x) {
			debug("n1 = "+n1);
			debug("n2 = "+n2);
			return (x == n1*n2);
		}
		})
	})();
}
debug(this.q);
}


Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
	return this.q.length;
}

Quiz.prototype.getQ = function(x){
	return this.q[x]['pregunta'];
}

module.exports = Quiz;


// function Pregunta() {
// 	AbstractQuiz.call(this);
// }
// 
// /*función para calcular el número de preguntas*/
// Pregunta.prototype.numQuestions = function() {
// 	return this.q.length;
// }
// 
// /*función que devuelve una pregunta*/
// Pregunta.prototype.getQ = function(x){
// 	return this.q[x]['pregunta'];
// }
// 
// function PreguntaCorta() {
// 	Pregunta.call(this);
// 	this.q.push(
// 		{ pregunta: '¿Capital de Italia?',
// 		respuesta: new Respuesta (function(x) {
// 			return (/^\s*roma\s*$/i).exec(x);
// 		})
// 		},
// 		{ pregunta: '¿Capital de Alemania?',
// 		respuesta: new Respuesta (function(x){
// 			return (/^\s*alemania\s*$/i).exec(x)
// 	        })
// 		}
// 	);
// 
// // insertar unas cuantas preguntas sobre
// // la tabla de multiplicar
//   var self = this;
//   for(var i = 0; i<3;i++) {
//     (function() {
//       var n1 = Math.randomInt(9)+1;
//       debug("n1 = "+n1);
//       var n2 = Math.randomInt(9)+1;
//       debug("n2 = "+n2);
//       self.q.push(
// 	{ pregunta: '¿ '+n1+'x'+n2+"= ?",
// 	respuesta: new Respuesta (function(x) {
// 	  debug("n1 = "+n1);
// 	  debug("n2 = "+n2);
// 	  return (x == n1*n2);
// 	})
//       })
//     })();
//   }
//   debug(this.q);
// }
// 
// function PreguntaLarga() {
//   	Pregunta.call(this);
// 	this.q.push(
// 	  { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
// 	  entorno en el que el código del "alumno" sea fiable!
// 	  */
// 	  pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
// 	  'que recibe un número y devuelve el cuadrado',
// 	  respuesta: new Respuesta (function(x) {
// 	    try {
// 	      eval(x); /* DANGER DANGER DANGER */
// 	      var z = Math.floor(Math.random()*100);
// 	      return (square(z) == z*z);
// 	    }
// 	    catch(e) {
// 	      return false;
// 	    }
// 	    return false;
// 	  })
// 	}
//       );
// }
// 
// function Respuesta (p) {
// 
// }
// 
// 
// Pregunta.prototype = new AbstractQuiz();
// Pregunta.prototype.constructor = Pregunta;
// PreguntaCorta.prototype = new Pregunta();
// PreguntaLarga.prototype = new Pregunta();
// 
// 
// module.exports = Pregunta;
// module.exports = PreguntaCorta;
// module.exports = PreguntaLarga;
// module.exports = Respuesta
