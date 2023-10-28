const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');



// l = para listar los datos de la multiplicacion de base

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'Creado') )
    .catch( err => console.log( err ) );



