class ApiService {
    verificarValor(id){
        if (id >= 5) {
            return true;
       }
       else {
           return false;
       }
    }
}
module.exports = ApiService