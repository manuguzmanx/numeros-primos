//Número primo: Divisible entre sí mismo y la unidad
//Número compuesto: Varios divisores

//Recorro
//verifico # divisores
//si = 2, es primo
//el mismo y 1


//#divisores


function primo() {
    const numero = parseInt(document.querySelector('#numero').value);
    let divisores = 0;
    if(numero < 2 || isNaN(numero)){
        alert('Ingresa un número valido');
    } else {
        for(let i = 1; i <= 7; i++) {
            if(numero % i == 0) {
                divisores++;
            }
        }
    
    
        if(divisores > 2) {
            alert(`El ${numero} es un número compuesto`);
        } else {
            alert(`El ${numero} es un número primo`);
        }
    }
}

