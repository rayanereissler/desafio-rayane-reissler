class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

}

export { CaixaDaLanchonete };

//construindo a função metodo de pagamento: 

function metodoDePagamento(valor, forma) {
    if (forma === 'dinheiro'){
        const desconto = (valor * 5) / 100;
        const valorComDesconto = valor - desconto;
        return console.log(valorComDesconto.toFixed(2));
        }
    
    else if (forma === 'credito') {
        const acrescimo = (valor *3) /100;
        const valorComAcrescimo = valor + acrescimo;
        return console.log(valorComAcrescimo.toFixed(2));
    }
    else {
        return valor.toFixed(2);
    }
}

//construindo o cardapio atraves de uma matriz de objetos:

const cardapio = [
    {codigo: 'cafe', descricao: 'Café', valor:3.00},
    {codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor:1.50},
    {codigo: 'suco', descricao: 'Suco Natural ', valor:6.20},
    {codigo: 'sanduiche', descricao: 'Sanduíche', valor:6.50},
    {codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche', valor: 2.00},
    {codigo: 'salgado', descricao: 'Salgado', valor: 7.25},
    {codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50},
    {codigo: 'combo2', descricao:'1 Café e 1 Sanduíche', valor: 7.50}
];

//Mostrando os valores do cardapio:
function mostrarCardapio() {
    for (const item of cardapio) {
        console.log(`Código: ${item.codigo} , Descrição: ${item.descricao}, Valor: R$ ${item.valor.toFixed(2)}`);
    }
}

function calcularValores(pedido) {


    //verificando se existem pedidos:

    if (item.codigo(pedido).length === 0) {
        return 'Não há itens no carrinho de compra!'
    }

    //verificando se o item nao existe na lista:

    for (const item in pedido) {
        if (!cardapio.hasOwnProperty(item)) {
            return "Item inválido!";
        }
    }


}