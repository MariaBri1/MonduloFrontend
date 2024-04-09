console.log('Hola Javascript!')

//comentario una linea

/*
comentario
multiples
lineas
*/

//tipos de datos
//primitivos
//numeros


//NUMBER

const numero1 = 20 //Number
const numero2 = 20.50 //Number
const numero3 = -36 //Number

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)


//STRING o cadena de texto

const alumna = 'Marisol'
const alumno = 'Marco'
const numero4 = '200'
const numero5 = 200

console.log(alumna, typeof alumna)
console.log(alumno, typeof alumna)
console.log(numero4, typeof numero4)
console.log(numero5, typeof numero5)

//BOOLEAN -> false o true

const tieneDescuento = false
console.log(tieneDescuento, typeof tieneDescuento)

//UNDEFINED
let nombre

console.log(nombre, typeof nombre)

//NULL
let apellido = null

console.log(apellido, typeof nombre)

//tipos de datod adicionales : Object, Function ,Bigint ,Symbol

//VARIABLES Y CONSTANTES

//ECMASCRIPT 5 === ES5 -> VAR
//ECMASCRIPT 5 === ES6 -> CONST ,LET

//CONST -> ES6 (El uso de CONST es lo recomndado)

const edad = 55 //es obligatotorio inicializarlo
const _edad = 25
const edadDeMiHijo = 16

//edad = 33 

console.log(edad)


//LET -> ES6 El uso de let es lo recomndado

let edad2 //No es obligatorio inicializarlo

//se puede reassignar variables
//edad = "36"
//edad = true
//edad = 22

console.log(edad2, typeof edad2)

//OPERADORES MATEMATICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2)//residuo
console.log(2 ** 2)// dos elvado al cubo

//OPERADORES DE ASIGNACION

const genero = 'femenino'

//OPERADORES DE COMPARACION

//oPERADOR DE IGUALDAD Y DESIGUALDAD NO ESTRICTA (==)
//dEVUELVE VALOR BOOLEANO
//Este operador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 == 1) //true
console.log(1 == '1') //true
console.log(1 != 1) //false

//Operdor de igualdad y desigualdad estricta (===)(es recomendable usarlo casi siempre
//dEVUELVE VALOR BOOLEANO
//Este operador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 === 1) //true
console.log(1 === '1') //false
console.log(1 != 1) //false

//OPERADORES DE COMPARACION .siempre devuelven un boolean
console.log(8 > 5)//true
console.log(5 < 1)//true
console.log(8 >= 5)//true
console.log(8 <= 5)//true

//OPERADORES LOGICOS (and,or,negacion)

//consoles.log(true && false)//and
//consoles.log(true || false)//or
//consoles.log(!false)//negacion

//OPERDADOR CADENA

const saludo = 'Hola'
const nombreCompleto = 'Victor' + '' + 'Villazon'
const miEdad = 37

const saludoAmigo = saludo + nombreCompleto + " .Tengo " + miEdad + 'años'

console.log(nombreCompleto)
console.log(saludoAmigo)

///EJERCICIOS
//1. Retorna si dos strings tienen la misma longitud sino devolver false
const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length)

// 2. Retornar true si un numero es menor que 40 sino devolver false
const numMenor = 30;
console.log(numMenor < 40);

// 3. Retornar True si un numero es menor que 60 sino devolver False
const numMenor2 = 50;
console.log(numMenor2 < 60);

// 4. Retornar True si un numero es par sino devolver False
const numeroPar = 10;
console.log(numeroPar % 2 === 0);

// 5. Retornar True si un numero es impar sino devolver False
const numeroImpar = 15;
console.log(numeroImpar % 2 !== 0);

// 6. Calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const baseT = 5;
const alturaT = 8;
const areaT = (baseT * alturaT) / 2;
console.log("El área del triángulo es:", areaT);


// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
const numeroTresCifras = 123;
const sumaCifrasCubos = Math.pow((numeroTresCifras % 10) + Math.floor(numeroTresCifras / 10) % 10 + Math.floor(numeroTresCifras / 100), 3);
console.log("La suma de las cifras elevada al cubo es:", sumaCifrasCubos);

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla: SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%
const montoTotal = 1000;
const porcentajeA = 0.3;
const porcentajeB = 0.2;
const porcentajeC = 0.6;

const montoSocioA = montoTotal * porcentajeA;
const montoSocioB = montoTotal * porcentajeB;
const montoSocioC = montoTotal * porcentajeC;

console.log("Al socio A le corresponde:", montoSocioA);
console.log("Al socio B le corresponde:", montoSocioB);
console.log("Al socio C le corresponde:", montoSocioC);