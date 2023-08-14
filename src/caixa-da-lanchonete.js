import { ItensUtils } from "./utils/itens";
import { PagamentoUtils } from "./utils/pagamento";

class CaixaDaLanchonete {
    constructor() {
        this.itensUtils = new ItensUtils();
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        const verificarPagamento = PagamentoUtils.FormaDePagamento(formaDePagamento);
        if (verificarPagamento) {
            return verificarPagamento;
        }

        const verificarQuantidadeItens = this.itensUtils.verificarQuantidadeDeItens(itens);
        if (verificarQuantidadeItens) {
            return verificarQuantidadeItens;
        }

        const verificarItensCarrinho = this.itensUtils.verificarCarrinhoItens(itens);
        if (verificarItensCarrinho) {
            return verificarItensCarrinho;
        }

        const somarItens = this.itensUtils.somarItensCarrinho(itens);
        if (isNaN(somarItens)) {
            return somarItens;
        }

        const valorTotal = PagamentoUtils.CalculoDePagamento(formaDePagamento, somarItens);
        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete }
