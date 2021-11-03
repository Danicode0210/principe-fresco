const SERVER_DATA_URL = 'https://principe-json-serv.herokuapp.com/products'
const cardsParent = document.getElementById('cardsParent')

const getProducts = async (url) => {
    return axios.get(url)
}

const showAllProducts = async () => {
    let res = await getProducts(SERVER_DATA_URL)
    //cleaning cards.
    cardsParent.innerHTML = ''
    console.log(res.data)
    res.data.forEach(product => {
        cardsParent.innerHTML += `
       <div class="card-template">
            <div class="col">
                <div class="card text-center shadow">
                    <a id="${product.id}"  href="#" class="stretched-link"></a>
                    <img id="imgCard" src="${product.image[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="productName" class="card-title">${product.name}</h5>
                        <p id="productPrice" class="card-text">$ ${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
       `
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showAllProducts()
})

//saving ID to localstorage
cardsParent.addEventListener('click', evt => {
    localStorage.setItem('idDetail', evt.target.id)
    if(evt.target.tagName === 'A') {
        window.location.href = 'product.html'
    }
})