const SERVER_DATA_URL = 'https://principe-json-serv.herokuapp.com/products'

const clickme = (smallImg) =>{
    let fullImg = document.getElementById('imagebox')
    fullImg.src = smallImg.src
}


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


//DOM Selectors
const itemName = document.getElementById('itemName')
const itemPrice = document.getElementById('itemPrice')
const itemDescription = document.getElementById('itemDescription')

const imagebox = document.getElementById('imagebox')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')

const recomendedName1 = document.getElementById('recomendedName1')
const recomendedPrice1 = document.getElementById('recomendedPrice1')
const recomendedName2 = document.getElementById('recomendedName2')
const recomendedPrice2 = document.getElementById('recomendedPrice2')
const recomendednName3 = document.getElementById('recomendednName3')
const recomendedPrice3 = document.getElementById('recomendedPrice3')
const recomendedImg1 = document.getElementById('recomendedImg1')
const recomendedImg2 = document.getElementById('recomendedImg2')
const recomendedImg3 = document.getElementById('recomendedImg3')

const getProducts = async (url) => {
    return axios.get(url)
}

const showDetails = async () => {
    let res = await getProducts(SERVER_DATA_URL)
    console.log(res.data)
    let foundId = localStorage.getItem('idDetail')
    console.log(`The found id was ${foundId}`)
    let foundItem = res.data.find( item => item.id === Number(foundId))
    console.log(foundItem)
    //filling data
    itemName.textContent = foundItem.name
    itemPrice.textContent = `$ ${foundItem.price}`
    itemDescription.textContent = foundItem.description

    imagebox.setAttribute('src', `${foundItem.image[0]}`)
    img1.setAttribute('src', `${foundItem.image[0]}`)
    img2.setAttribute('src', `${foundItem.image[1]}`)
    img3.setAttribute('src', `${foundItem.image[2]}`)

    let randomId4 = Math.floor(Math.random() * (res.data.length))
    let randomId1 = Math.floor(Math.random() * (res.data.length))
    let randomId2 = Math.floor(Math.random() * (res.data.length))
    let randomId3 = Math.floor(Math.random() * (res.data.length))
    
    recomendedImg1.setAttribute('src', `${res.data[randomId1].image[0]}`)
    recomendedName1.textContent = res.data[randomId1].name
    recomendedPrice1.textContent = `$ ${res.data[randomId1].price}`
    recomendedImg2.setAttribute('src', `${res.data[randomId2].image[0]}`)
    recomendedName2.textContent = res.data[randomId2].name
    recomendedPrice2.textContent = `$ ${res.data[randomId2].price}`
    recomendedImg3.setAttribute('src', `${res.data[randomId3].image[0]}`)
    recomendednName3.textContent = res.data[randomId3].name
    recomendedPrice3.textContent = `$ ${res.data[randomId3].price}`
    
}

document.addEventListener('DOMContentLoaded', () => {
    showDetails()
})