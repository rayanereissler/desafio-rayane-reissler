import { cardapio } from "../constants/cardapio";

class ItensUtils {
  constructor() {
    this.cardapioObj = {};
    cardapio.forEach((item) => {
      const [codigo] = item.split(',');
      this.cardapioObj[codigo] = true;
    });
  }

  verificarQuantidadeDeItens(itens) {
    for (const item of itens) {
      const [codigo, quantidade] = item.split(',');

      if (quantidade === '0') {
        return "Quantidade inválida!";
      }

      if (!this.cardapioObj.hasOwnProperty(codigo)) {
        return "Item inválido!";
      }
    }
  }

  verificarCarrinhoItens(itens) {
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }
  }

  somarItensCarrinho(itens) {
    let total = 0;

    const verificarItemExtra = (itemExtra) => {
      switch (itemExtra) {
        case 'chantily': {
          return String(itens).includes('cafe');
        }
        case 'queijo': {
          return String(itens).includes('sanduiche');
        }
      }
    };

    for (const item of itens) {
      const [codigo, quantidade] = item.split(',');

      if (codigo === 'chantily' || codigo === 'queijo') {
        const verificarExtra = verificarItemExtra(codigo);
        if (!verificarExtra) {
          return 'Item extra não pode ser pedido sem o principal';
        }
      }

      for (const menuItem of cardapio) {
        const [itemCodigo, _, valor] = menuItem.split(',');
        if (itemCodigo === codigo) {
          total += parseFloat(valor) * parseFloat(quantidade);
          break;
        }
      }
    }

    return total;
  }
}

export { ItensUtils }
