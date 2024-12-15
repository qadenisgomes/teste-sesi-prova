describe('Teste de Upload de Arquivo', () => {
    // Função para fazer o upload
    const uploadFile = (filePath) => {
      cy.fixture(filePath).then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent,
          fileName: filePath.split('/').pop(),
          mimeType: 'application/octet-stream', // Pode ser ajustado conforme o tipo de arquivo
        });
      });
    };
  
    it('Deve fazer o upload de um arquivo válido', () => {
      const filePath = 'caminho/para/o/seu/arquivo.jpg'; // Caminho do arquivo de teste
      uploadFile(filePath);
  
      // Valide o comportamento esperado após o upload (sucesso)
      cy.get('.upload-success').should('be.visible');
    });
  
    it('Deve mostrar erro para arquivo inexistente', () => {
      const filePath = 'caminho/invalido/arquivo.jpg'; // Caminho do arquivo inexistente
      cy.fixture(filePath).catch(() => {
        cy.get('.upload-error').should('be.visible').and('contain', 'Arquivo não encontrado');
      });
    });
  
    it('Deve mostrar erro para tipo de arquivo inválido', () => {
      const filePath = 'caminho/para/o/seu/arquivo.exe'; // Caminho do arquivo com tipo inválido
      uploadFile(filePath);
  
      // Valide a mensagem de erro para tipo de arquivo inválido
      cy.get('.upload-error').should('be.visible').and('contain', 'Tipo de arquivo não permitido');
    });
  });