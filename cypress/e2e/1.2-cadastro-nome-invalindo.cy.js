describe('Cadastro com Nome Inválido', () => {
  it('Não deve permitir cadastro com nome inválido', () => {
    cy.visit('https://prova-online.com/cadastro'); 
    
    // Preenchendo o formulário com nome inválido
    cy.get('input[name="email"]').type('denisgomes@email.com'); 
    cy.get('input[name="senha"]').type('Senha123'); 
    
    // Clicando no Botão Cadastrar
    cy.get('button[type="submit"]').click();
    
    // Verificando se o sistema exibe a mensagem de erro para o nome
    cy.get('.erro-nome').should('be.visible').and('contain', 'O nome deve conter apenas letras e espaços');
  });
});