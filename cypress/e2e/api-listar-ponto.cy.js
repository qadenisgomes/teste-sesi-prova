describe('API Controle de Ponto - Listar Pontos', () => {
  it('Deve listar os pontos de um funcionário', () => {
    cy.request({
      method: 'GET',
      url: '/pontos',
      qs: { funcionarioId: 123 }, // Query string para filtrar por funcionário
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica se a requisição foi bem-sucedida
      expect(response.body).to.be.an('array'); // Confirma que o retorno é uma lista
      expect(response.body[0]).to.have.property('dataHora'); // Verifica a estrutura do objeto retornado
      expect(response.body[0]).to.have.property('tipo'); // Garante que o tipo do ponto é incluído
    });
  });
});