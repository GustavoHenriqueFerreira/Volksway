USE db_volksway;

#EMPRESA
INSERT INTO tb_empresa
VALUES (UUID_TO_BIN(UUID()), "Volkswagen", "São Paulo", "11.111.111/1111-11"), (UUID_TO_BIN(UUID()), "Lamborghini", "São Caetano do Sul", "22.222.222/2222-22"), (UUID_TO_BIN(UUID()), "Audi", "São Paulo", "33.333.333/3333-33");

SELECT BIN_TO_UUID(id_empresa), razao_social, cidade, cnpj FROM tb_empresa;

#USUARIO
INSERT INTO tb_usuario
VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN("b79032cd-7202-11ee-b760-b445067b85b0"), "Viviane", "(11) 1111-11111", "adm@gmail.com", "124", "2004-08-16", "Sao Paulo", "111.111.111-11", 0),
(UUID_TO_BIN(UUID()), UUID_TO_BIN("b79032cd-7202-11ee-b760-b445067b85b0"), "Gustavo", "(11) 9999-99999", "gustavo@gmail.com", "123", "2004-07-16", "Anapolis", "100.100.100-10", 1);

SELECT BIN_TO_UUID(id_usuario), BIN_TO_UUID(id_empresa), nome, telefone, email, senha, data_nascimento, cidade, cpf, tipo_usuario FROM tb_usuario;

#VEICULO
INSERT INTO tb_veiculo
VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN("e4ccd97f-7203-11ee-b760-b445067b85b0"), "Volkswagen", "111-1111", "11111-11111-11111-11");

SELECT BIN_TO_UUID(id_veiculo), BIN_TO_UUID(id_usuario), marca, placa, codigo_chassi FROM tb_veiculo;

#CHECKLIST
INSERT INTO tb_checklist
VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN("ab4606d2-7204-11ee-b760-b445067b85b0"), true, false, true, false, "url da foto");

SELECT BIN_TO_UUID(id_checklist), BIN_TO_UUID(id_veiculo), freio, combustivel, oleo, ar_condicionado, foto_pneu FROM tb_checklist;

#PROPAGANDA
INSERT INTO tb_propaganda
VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN("9496130a-7205-11ee-b760-b445067b85b0"), "Parceira da Volks vende pneu barato!", "https://volksway", "Venha comprar o seu pneu!", "https://volksway/img", "Todos", "2023-11-23", 1000, true, "Banner");

SELECT BIN_TO_UUID(id_propaganda), BIN_TO_UUID(id_usuario), titulo, url, descricao, img, publico_alvo, data_limite, preco, importancia, nomeTipoPropaganda FROM tb_propaganda;

#INTERESSE
INSERT INTO tb_interesse
VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN("9d54da36-7206-11ee-b760-b445067b85b0"), UUID_TO_BIN("e4ccd97f-7203-11ee-b760-b445067b85b0"), true);

SELECT BIN_TO_UUID(id_interesse), BIN_TO_UUID(id_propaganda), BIN_TO_UUID(id_usuario), meio_contato_email FROM tb_interesse;