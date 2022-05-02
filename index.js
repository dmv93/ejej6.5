/*
Una función que devuelva el número de cifras de un entero solicitado al usuario

const ejej2 = (ejej2) => {
    alert('Te voy a pedir a continuación un número')
    var numero = parseInt(prompt('Dime el número por favor'))

    var cont = 0

    while(numero >= 1){
        numero = numero / 10
        console.log(numero)
        cont++   
    }
    alert('El numeor tiene ' + cont + ' digitos')

    return cont
}
*/



/*
Una función que permita mostrar un triángulo como el siguiente:

const ejej2 = (ejej2) => {
    alert('Te voy a pedir a continuación un número')
    var numero = parseInt(prompt('Dime el número por favor'))

    console.log(numero)
    console.log(typeof(numero))

    for (let index = 1; index <= numero; index++) { 
        let result = ""
        for (let j = 1; j <= index; j++) {
            result = result + "*" 
        }     
        console.log(result)
    }
}
*/



/*
Una función que muestre al usuario una secuencia de * 
(se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario

const ejej2 = (ejej2) => {
    alert('Ahora vas a darnos cuantas veces quieres que aprezca un *')
    var numero = parseInt(prompt('Dime el número por favor'))
    let cadena = ""

    for(let i = 0; i < numero; i++){
        cadena = cadena + "*"
        alert(cadena)
        console.log(cadena)
    }
    alert('La cadena final es ' + cadena)

}
*/

/*
Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):
*+_*+_*+_*+_

const ejej2 = (ejej2) => {
    alert('Ahora vas a ver una secuencia de caracteres')
    var car = "*+_*+_*+_*+_"
    var cadena = ""
    var test = 0

    for (let i = 0; i < car.length-1; i++) {
        if(test%i==0){
            cadena = cadena + '*'
        }
        if(test%i==0){
            cadena = cadena + '+'
        }
        if(test%i==0){
            cadena = cadena + '_'
        }
        console.log('La cadena es ' + cadena)
        alert(cadena)
        test++
    }

}
*/



/*
Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)

const ejej2 = (ejej2) => {
    alert('Te voy una fecha a continuación')
    var cont = 0
    var dia = parseInt(prompt('Dime el día que quieres ver'))
    var mes = parseInt(prompt('Dime el mes que quieres ver'))
    var year = parseInt(prompt('Dime el año que quieres ver'))

    alert('La fecha introducida es el ' + dia + '/' + mes + '/' + year)

    alert('Ahora vamos a calcular la diferencia de dias entre la fecha anterior y la fecha que me des nueva')

    var preguntadia = parseInt(prompt('Dime el día que quieres ver'))
    var preguntames = parseInt(prompt('Dime el mes que quieres ver'))
    var preguntayear = parseInt(prompt('Dime el año que quieres ver'))

    if(dia <= 31 && mes <=12 && year == preguntayear && preguntadia <= 31 && preguntames <= 12){
        while(mes <= preguntames){
            cont = cont + 30;
            if(dia < preguntadia){
                cont++
            }
            mes++
        } 
        console.log('El tiempo en dias es de ' + cont)
        alert('El tiempo pasado en dias de diferencia es de ' + cont + ' días')
    } else {
        alert('Hay algún error')
    }
}
*/