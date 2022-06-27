const ApiService = require("./../service/apiService");
class ApiController{
    verificarValor(id){
        const apiService = new ApiService();
        return apiService.verificarValor(id)
    }
}
module.exports = ApiController