
//classe aluno com os atributos fixando a criação do aluno como 'iniciante'
class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.habilidade = 'iniciante';
        this.quantAulas = 0; 
    }

    //método acrescentar aula com: validação de entrada
    acrescentarAula(aula){
        if (typeof aula != 'number' || aula <= 0) {
            console.log('Erro: Digite um número válido de aulas.');
            return;
        }
        
        //agregador de aulas ao objeto
        this.quantAulas += aula

        //condicional para ajustar o atributo 'habilidade' de acordo com a quantidade de aulas
        if (this.quantAulas >= 0 && this.quantAulas <= 8) {
            this.habilidade = 'iniciante'            
        } else if (this.quantAulas >=9 && this.quantAulas <=15) {
            this.habilidade = 'intermediário'
        } else {
            //ao chegar na habilidade 'avançado', o instrutor recebe uma mensagem habilitanto o exame prático
            this.habilidade = 'avançado'
            console.log(`O aluno ${this.nome} está apto para realizar o exame prático.`)
        }

        //retorna uma menssagem sempre que a aula for adicionada com sucesso
        console.log( 'Aula(s) inserida(s) com sucesso!')
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
    }

    //método consultar aluno exibindo como o aluno está categorizado
    consultarAluno() {
        console.log(`=-=-=-=-=- CONSULTA DE ALUNO -=-=-=-=-=-=`);
        console.log(`Aluno: ${this.nome}`);
        console.log(`Habilidade: ${this.habilidade}`);
        console.log(`Quantidade de Aulas: ${this.quantAulas}`);
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
    }

    //método que possibilita resetar as aular, caso o aluno queira começar novamente.
    resetarAulas() {
    this.quantAulas = 0;
    this.habilidade = 'iniciante';
    console.log('Progresso do aluno resetado com sucesso!');
    }
}

//criação do objeto
let aluno1 = new Aluno('Ericson');
aluno1.consultarAluno();

//testando validador referente a string e números negativos
aluno1.acrescentarAula('xxx');
aluno1.consultarAluno();

//acrescentando aulas
aluno1.acrescentarAula(6);
aluno1.consultarAluno();

//testando se está apto para realizar o exame > 16 aulas
aluno1.acrescentarAula(10);
aluno1.consultarAluno();

//teste de reset das aulas do aluno
aluno1.resetarAulas();
aluno1.consultarAluno();
