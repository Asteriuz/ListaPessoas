function CadastroModel(id, nome, descricao, contato) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.contato = contato;

    return {
        id: id,
        nome: nome,
        descricao: descricao,
        contato: contato,
    };
}

export default CadastroModel;