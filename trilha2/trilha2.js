class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo restante: R$${this.saldo}`);
    }
}

class Livro {
    constructor(titulo, autor, paginas, lido = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido() {
        this.lido = true;
        console.log(`Você marcou o livro "${this.titulo}" como lido.`);
    }
}

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotal() {
        return this.preco * this.quantidade;
    }
}

class Temperatura {
    constructor(valor) {
        this.valor = valor; 
    }

    paraFahrenheit() {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin() {
        return this.valor + 273.15;
    }
}

class Agenda {
    constructor() {
        this.compromissos = [];
    }

    adicionar(compromisso) {
        this.compromissos.push(compromisso);
    }

    listar() {
        console.log("📅 Compromissos:");
        this.compromissos.forEach((c, i) => {
            console.log(`${i + 1}. ${c}`);
        });
    }
}
