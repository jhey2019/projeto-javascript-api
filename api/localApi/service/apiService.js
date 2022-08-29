const Pessoa = require('../models/pessoaTb')
const Database = require('../database/conectDB');
const DB = require('../config/DB');

class ApiService {
    verificarValor(id) {
        if (id >= 5) {
            return true;
        }
        else {
            return false;
        }
    }

    somarValor(id1, id2) {
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const soma = (id1Number + id2Number);
        return soma;
    }

    multValor(id1, id2) {
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const mult = (id1Number * id2Number);
        return mult;
    }

    diviValor(id1, id2) {
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const divi = (id1Number / id2Number);
        return divi;
    }
    mediaValor(id1, id2, id3) {
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const id3Number = Number(id3);
        const soma = (id1Number + id2Number + id3Number);
        console.log(soma);
        const media = (soma / 3);
        console.log(media);
        return media;
    }

    aprovValor(id1, id2, id3, id4, id5) {
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const id3Number = Number(id3);
        const id4Number = Number(id4);
        const id5Number = Number(id5);
        const soma = (id1Number + id2Number + id3Number + id4Number + id5Number);
        console.log(soma);
        const media = (soma / 5);
        console.log(media);
        if (media > 5) {
            return "Parabéns, você foi APROVADO :)";
        }
        else {
            return "Infelizmente foi REPROVADO :(";
        }
    }

    verValor(id1, id2) {
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        if (id1Number > id2Number) {
            return id1Number;
        }
        else {
            return id2Number;
        }
    }

    calcular(num1, num2, operacao) {
        num1 = Number(num1);
        num2 = Number(num2);
        if (operacao === 'soma') {
            return num1 + num2;
        }
        else if (operacao === 'sub') {
            return num1 - num2;
        }
        else if (operacao === 'multi') {
            return num1 * num2;
        }
        else if (operacao === 'div') {
            return num1 / num2;
        } else {
            return {
                message: "informe uma operacao valida"
            }
        }
    }


    cadastrar(arrPessoas) {
        let arrPessoasMaiorDeIdade = []; //criacao da varivael arrPessoasMaiorDeIdade para armazenazar as pessoas que tiver mais de 18 anos

        arrPessoas.forEach(value => { //usando funcao foreach para percorrer o array de pessoas (arrPessoas). value foi o nome que atribui para cada objeto percorrido dentro do array
            if (value.idade >= 18) { //verificando objeto por objeto dentro array, apontando para o campo idade(value.idade) e verificando se a pessoa tem mais de 18 anos
                arrPessoasMaiorDeIdade.push(value); //se no objeto a pessoa tiver mais de 18 anos, o objeto com os dados da pessoa é armazenado na variavel arrPessoasMaiorDeIdade atraves da funcao push
            }
        });
        return { //return entre chaves ira retornar um json, vamos utilizar o retorno dessa forma daqui para frente
            'quantidade de pessoas maiores de idade': arrPessoasMaiorDeIdade.length, //length é utilizado para mostrar o numero de quantidade de objetos dentro do array
            'pessoas maiores de idade': arrPessoasMaiorDeIdade, //variavel que esta armazenando as pessoas maiores de idade
        }
    }

    verificar(arrPessoas) {
        let arrMasc = [];
        let arrFemi = [];

        arrPessoas.forEach(value => {
            if (value.sexo === "M") {
                arrMasc.push(value);
            }
        });
        arrPessoas.forEach(value => {
            if (value.sexo === "F") {
                arrFemi.push(value);
            }
        });
        return {
            'quantidade de pessoas do sexo masculino': arrMasc.length,
            'pessoas do sexo masculino': arrMasc,
            'quantidade de pessoas do sexo feminino': arrFemi.length,
            'pessoas do sexo feminino': arrFemi
        }
    }

    async testarBD() {
        const db = new Database();
        try {
            const result = await Pessoa.findAll();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async cadastrarPessoa(body) {
        const db = new Database();
        try {
            const result = await Pessoa.create({
                nome: body.nome,
                cpf: body.cpf,
                estadoCivil: body.estadoCivil,
                profissao: body.profissao,
                endereco: body.endereco,
                sexo: body.sexo,
                dataNascimento: body.dataNascimento
            });

            if (result) {
                return {
                    message: "Pessoa Incluida com Sucesso!"
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            db.close()
        }

    }

    async consultarPessoa(idPessoa) {
        const db = new Database();

        try {
            const result = await Pessoa.findOne({ where: { idPessoa: idPessoa } });

            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async cadastrarPessoaMasc(body) {
        const db = new Database();
        try {
            

                if (body.sexo === "M") {
                    const result = await Pessoa.create({
                        nome: body.nome,
                        cpf: body.cpf,
                        estadoCivil: body.estadoCivil,
                        profissao: body.profissao,
                        endereco: body.endereco,
                        sexo: body.sexo,
                        dataNascimento: body.dataNascimento       
                        
                    });
                    return result
                } 
                else {
                    return "Permitido o cadastro somente de pessoa do sexo masculino"
                  }   
           


        } catch (error) {
            console.log(error);
        } finally {
            db.close()
        }

    }

    async consultarCpf(cpf) {
        const db = new Database();

        try {
            const result = await Pessoa.findOne({ where: { cpf: cpf } });
            
            if (result === null) {
                return "Pessoa não cadastrada na base de dados"
            }
            else {
                return result
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async alterarPessoa(body) {
        const db = new Database();

        try {
            const result = await Pessoa.update({ where: { idPessoa: idPessoa } });
            
            return result
            
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = ApiService

