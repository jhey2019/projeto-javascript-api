const ApiService = require("./../service/apiService");
class ApiController {
    verificarValor(id) {
        const apiService = new ApiService();
        return apiService.verificarValor(id);
    }

    somarValor(id1, id2) {
        const apiService = new ApiService();
        return apiService.somarValor(id1, id2);
    }

    multValor(id1, id2) {
        const apiService = new ApiService();
        return apiService.multValor(id1, id2);
    }

    diviValor(id1, id2) {
        const apiService = new ApiService();
        return apiService.diviValor(id1, id2);
    }

    mediaValor(id1, id2, id3) {
        const apiService = new ApiService();
        return apiService.mediaValor(id1, id2, id3);
    }

    aprovValor(id1, id2, id3, id4, id5) {
        const apiService = new ApiService();
        return apiService.aprovValor(id1, id2, id3, id4, id5);
    }

    calcular(num1, num2, operacao) {
        const apiService = new ApiService();
        return apiService.calcular(num1, num2, operacao);
    }

    cadastrar(body) {
        const apiService = new ApiService();
        return apiService.cadastrar(body);
    }

    verificar(body) {
        const apiService = new ApiService();
        return apiService.verificar(body);
    }

    testarBD() {
        const apiService = new ApiService();
        const result = apiService.testarBD();
        return result;
    }
    verificar(body) {
        const apiService = new ApiService();
        return apiService.verificar(body);
    }

    async cadastrarPessoa(body) {
        const apiService = new ApiService();
        const result = await apiService.cadastrarPessoa(body);
        return result;
    }

    async consultarPessoa(idPessoa) {
        const apiService = new ApiService();
        const result = await apiService.consultarPessoa(idPessoa);
        console.log(result);
        return result;
    }

    async cadastrarPessoaMasc(body) {
        const apiService = new ApiService();
        const result = await apiService.cadastrarPessoaMasc(body);
        return result;
    }

    async consultarCpf(cpf) {
        const apiService = new ApiService();
        const result = await apiService.consultarCpf(cpf);
        console.log(result);
        return result;
    }
}
module.exports = ApiController

