// services/apiService.js

const BASE_URL = 'http://localhost:3000/product'; // URL base da API

async function fetchJSON(endpoint, options) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    return response.json();
  } catch (error) {
    throw new Error('Falha na chamada à API');
  }
}

export async function getItems() {
  try {
    const data = await fetchJSON('/');
    return data;
  } catch (error) {
    // Tratamento de erros ou retorno de valor padrão em caso de falha
    console.error('Erro ao obter itens da API:', error);
    return [];
  }
}

export async function addItem(item) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };

  try {
    const data = await fetchJSON('/', options);
    return data;
  } catch (error) {
    console.error('Erro ao adicionar item via API:', error);
    throw new Error('Falha ao adicionar item');
  }
}

export const productServices = {
    getItems,
    addItem
}
// Outras funções para atualizar, excluir, etc., podem ser adicionadas conforme necessário.
