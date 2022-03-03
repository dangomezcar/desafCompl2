console.log('Desafío complementario 2');

//const vegetal1 = {
//    nombre : 'zanahoria',
//    peso : 500,
//    precio: 1500,
//}

//vegetal1.color = 'Naranja';

//console.log(vegetal1);

function vegetal (nombre, stock, precio) {
    this.nombre = nombre;
    this.stock = parseInt(stock);
    this.precio = parseInt(precio);

    this.detalle = function() {
        console.log('Detalle de vegetales: ', this.nombre, this.stock, this.precio);}
}

const vegetal1 = new vegetal('zanahoria', 10, 5000);
const vegetal2 = new vegetal ('papa', 14 , 3000);
const vegetal3 = new vegetal ('apio', 5, 2000);
const vegetal4 = new vegetal ('tomate', 20 , 500);

console.log('nombre' in vegetal1);
    
vegetal1.detalle()

//CONVERTIR A ARRAYS

const vegetales = [vegetal1, vegetal2, vegetal3, vegetal4]

let nombres = []

for( let i = 0; i < vegetales.length;  i++){
    console.log(i, vegetales[i]);
}

for (veg of vegetales){
    console.log(veg.nombre);
    nombres.push(veg.nombre)
}

console.log('Nombres concatenados:' + nombres.join('-'));

console.log(nombres.slice(0,2))

if (nombres.includes('apio')) {
    console.log('Existe');
}