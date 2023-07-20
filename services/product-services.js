// Leitura - GET
// Busca os dados no db.json

const listaProdutos = () => 
fetch("http://localhost:3000/product")
.then(resposta => resposta.json())

export const productServices = {
    listaProdutos,
}

