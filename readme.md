# Projeto Shopee Cart

## Objetivo

Criar um carrinho de compras baseado no carrinho de compras da Shopee.
O carrinho deve armazenar itens e fazer o cálculo de sub itens automagicamente.

### Domínio da aplicação

Carrinho de compras

### Entidades

→ Carrinho = arquivo cart.js

→ Itens = arquivo item.js

### Ações - Carrinho - Casos de Uso

| Ação | Descrição |
| --- | --- |
| Criar item | Função *createItem()* cria a instância de um item e deve receber como parâmetro: *name, price e quantity.* |
| Adicionar Item | Função *addItem()* adiciona um item já criado ao array *cart[]* e deve receber como parâmetro *userCart (nome do array que receberá o item) e item (nome do item que deseja adicionar).*  |
| Deletar/Excluir item | Função *deleteItem()* exclui um item do array *cart[]* e deve receber como parâmetro *userCart (nome do array que receberá o item) e item (nome do item que deseja adicionar).* |
| Acrescentar item | Função *sumItem()* soma 1 à quantidade de um item que já consta no carrinho e deve receber como parâmetro *userCart (nome do array) e item (nome do item).* |
| Remover item | Função *sumItem()* subtrai 1 à quantidade de um item que já consta no carrinho e deve receber como parâmetro *userCart (nome do array) e item (nome do item).* |
| Calcula total e subtotal | Função *calculateTotal()* percorre o array *cart* *que recebe como parâmetro,* utilizando o método *reduce()*, e incrementa a constante *result* com o somatório dos subtotais de cada item adicionado ao array. No final mostra a variável *result* formatada. O subtotal é calculado dentro das funções onde ele aparece, são elas: *calculateTotal() e displayCart()* |
| Mostra para o usuário o conteúdo do carrinho e subtotal dos itens | Função *displayCart(),* recebe como parâmetro o array *cart,* percorre os itens do array utilizando o método *forEach(),* e mostra os dados de cada item, como nome, preço, quantidade e o subtotal formatado, com base no preço unitário *(price)* e quantidade *(quantity).* |

## Problemas Encontrados - Extra Tasks

| Problema | Causa | Solução |
| --- | --- | --- |
| ✅ Cálculo Subtotal | O subtotal não está sendo atualizado conforme é alterada a quantidade de itens - através das funções delete/remove/plus. Isso está ocorrendo, pois o subtotal fica guardado no objeto no momento de sua criação, levando em consideração apenas a quantidade inserida no createItem().Preciso achar uma forma de que o cálculo do subtotal seja realizado sempre que houver alteração na quantidade de itens, pois isso também demonstra um valor incorreto do total do carrinho. | Removi o cálculo de subtotal da função *createItem()*, e adicionei o cálculo nas funções *displayCart()* e *calculateTotal()* apenas no *console.log()* onde o valor é mostrado. Ainda pretendo retornar a esse problema e buscar uma melhor solução.  |
| ✅ Criar lógica para aumentar a quantidade de um item já existente no carrinho | Inicialmente não havíamos criado uma função para aumentar a quantidade de itens (botão +) que já estavam presentes no carrinho.  | Criei a função *sumItem(),* utilizando um pedaço da lógica da função *removeItem()*, onde o cart é percorrido para identificar o item e o incremento da quantidade é realizado.  |
| ✅ Formatar como os valores aparecem. Manter apenas dois dígitos após a vírgula. | Ao realizar testes com outras quantidades de itens e valores diferentes, identifiquei valores com mais de 10 dígitos após a vírgula.  | Utilizei o método *objeto.toFixed(2)* para corrigir essa visualização. Também havia utilizado o método *objeto.toLocaleString()* mas dei preferência a *toFixed()* por ser mais simples para o projeto.  |
