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
}

module.exports = ApiService