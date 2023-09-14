//Funcion para aplicar el estilo a la opcion seleccionada en menu y quita la anterior seleccionada.
function seleccionar(link) {
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "selected";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

const form = getElementById('form');

async function handleSendEmail(event) {
    event.preventDefault();

    const fd = new FormData(this);

    const response = await fetch('https://formspree.io/f/xzblvdgw', {
        method: 'POST',
        body: fd,
        headers: {
            Accept: 'aplication/json'
        }
    });

    if (response.ok) {
        this.reset();
        alert('Mensaje enviado');
    } else {
        alert('Error al enviar el mensaje');
    }
}

form.addEventListener('submit', handleSendEmail);