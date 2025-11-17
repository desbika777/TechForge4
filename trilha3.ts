class Veiculo {
    mover() {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta está pedalando");
    }
}

const c1 = new Carro();
const b1 = new Bicicleta();

c1.mover();
b1.mover();

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) { super(); }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) { super(); }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) { super(); }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]) {
    figuras.forEach(fig => console.log(fig.calcularArea()));
}

const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];

imprimirAreas(figuras);

class Pagamento {
    processar() {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) { super(); }

    processar() {
        if (this.numeroCartao.length === 16) {
            console.log("Cartão válido. Pagamento processado!");
        } else {
            console.log("Número de cartão inválido!");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar() {
        const codigo = Math.floor(Math.random() * 999999999999);
        console.log(`Boleto gerado com código: ${codigo}`);
    }
}

function processarPagamentos(pagamentos: Pagamento[]) {
    pagamentos.forEach(p => p.processar());
}

const pagamentos = [
    new PagamentoCartao("1234567890123456"),
    new PagamentoBoleto()
];

processarPagamentos(pagamentos);

class Animal {
    private energia: number = 50;

    protected alterarEnergia(valor: number) {
        this.energia += valor;
    }

    comer() {
        this.alterarEnergia(10);
    }

    statusEnergia() {
        console.log(`Energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer() {
        this.alterarEnergia(-20); // gasta energia para caçar
        this.alterarEnergia(+30); // recupera comendo a presa
    }
}

class Passaro extends Animal {
    comer() {
        this.alterarEnergia(+15);
    }
}

function alimentar(animais: Animal[]) {
    animais.forEach(a => {
        a.comer();
        a.statusEnergia();
    });
}

const animais = [
    new Leao(),
    new Passaro()
];

alimentar(animais);

abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    getSalario() {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10; // 10%
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05; // 5%
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {
    funcionarios.forEach(f => {
        const salarioFinal = f.getSalario() + f.calcularBonus();
        console.log(`Salário final: R$${salarioFinal.toFixed(2)}`);
    });
}

const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000)
];

calcularSalarioComBonus(funcionarios);
