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
        const response = await apiCall.get(`/api/${cpf}/jazigos_disponiveis`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getExibirPerfil = async (cpf) => {
    console.log("entrou no getExibirPerfil");
    try {
        const response = await apiCall.get(`/api/cliente/${cpf}/exibir-perfil`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAlterarPerfil = async (cpf) => {
    console.log("entrou no getAlterarPerfil");
    try {
        const response = await apiCall.get(`/api/cliente/${cpf}/get-alterar-perfil`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const desativarPerfilPost = async (cpf) => {
    console.log("entrou no DesativarPerfilPost");
    try {
        const response = await apiCall.post(`/api/cliente/${cpf}/desativar-perfil`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const editarPerfilPost = async (nome, email, telefone, rua, numero, complemento, cep, senha, senharepeat, cpf) => {
    console.log("entrou no EditarPerfilPost");
    try {
        const response = await apiCall.post(`/api/cliente/${cpf}/editar-perfil`, { nome, email, telefone, rua, numero, complemento, cep, senha, senharepeat, cpf });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMeusJazigos = async (cpf_proprietario) => {
    console.log("entrou no getMeusJazigos");
    try {
        const response = await apiCall.get(`/api/${cpf_proprietario}/meus_jazigos`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCompraJazigo = async (cpf, id_jazigo) => {
    console.log("entrou no getCompraJazigo");
    try {
        const response = await apiCall.get(`/api/${cpf}/comprar_jazigo/${id_jazigo}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAluguelJazigo = async (cpf, id_jazigo) => {
    console.log("entrou no getAluguelJazigo");
    try {
        const response = await apiCall.get(`/api/${cpf}/alugar_jazigo/${id_jazigo}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCompraJazigoPlanos = async (cpf, id_jazigo) => {
    console.log("entrou no getCompraJazigoPlanos");
    try {
        const response = await apiCall.get(`/api/${cpf}/comprar_jazigo/${id_jazigo}/listar_planos`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAluguelJazigoPlanos = async (cpf, id_jazigo) => {
    console.log("entrou no getAluguelJazigoPlanos");
    try {
        const response = await apiCall.get(`/api/${cpf}/alugar_jazigo/${id_jazigo}/listar_planos`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const compraJazigoPlanosPost = async (cpf, id_jazigo, plano_selecionado) => {
    console.log("entrou no CompraJazigoPlanoPost");
    try {
        const response = await apiCall.post(`/api/${cpf}/comprar_jazigo/${id_jazigo}/listar_planos/${plano_selecionado}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getInformacoesCarrinho = async (cpf) => {
    console.log("entrou no getInformacoesCarrinho");
    try {
        const response = await apiCall.get(`/api/${cpf}/informacoes_carrinho`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const realizarPagamentoPost = async (cpf, id_jazigo) => {
    console.log("entrou no postRealizarPagamento");
    try {
        const response = await apiCall.post(`/api/${cpf}/comprar_jazigo/${id_jazigo}/informacoes_carrinho/finalizar`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const agendarReuniao = async (cpf, data, horario, assunto) => {
    console.log("entrou no agendarReuniao");
    try {
        const reuniao = { data, horario, assunto }; // construa o objeto Reuniao
        const response = await apiCall.post(`/api/reuniao/cliente/${cpf}/agendar`, reuniao);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const visualizarReuniao = async () => {
    try {
        const response = await apiCall.get('/api/reuniao/admin/visualizar');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const finalizarCompra = async (cpf, id, planoSelecionado) => {
    console.log("entrou no finalizarCompra");
    try {
        const response = await apiCall.post(`/api/${cpf}/comprar_jazigo/${id}/listar_planos/plano?planoSelecionado=${planoSelecionado}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const finalizarAluguel = async (cpf, id, planoSelecionado) => {
    console.log("entrou no finalizarAluguel");
    try {
        const response = await apiCall.post(`/api/${cpf}/alugar_jazigo/${id}/listar_planos/plano?planoSelecionado=${planoSelecionado}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const agendarExumacao = async (data, horario) => {
    try {
      const response = await axios.post('api/{cpf}/meus_jazigos/{id}/agendar_exumacao', {
        data,
        horario,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Falha na requisição');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  };

  export const getDetalhesJazigo = async (cpf_proprietario, id_jazigo) => {
    console.log("entrou no getDetalhesJazigo");
    try {
        const response = await apiCall.get(`/api/${cpf_proprietario}/meus_jazigos/${id_jazigo}/detalhar_jazigo`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};