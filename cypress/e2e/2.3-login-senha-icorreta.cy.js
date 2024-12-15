describe('Login com Senha Incorreta', () => {
    it('Deve exibir mensagem de erro ao inserir uma senha errada', () => {
      cy.visit('https://prova-online.com/login');
  
      // Preenchendo campos com dados senha invalida

      cy.get('input[name="email"]').type('usuario.valido@dominio.com');
      cy.get('input[name="senha"]').type('SenhaIncorreta');
      
       // Clicando no Botão Login

      cy.get('button[type="submit"]').click();

      // Verificando se o sistema exibe a mensagem de erro para o senha
  
      cy.get('.erro-senha').should('be.visible').and('contain', 'Senha incorreta');
    });
  });