describe('Teste de Cadastro', () => {
  it('Preencher o formulário de cadastro', () => {
    // Visite a página de cadastro (substitua a URL pelo seu ambiente)
    cy.visit('/cadastro/usuario');

    /* Cadastro Tipo Usuário */
    cy.get('#motorista').click();
    cy.wait(500);
    cy.get('.btnProximo').click();

    /* Cadastro Veiculo */
    cy.get('#codigoChassi').type('11111111111111111');
    cy.get('#placa').type('1111111');
    cy.get('#marca').type('Volkswagen');
    cy.get('.btnProximo').click();

    /* Cadastro Empresa */
    cy.get('#nome').type('Volkswagen');
    cy.get('#cnpj').type('11111111111111');
    cy.get('#cidade').type('São Caetano do Sul');
    cy.get('.btnProximo').click();

    /* Cadastro Geral */
    cy.get('#nomeCompleto').type('Teste Teste');
    cy.get('#cpf').type('111111111111');
    cy.get('#telefone').type('11999999999');
    cy.get('#dataNascimento').type('2000-09-09');
    cy.get('#email').type('teste@gmail.com');
    cy.get('#senha').type('senha123');
    cy.get('#confirmarSenha').type('senha123');
    cy.get('.btnProximo').click();

    cy.wait(4000);
    // Aguarde uma mensagem de confirmação ou uma mudança na página, se aplicável
    // Por exemplo:
    // cy.contains('Cadastro concluído com sucesso').should('be.visible');
  });
});