//Livro e Biblioteca



function Livro(titulo, autor, ano, emprestado = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.emprestado = emprestado;
};

Livro.prototype.detalhes = function () {
    let emp = 'Não';
    if (this.emprestado === true) {
        emp = 'Sim';
    }
    console.log(`Titulo:${this.titulo} | Autor:${this.autor} | Lançamento:${this.ano} | Emprestado: ${emp}`);
}

Livro.prototype.emprestar = function () {
    if (this.emprestado === true) {
        console.log('Este livro já está emprestado')
        return;
    }
    return this.emprestado = true;
}


Livro.prototype.devolver = function () {
    return this.emprestado = false;
}

function Biblioteca(nome) {
    this.nome = nome;
    this.livros = [];
}


Biblioteca.prototype.adicionar = function (livro) {
    this.livros.push(livro);
}

Biblioteca.prototype.listar = function () {
    let emp = 'Não';
    for (livro of this.livros) {
        if (livro.emprestado === true) {
            emp = 'Sim';
        }
        console.log(`Titulo:${livro.titulo} | Autor:${livro.autor} | Lançamento:${livro.ano} | Emprestado: ${emp}`);
        emp = 'Não';
    }
}

Biblioteca.prototype.buscar = function (titulo) {

    console.log(`Resultado da busca:`)
    let cont = 0;
    for (livro of this.livros) {
        if (titulo === livro.titulo) {
            livro.detalhes();
            cont++;
        }

    }
    if (cont > 0) {
        return;
    }
    return console.log(`Não foi possivel encontrar este livro | ${titulo}`)

}

const biblioteca = new Biblioteca('Pau grande');
const livro1 = new Livro('Sexo 2', 'Rorato', '2025',)
const livro2 = new Livro('Sexo 3', 'Rorato', '2025',)
const livro3 = new Livro('Sexo 1', 'Rorato', '2025',)
const livro4 = new Livro('Sexo 4', 'Rorato', '2025',)
const livro5 = new Livro('Sexo 4', 'Rorato', '2025',)

biblioteca.adicionar(livro1);
biblioteca.adicionar(livro2);
biblioteca.adicionar(livro3);
biblioteca.adicionar(livro4);
biblioteca.adicionar(livro5);


livro1.emprestar()
livro3.emprestar()

biblioteca.listar();

biblioteca.buscar('Sexo 4')
