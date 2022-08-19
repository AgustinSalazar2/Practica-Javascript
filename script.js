// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO
const divideMultiplica = (x,z) => {
    if (x < z) {
        return console.log(z/x);
    } else {
        return console.log(x*z);
    }
}
divideMultiplica(5,10);
divideMultiplica(10,5);


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)
const tipoDeDato = (a) => {
    return console.log(typeof(a))
}
tipoDeDato("Agustin");
tipoDeDato(25);


// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN
const operaciones = (a,b,c,d,e,f) => {
    // let suma = a+b;
    // let resta = suma-c;
    // let multi = resta*d;
    // let div = multi/e;
    // let resultado = div**f;   //Otra alternativa de solucion

    let resultado = (((((a+b)-c)*d)/e)**f)
    return console.log(resultado);
}
operaciones(5,10,3,4,6,2);


// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
const ultimosTresElem = (array) => {
    const newArray = [];
    newArray[0] = array[array.length-3];
    newArray[1] = array[array.length-2];
    newArray[2] = array[array.length-1];
    return console.log(newArray);
}
ultimosTresElem(["Agustina","Juan","Pedro","Pablo","Maria"]);


// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
const arrayOrdenado = (array) => {
    if (typeof(array[0]) === "string") {
        const ordenado = array.sort();
        return console.log(ordenado);
    }
    if (typeof(array[0]) === "number") {
        let ordenadoNumber = array.sort(function(a, b){return a - b});
        return console.log(ordenadoNumber);
    }
}
console.log(arrayOrdenado(["Agustina","Juan","Pedro","Carlos","Maria"]));
console.log(arrayOrdenado([20,8,3,1,10,5]));


// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

/* const eliminarIguales = (array,b) => {
    let indice = array.indexOf(b);
    array.splice(indice,1);
    return console.log(array);
} */

const eliminarIguales = (array, b) => {
    array.filter((elem, indice) => {
        if (elem == b) {
            array.splice(indice,1);
        }
    })
    return console.log(array);
}
eliminarIguales(["Juan","Agustina","Juan","Pedro","Pablo","Juan","Maria"],"Juan");


// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.
const sumaElementos = (array) => {
    let suma = 0;
    array.forEach(element => {
        suma = suma + element;
    });
    return console.log(suma);
}

const promedioElementos = (array) => {
    let suma = 0;
    let promedio = 0;
    array.forEach(element => {
        suma = suma + element;
    });
    promedio = (suma/array.length);
    return console.log(promedio);
}

sumaElementos([20,8,3,1,10,5]);
promedioElementos([20,8,3,1,10,5]);


// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO
const valorPropiedad = (obj, string) => {
    return console.log(obj[string]);
}

valorPropiedad({nombre: "Agustin", apellido: "Salazar", domicilio: "Formosa"}, "apellido");


// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.
const sumaValores = (obj) => {
    let suma = 0;
    for (const prop in obj) {
        suma = suma + obj[prop];
    }
    return console.log(suma);
}

sumaValores({Formosa: 250, Pirane: 120, Ibarreta: 210, Clorinda: 180});
