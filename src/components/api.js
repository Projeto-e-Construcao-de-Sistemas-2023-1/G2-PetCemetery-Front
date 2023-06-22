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

export const getCompraJazigo = async (cpf, id_jazigo, tipo) => {
    console.log("entrou no getCompraJazigo");
    try {
        const response = await apiCall.get(`/api/${cpf}/adquirir_jazigo/${id_jazigo}?tipo=${tipo}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCompraJazigoPlanos = async (cpf, id_jazigo) => {
    console.log("entrou no getCompraJazigoPlanos");
    try {
        const response = await apiCall.get(`/api/${cpf}/adquirir_jazigo/${id_jazigo}/listar_planos`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const compraJazigoPlanosPost = async (cpf, id_jazigo, plano_selecionado) => {
    console.log("entrou no CompraJazigoPlanoPost");
    try {
        const response = await apiCall.post(`/api/${cpf}/adquirir_jazigo/${id_jazigo}/listar_planos/${plano_selecionado}`);
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

export const removerItemCarrinho = async (cpf, idServico) => {
    console.log("entrou no removerItemCarrinho");
    try {
        const response = await apiCall.post(`/api/${cpf}/informacoes_carrinho/remover_servico?idServico=${idServico}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const realizarPagamentoPost = async (cpf, id_jazigo) => {
    console.log("entrou no postRealizarPagamento");
    try {
        const response = await apiCall.post(`/api/${cpf}/adquirir_jazigo/${id_jazigo}/informacoes_carrinho/finalizar`);
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

export const agendarEnterro = async (cpf, id, data, horario, nomePet, especie, dataNascimento) => {
  console.log("entrou no agendarEnterro");
  try {
      const response = await apiCall.post(`/api/${cpf}/meus_jazigos/${id}/agendar_enterro`, data, horario, nomePet, especie, dataNascimento);
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

export const finalizarCompraCarrinho = async (cpf) => {
    console.log("entrou no finalizarCompra");
    try {
        const response = await apiCall.post(`/api/${cpf}/informacoes_carrinho/finalizar`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const agendarExumacao = async (cpf, id, dataExumacao, horaExumacao) => {
    try {
        const response = await apiCall.post(`/api/${cpf}/meus_jazigos/${id}/agendar_exumacao?data=${dataExumacao}&hora=${horaExumacao}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao agendar exumação:', error);
        return null;
    }
};

  export const getDetalhesJazigo = async (cpf_proprietario, idJazigo) => {
    console.log("entrou no getDetalhesJazigo");
    try {
        const response = await apiCall.get(`/api/${cpf_proprietario}/meus_jazigos/${idJazigo}/detalhar_jazigo`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//Altera valor de um servico
//Passar um JSON no body com nome do servico e valor novo
export const AlterarValorServico = async (servico, valor) => {
  await apiCall.post(`/api/admin/servicos/alterar?servico=${servico}&valor=${valor}`).then((response) => {
      console.log(response);
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
}

//Adiciona item ao carrinho
export const addItemCarrinho = async (cpf, id, plano_selecionado, tipo) => {
    await apiCall.post(`/api/${cpf}/adquirir_jazigo/${id}/listar_planos/plano?planoSelecionado=${plano_selecionado}&tipo=${tipo}`).then((response) => {
        console.log(response);
        return response.data;
      }).catch((error) => {
        console.log(error);
      });
};

export const personalizarJazigo = async (cpf, id, mensagem) => {
    try {
      const response = await apiCall.post(`/api/${cpf}/informacoes_jazigo/${id}/editar_jazigo`, mensagem);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  
  