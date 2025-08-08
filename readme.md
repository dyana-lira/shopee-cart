## Objetivo

Criar um carrinho de compras baseado no carrinho de compras da shopee. 
O carrinho deve armazenas itens e fazer o calculo de sub-itens automagicamente.

### Domínio da aplicação
Carrinho de compras

### Entidades
-> Carrinho = cart.js
-> Itens = item.js

### Ações - Carrinho - Casos de Uso
-> Adicionar/Remover Item
-> Deletar item
-> Calcula total (existem dois totais: total por item deve ser calculado no modulo item; e o total carrinho, deve ser calculado do módulo carrinho)

-> O método de adicionar é apenas para adicionar novos itens, mas e se for necessário aumentar a quantidade de um item já existente? (TASK: criar lógica para isso)

## Problemas Encontrados
### 1. Calculo Subtotal:
-> O subtotal não está sendo atualizado conforme é alterada a quantidade de itens - através das funções delete/remove
-> Isso está ocorrendo pois o subtotal fica guardado no objeto no momento de sua criação, levando em consideração apenas a quantidade inserida no createItem.
-> Preciso achar uma forma de que o calculo de subItem seja realizado sempre que houver alteração na quantidade de itens, 
-> pois isso também demonstra um valor incorreto do total do carrinho.

## EXTRA TASKS
### ✅1. Resolver problema Calculo Subtotal
### ✅2. Criar lógica para aumentar a quantidade de um item já existente no carrinho - TASK RESOLVIDA! Função plusItem criada. 
### ✅3. Formatar como os valores aparecem. Manter apenas dois dígitos após a vírgula