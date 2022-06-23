//Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
//Realiza la cotización con los datos 
Seguro.prototype.cotizarSeguro = function () {

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }
    //Leer el anio 
    const diferencia = new Date().getFullYear() - this.year;
    //Cada anio que la direncia es mayor, el costo se reduce en un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;
    //Si el seguro es básico se multiplica 30% más y si es completa 50%
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad;
}


function UI() { }
// Llena las opciones de los anios
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
//Motrar alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));
    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {
    const { marca, year, tipo } = seguro;
    let textoMarca;

    if (marca === '1') {
        textoMarca = 'Americano';
    } else if (marca === '2') {
        textoMarca = 'Asiático';
    } else if (marca === '3') {
        textoMarca = 'Europeo';
    }

    //Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class='header'>RESUMEN DE LA TRANSACCIÓN</P>
        <p class='font-bold'>Marca: <span class ='font-normal'> ${textoMarca}</span></P>
        <p class='font-bold'>Anio: <span class ='font-normal'> ${year}</span></P>
        <p class='font-bold'>Tipo: <span class ='font-normal capitalize'> ${tipo}</span></P>
        <p class='font-bold'>Total: <span class ='font-normal'> $ ${total}</span></P>
        
    `;
    const resultadoDiv = document.querySelector('#resultado');


    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner
        resultadoDiv.appendChild(div); // Se muestra el resultado
    }, 3000);
}

//Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los anios

});

EventListeners();
function EventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}
function cotizarSeguro(e) {
    e.preventDefault();
    //Leer el la marca sellecionada
    const marca = document.querySelector('#marca').value;  //lee los datos de un select
    //Leer el anio sellecionado 
    const year = document.querySelector('#year').value;
    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
    } else {
        ui.mostrarMensaje('Cotizando...', 'exito');
    }

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }

    //Instanciar el seguro 
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    //Utilizar el prototype que va a utilizar
    ui.mostrarResultado(total, seguro);
}
