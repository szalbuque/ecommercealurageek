import {productServices} from "../services/product-services.js"

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

const products = document.querySelector("[data-product]")
const render = async() => {
    try{
        const productsList = await productServices.listaProdutos()
        productsList.forEach(element => {
            products.appendChild(newProduct(element.name, element.price, element.imageUrl))
        })
    }
    catch(error){
        console.log(error)
    }
}

render()