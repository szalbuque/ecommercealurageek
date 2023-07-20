<h1> e-commerce Alura Geek</h1>

* Desenvolvido durante o curso de Front-end da Alura<br>
<br>
<h2>Instruções para testar o código:</h2>

* É necessário utilizar um servidor web para ver a página funcionando corretamente.<br>
* Você pode testar usando uma IDE, por exemplo o VSCode, usando um plugin como o Live Server.<br>
* Também será necessário simular uma API de dados.<br>
* Utilizando o VSCode, você deve acessar o terminal e executar o seguinte comando:<br>
> json-server --watch db.json<br>
<br>

<p align="center">
  <img  src="/assets/alurageek.gif">
</p>

<h2>Notas sobre o desenvolvimento:</h2>
<p>O padrão de projeto mais adequado para fazer chamadas a uma API de dados usando JavaScript é o padrão "Módulo de Serviço" (ou "Service Module" em inglês). Esse padrão de projeto ajuda a organizar e separar a lógica de acesso à API, tornando o código mais modular, reutilizável e fácil de manter.</p>

<p>O "Módulo de Serviço" é uma forma de encapsular toda a lógica relacionada à comunicação com a API dentro de um módulo ou objeto. Isso permite que você isole a complexidade das chamadas HTTP, lógica de tratamento de erros e qualquer transformação de dados necessária. Além disso, ele também possibilita a injeção de dependências, o que torna o código mais testável.</p>

<p>Neste projeto um simulador de API e o banco de dados é representado pelo arquivo db.json.</p>

<p>Há dois serviços no arquivo services/product-services.js :</p>

* getItems: retorna todos os itens contidos no banco de dados;
* addItem: adiciona um item ao banco de dados.

<p>A página index.html usa o serviço <i>getItems</i> através do controller <i>products-controller.js .</i></p>
<p>A página new_product.html usa o serviço <i>addItem</i> através do controller <i>new-product-controller.js</i>.</p>