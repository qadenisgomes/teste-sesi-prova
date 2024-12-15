describe('Login com E-mail Inválido', () => {
    it('Deve exibir mensagem de erro ao inserir um e-mail inválido', () => {
      cy.visit('https://prova-online.com/login');
  
      // Preenchendo campos com dado de email invalida

      cy.get('input[name="email"]').type('denis#email');
      cy.get('input[name="senha"]').type('Senha123');

      // Clicando no Botão Login
  
      cy.get('button[type="submit"]').click();

      // Verificando se o sistema exibe a mensagem de erro para o e-mail
  
      cy.get('.erro-email').should('be.visible').and('contain', 'E-mail inválido');
    });
  });