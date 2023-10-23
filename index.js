const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor(idade, tipo) {
        this.idade = idade;
        this.tipo = tipo;

        switch (this.tipo) {
            case 'mago':
                this.nome = 'Mago Negro';
                break;
            case 'guerreiro':
                this.nome = 'Kratos';
                break;
            case 'monge':
                this.nome = 'Avatar';
                break;
            case 'ninja':
                this.nome = 'Naruto';
                break;
            default:
                this.nome = '';
        }
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = '';
        }

        console.log(`O herói ${this.nome}, que é um ${this.tipo}, atacou usando ${ataque}`);
    }
}

let herois = [
    new Heroi(25, ''),
    new Heroi(30, ''),
    new Heroi(35, ''),
    new Heroi(40, '')
];

let i = 0;

function question() {
    if (i < herois.length) {
        readline.question('Por favor, insira o tipo de herói (mago, guerreiro, monge, ninja): ', tipo => {
            herois[i].tipo = tipo;

            switch (tipo) {
                case 'mago':
                    herois[i].nome = 'Mago Negro';
                    break;
                case 'guerreiro':
                    herois[i].nome = 'Kratos';
                    break;
                case 'monge':
                    herois[i].nome = 'Avatar';
                    break;
                case 'ninja':
                    herois[i].nome = 'Naruto';
                    break;
                default:
                    herois[i].nome = '';
            }

            herois[i].atacar();
            i++;
            question();
        });
    } else {
        readline.close();
    }
}

question();