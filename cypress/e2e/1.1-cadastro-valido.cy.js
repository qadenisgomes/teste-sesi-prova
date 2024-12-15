describe('Cadastro com Dados Válidos', () => {
  it('Deve cadastrar um usuário com dados válidos', () => {
    cy.visit('https://prova-online.com/cadastro');
    
    // Preenchendo o formulário com dados válidos
    cy.get('input[name="nome"]').type('Denis G0mes'); 
    cy.get('input[name="email"]').type('denisgomes@email.com');
    cy.get('input[name="senha"]').type('Senha123');
    
    // Clicando no Botão Cadastrar
    cy.get('button[type="submit"]').click();
    
    // Verificando se o cadastro foi realizado e mensagem de sucesso exibida

    cy.url().should('include', '/cadastro-sucesso');
    cy.get('.mensagem-sucesso').should('be.visible').and('contain', 'Cadastro realizado com sucesso');
  });
});