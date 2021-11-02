
const SERVER_DATA_URL = 'http://localhost:4000/products'

/* MÉTODO POST */
let formulario = document.getElementById('form')
formulario.addEventListener('submit', async (e) => {
    /* Prevenir en evento */
    e.preventDefault();
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    await fetch(SERVER_DATA_URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            price,
            image
        }),

        headers: {
            "Content-type": "application/json; charset =UTF-8"
        }
    })
})


