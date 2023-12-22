alert ("¡Bienvenido a Mantra Cuadros!");


function persona(){
let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");

const usuario = {
dato1: nombre,
dato2: apellido
};

if(usuario.dato1 === "" || usuario.dato2 === "") {
    alert ("Debes ingresar tu nombre y apellido");
    persona();
}else{
    return  alert (`Hola ${usuario.dato1} ${usuario.dato2}, esperamos poder ayudarte a encontrar lo que estas buscando!`);
};
};
persona();

const lista_producto =[
    {nombre: "Cuadro Tortuga",
    precio: 10000}, 
    {nombre: "Cuadro Antu",
    precio: 11500}, 
    {nombre: "Cuadro Luna",
    precio: 14500}
];

let item = "";
for(let i = 0; i< lista_producto.length; i++){
    item += `${i+1}) ${lista_producto[i].nombre}\n`;
};

let seleccion = prompt(`En Mantra Cuadros contamos con la siguiente linea de productos. Ingrese el numero por cual desea consultar: \n\n ${item}`);

console.log(lista_producto[seleccion]);
const tresCuotas = (costo)=>Math.round((costo + (costo * 0.3))/3);
const seisCuotas = (costo)=>Math.round((costo + (costo * 0.6))/6);
const doceCuotas = (costo)=>Math.round((costo + (costo * 0.9))/9);

alert(`Ha seleccionado ${lista_producto[seleccion-1].nombre}, el costo del producto en contado efectivo o débito es de $ ${lista_producto[seleccion-1].precio}. Si realiza la compra con tarjeta de crédito las opciones son: \n \n 3 cuotas: ${tresCuotas(lista_producto[seleccion-1].precio)} \n \n 6 cuotas: ${seisCuotas(lista_producto[seleccion-1].precio)} \n \n 12 cuotas: ${doceCuotas(lista_producto[seleccion-1].precio)}`);
alert ("Gracias por comprar en Mantra Cuadros ¡Les deseamos Felices Fiestas!");
