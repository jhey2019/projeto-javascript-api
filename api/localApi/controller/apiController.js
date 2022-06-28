const ApiService = require("./../service/apiService");
class ApiController{
    verificarValor(id){
        const apiService = new ApiService();
        return apiService.verificarValor(id);        
    }
    
    somarValor(id1, id2){
        const apiService = new ApiService();
        return apiService.somarValor(id1, id2);
    }

    multValor(id1, id2){
        const apiService = new ApiService();
        return apiService.multValor(id1, id2);
    }

    diviValor(id1, id2){
        const apiService = new ApiService();
        return apiService.diviValor(id1, id2);
    }

    mediaValor(id1, id2, id3){
        const apiService = new ApiService();
        return apiService.mediaValor(id1, id2, id3);
    }
}
module.exports = ApiController

