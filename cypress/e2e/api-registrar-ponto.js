escribe('API Controle de Ponto - Registro de Ponto', () => {
    it('Deve registrar um ponto com sucesso', () => {
      cy.request({
        method: 'POST',
        url: '/pontos', // Rota relativa, usando baseUrl
        body: {
          funcionarioId: 123,
          dataHora: '2024-12-15T08:00:00Z',
          tipo: 'entrada', // Tipo do ponto: entrada ou saída
        },
      }).then((response) => {
        expect(response.status).to.eq(201); // Verifica se o registro foi bem-sucedido
        expect(response.body).to.have.property('id'); // Confirma que o ID do ponto foi retornado
      });
    });
  });