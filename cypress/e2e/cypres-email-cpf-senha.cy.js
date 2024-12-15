describe('Teste de Login na Aplicação', () => {
    it('Deve realizar o login com e-mail, CPF e senha válidos', () => {
      // Acessa a página de login
      cy.visit('https://minhaaplicacao.com/login');
  
      // Preenche o campo de e-mail
      cy.get('input[name="email"]').type('usuario@exemplo.com');
  
      // Preenche o campo de CPF
      cy.get('input[name="cpf"]').type('123.456.789-00');
  
      // Preenche o campo de senha
      cy.get('input[name="senha"]').type('SenhaSegura123');
  
      // Clica no botão de login
      cy.get('button[type="submit"]').click();
  
      // Verifica se foi redirecionado para a página inicial do sistema
      cy.url().should('include', '/dashboard');
  
      // Confirma se uma mensagem de boas-vindas aparece
      cy.get('.mensagem-boas-vindas')
        .should('be.visible')
        .and('contain', 'Bem-vindo, Usuário!');
    });
  
    it('Deve exibir mensagem de erro ao tentar login com CPF inválido', () => {
      // Acessa a página de login
      cy.visit('https://minhaaplicacao.com/login');
  
      // Preenche o campo de e-mail
      cy.get('input[name="email"]').type('usuario@exemplo.com');
  
      // Preenche o campo de CPF com valor inválido
      cy.get('input[name="cpf"]').type('123.456.789-99');
  
      // Preenche o campo de senha
      cy.get('input[name="senha"]').type('SenhaSegura123');
  
      // Clica no botão de login
      cy.get('button[type="submit"]').click();
  
      // Verifica se uma mensagem de erro é exibida
      cy.get('.mensagem-erro')
        .should('be.visible')
        .and('contain', 'CPF inválido');
    });
  });