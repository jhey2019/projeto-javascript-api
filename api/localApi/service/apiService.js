class ApiService {
    verificarValor(id){
        if (id >= 5) {
            return true;
       }
       else {
           return false;
       }
    }
    
    somarValor(id1, id2){
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const soma = (id1Number + id2Number);
        return soma;
    }

    multValor(id1, id2){
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const mult = (id1Number * id2Number);
        return mult;
    }

    diviValor(id1, id2){
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const divi = (id1Number / id2Number);
        return divi;
    }
    mediaValor(id1, id2, id3){
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const id3Number = Number(id3);
        const soma = (id1Number + id2Number + id3Number);
        console.log(soma);
        const media = (soma / 3); 
        console.log(media);
        return media;
    }

    aprovValor(id1, id2, id3, id4, id5){
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        const id3Number = Number(id3);
        const id4Number = Number(id4);
        const id5Number = Number(id5);
        const soma = (id1Number + id2Number + id3Number +id4Number + id5Number);
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

    verValor(id1, id2){
        const id1Number = Number(id1);
        const id2Number = Number(id2);
        if (id1Number > id2Number) {
            return id1Number;
       }
       else {
           return id2Number;
       }
    }
    
    calcular(num1, num2,operacao){
         num1 = Number(num1);
         num2 = Number(num2);
        if(operacao==='soma'){
            return num1+num2;
        } 
        else if(operacao==='sub'){
            return num1-num2;
        }
        else if(operacao==='multi'){
            return num1*num2;
        }
        else if(operacao==='div'){
            return num1/num2;
        }else{
            return {
                message: "informe uma operacao valida"
            }
        }
    }
}

module.exports = ApiService