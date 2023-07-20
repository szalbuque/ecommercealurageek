// Importe a função addItem do seu serviço de API
import { addItem } from '../services/product-services.js';

// Captura o formulário
const addItemForm = document.getElementById('addItemForm');

// Função para gerar um ID único
function generateUniqueID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Manipula o evento de submit do formulário
addItemForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const imageUrl = document.getElementById('imageUrl').value;
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;

  // Gera um ID único para o novo item
  const id = generateUniqueID();

  // Cria um objeto com os dados do novo item
  const newItem = {
    imageUrl: imageUrl,
    name: name,
    price: price,
    id: id,
    description: description,
  };

  try {
    // Chama a função addItem para enviar o novo item para a API
    const response = await addItem(newItem);
    console.log('Novo item adicionado:', response);
  } catch (error) {
    console.error('Erro ao adicionar o item:', error);
  }
});
