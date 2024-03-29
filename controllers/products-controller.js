import {productServices} from "../services/product-services.js"

// Monta uma div em HTML, da classe product_box, contendo o nome, o preço e a imagem do produto passados como parâmetro
const newProduct = (name, price, imageUrl) => {
    const card = document.createElement("div")
    const card_content = `
        <div class="product_box flex_container">
            <img src="${imageUrl}" alt="img" class="product_img">
            <p class="product_title">${name}</p>
            <p class="product_price">${price}</p>
            <a href="#" class="product_link">Ver produto</a>
        </div>
    `
    card.innerHTML = card_content
    return card
}

// Renderiza os itens buscados no banco de dados dentro da página HTML onde está o marcador data-product
const products = document.querySelector("[data-product]")
const render = async() => {
    try{
        const productsList = await productServices.getItems()
        productsList.forEach(element => {
            products.appendChild(newProduct(element.name, element.price, element.imageUrl))
        })
    }
    catch(error){
        console.log(error)
    }
}

render()