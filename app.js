

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.habilidade = 'iniciante';
        this.quantAulas = 0; 
    }

    acrescentarAula(aula){
        this.quantAulas += aula

        if (this.quantAulas >= 0 && this.quantAulas <= 8) {
            this.habilidade = 'iniciante'            
        } else if (this.quantAulas >=9 && this.quantAulas <=15) {
            this.habilidade = 'intermediário'
        } else {
            this.habilidade = 'avançado'
        }

        console.log( 'Aula(s) inserida(s) com sucesso!')
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
    }

    consultarAluno() {
        console.log(`=-=-=-=-=- CONSULTA DE ALUNO -=-=-=-=-=-=`);
        console.log(`Aluno: ${this.nome}`);
        console.log(`Habilidade: ${this.habilidade}`);
        console.log(`Quantidade de Aulas: ${this.quantAulas}`);
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
    }
}

let aluno1 = new Aluno('Ericson');
aluno1.consultarAluno();
aluno1.acrescentarAula(10);
aluno1.consultarAluno();
aluno1.acrescentarAula(5);
aluno1.consultarAluno();
aluno1.acrescentarAula(1);
aluno1.consultarAluno();