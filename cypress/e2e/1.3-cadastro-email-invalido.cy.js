describe('Cadastro com E-mail Inválido', () => {
    it('Não deve permitir cadastro com e-mail inválido', () => {
      cy.visit('https://prova-online.com/cadastro'); 
      
      // Preenchendo o formulário com e-mail inválido
      cy.get('input[name="nome"]').type('Denis Gomes'); 
      cy.get('input[name="email"]').type('denisgomes#email.com'); 
      cy.get('input[name="senha"]').type('SenhaForte123');
      
      // Clicando no Botão Cadastrar
      cy.get('button[type="submit"]').click();
      
      // Verificando se o sistema exibe a mensagem de erro para o e-mail
      cy.get('.erro-email').should('be.visible').and('contain', 'Por favor, insira um e-mail válido');
    });
  });