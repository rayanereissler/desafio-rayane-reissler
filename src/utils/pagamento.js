class PagamentoUtils {
  static FormaDePagamento(formaDePagamento) {
    const formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];

    if (!formasDePagamentoValidas.includes(formaDePagamento)) {
      return "Forma de pagamento inválida!";
    }
  }

  static CalculoDePagamento(formaDePagamento, total) {
    switch (formaDePagamento) {
      case 'dinheiro':
        total *= 0.95;
        break;
      case 'credito':
        total *= 1.03;
        break;
      default:
        total *= 1.00;
    }
    return total;
  }
}

export { PagamentoUtils }
