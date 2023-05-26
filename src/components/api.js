import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiCall = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginPost = async (email, senha) => {
    console.log("entrou no loginPost");
    try {
        const response = await apiCall.post('/api/login', { email, senha });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const cadastroPost = async (email, senha, senharepeat, nome, cpf, telefone, rua, numero, complemento, cep) => {
    console.log("entrou no cadastroPost");
    try {
        const response = await apiCall.post('/api/cadastro', { email, senha, senharepeat, nome, cpf, telefone, rua, numero, complemento, cep });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getGravesOccupationStatus = async (cpf) => {
    console.log("entrou no getGravesOccupationStatus");
    try {
        const response = await apiCall.get('/api/jazigos_disponiveis');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getExibirPerfil = async (cpf) => {
    console.log("entrou no getExibirPerfil");
    try {
        const response = await apiCall.get('/api/cliente/${cpf}/exibir-perfil');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const DesativarPerfilPost = async (cpf) => {
    console.log("entrou no DesativarPerfilPost");
    try {
        const response = await apiCall.get('/api/cliente/${cpf}/desativar-perfil');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const EditarPerfilPost = async (nome, email, telefone, rua, numero, complemento, cep, senha, senharepeat, cpf) => {
    console.log("entrou no EditarPerfilPost");
    try {
        const response = await apiCall.get('/api/cliente/${cpf}/editar-perfil');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMeusJazigos = async (cpf_proprietario) => {
    console.log("entrou no getMeusJazigos");
    try {
        const response = await apiCall.get('/api/${cpf_proprietario}/meus_jazigos');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCompraJazigo = async (cpf, id_jazigo) => {
    console.log("entrou no getCompraJazigo");
    try {
        const response = await apiCall.get('/api/${cpf}/comprar_jazigo/${id_jazigo}');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCompraJazigoPlanos = async (cpf, id_jazigo) => {
    console.log("entrou no getCompraJazigoPlanos");
    try {
        const response = await apiCall.get('/api/${cpf}/comprar_jazigo/${id_jazigo}/listar_planos');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const CompraJazigoPlanosPost = async (cpf, id_jazigo, plano_selecionado) => {
    console.log("entrou no CompraJazigoPlanoPost");
    try {
        const response = await apiCall.get('/api/${cpf}/comprar_jazigo/${id}/listar_planos/${plano_selecionado}');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getInformacoesCarrinho = async (cpf, id_jazigo) => {
    console.log("entrou no getInformacoesCarrinho");
    try {
        const response = await apiCall.get('/api/${cpf}/comprar_jazigo/${id_jazigo}/informacoes_carrinho');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const RealizarPagamentoPost = async (cpf, id_jazigo) => {
    console.log("entrou no postRealizarPagamento");
    try {
        const response = await apiCall.get('/api/${cpf}/comprar_jazigo/${id_jazigo}/informacoes_carrinho/finalizar');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};