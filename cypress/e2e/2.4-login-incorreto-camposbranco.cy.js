describe('Login com Campos em Branco', () => {
    it('Deve exibir mensagem de erro ao deixar os campos em branco', () => {
      cy.visit('https://prova-online.com/login');
  
      // Clicando no botão login sem preencher os campos
      cy.get('button[type="submit"]').click();

      // Verificando se o sistema exibe a mensagem de erro campo obrigatorio
  
      cy.get('.erro-campos').should('be.visible').and('contain', 'Preencha todos os campos');
    });
  });
  