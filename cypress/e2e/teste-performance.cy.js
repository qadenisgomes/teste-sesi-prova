describe('Testes de Performance com Cypress', () => {
    const maxLoadTime = 2000; // Tempo máximo de carregamento em milissegundos (2 segundos)
  
    it('Deve carregar a página rapidamente', () => {
      const startTime = performance.now(); // Marca o início da requisição
  
      cy.visit('https://www.exemplo.com', {
        onBeforeLoad(win) {
          // Utilizamos o "onBeforeLoad" para garantir que podemos capturar a performance
          win.performance.mark('start'); // Marca o início do carregamento
        }
      }).then(() => {
        const endTime = performance.now(); // Marca o fim da requisição
        const loadTime = endTime - startTime; // Calcula o tempo de carregamento
  
        // Valida se o tempo de carregamento está dentro do limite
        cy.log(`Tempo de carregamento: ${loadTime} ms`);
        expect(loadTime).to.be.lessThan(maxLoadTime); // Verifica se o tempo de carregamento é aceitável
      });
    });
  
    it('Deve carregar todos os recursos essenciais', () => {
      cy.visit('https://www.exemplo.com', {
        onBeforeLoad(win) {
          // Marca o início para que possamos medir quando todos os recursos forem carregados
          win.performance.mark('start');
        }
      }).wait(5000) // Aguardar alguns segundos para garantir que os recursos carregaram
        .then(() => {
          const timing = window.performance.timing; // Acessa os tempos de carregamento detalhados
          const loadTime = timing.loadEventEnd - timing.navigationStart; // Tempo de carregamento total
          cy.log(`Tempo total de carregamento: ${loadTime} ms`);
          
          // Verifica se o tempo total de carregamento está abaixo do limite
          expect(loadTime).to.be.lessThan(maxLoadTime);
        });
    });
  });