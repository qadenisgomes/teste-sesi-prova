describe('Login com Credenciais Válidas', () => {
    it('Deve autorizar o acesso com e-mail e senha válidos', () => {
      cy.visit('https://prova-online.com/login'); 
  
      // Preenchendo campos com dados válidos

      cy.get('input[name="email"]').type('usuario.valido@dominio.com');
      cy.get('input[name="senha"]').type('SenhaValida123'); 

      // Clicando no Botão Login

      cy.get('button[type="submit"]').click();

     // Verificando se a pagina é direcionada para o dashboard e mensagem de sucesso é exibida
       
      cy.url().should('include', '/dashboard'); 
      cy.get('.bem-vindo').should('be.visible').and('contain', 'Bem-vindo');
    });
  });