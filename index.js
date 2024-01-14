class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
}

atacar(){
    switch(this.tipo){
        case "mago":
            return "usou magia";
            break;
        case "guerreiro":
            return "usou espada";
            break;
        case "monge":
            return "usou artes marciais";
            break;
        case "ninja":
            return "usou shuriken";
            break;   
    }
}

mensagemAtaque(){
    const ataque = this.atacar();
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
}}

let heroiUm = new Heroi("Gandalf", 150, "mago");
heroiUm.mensagemAtaque();

let heroiDois = new Heroi("Luke", 19, "guerreiro");
heroiDois.mensagemAtaque();
