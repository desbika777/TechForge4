interface IProduto {
	id: number;
	nome: string;
	preco: number;
}

class ItemLoja implements IProduto {
	constructor(public id: number, public nome: string, public preco: number) {}
}
interface Documento {
	titulo: string;
	conteudo: string;
}

class Texto implements Documento {
	constructor(public titulo: string, public conteudo: string) {}
	exibir(): string {
		return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
	}
}
interface ProdutoLoja {
	codigo: number;
	nome: string;
}

class Loja {
	private produtos: ProdutoLoja[] = [];
	adicionarProduto(produto: ProdutoLoja): void {
		this.produtos.push(produto);
	}
	buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
		return this.produtos.find(p => p.codigo === codigo);
	}
}
interface Livro {
	titulo: string;
	autor: string;
	disponivel: boolean;
}

class Biblioteca {
	private livros: Livro[] = [];
	adicionarLivro(livro: Livro): void {
		this.livros.push(livro);
	}
	buscarLivrosDisponiveis(): Livro[] {
		return this.livros.filter(l => l.disponivel);
	}
}
interface LivroBiblioteca {
	titulo: string;
	autor: string;
	genero: string;
	disponivel: boolean;
}

class BibliotecaGestao {
	private livros: LivroBiblioteca[] = [];
	adicionarLivro(livro: LivroBiblioteca): void {
		this.livros.push(livro);
	}
	filtrarPorGenero(genero: string): LivroBiblioteca[] {
		return this.livros.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
	}
	buscarPorAutor(autor: string): LivroBiblioteca[] {
		return this.livros.filter(l => l.autor.toLowerCase() === autor.toLowerCase());
	}
	obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
		return this.livros.filter(l => l.disponivel).sort((a, b) => a.titulo.localeCompare(b.titulo));
	}
}


