USE db_volksway;

#EMPRESA
SELECT BIN_TO_UUID(id_empresa), razao_social, cidade, cnpj FROM tb_empresa;

#USUARIO
SELECT BIN_TO_UUID(id_usuario), BIN_TO_UUID(id_empresa), nome, telefone, email, senha, data_nascimento, cidade, cpf, tipo_usuario FROM tb_usuario;

#VEICULO
SELECT BIN_TO_UUID(id_veiculo), BIN_TO_UUID(id_usuario), marca, placa, codigo_chassi FROM tb_veiculo;

#CHECKLIST
SELECT BIN_TO_UUID(id_checklist), BIN_TO_UUID(id_veiculo), freio, combustivel, oleo, ar_condicionado, foto_pneu FROM tb_checklist;

#PROPAGANDA
SELECT BIN_TO_UUID(id_propaganda), BIN_TO_UUID(id_usuario), titulo, url, descricao, img, publico_alvo, data_limite, preco, importancia, nomeTipoPropaganda FROM tb_propaganda;

#PROPAGANDA
SELECT BIN_TO_UUID(id_interesse), BIN_TO_UUID(id_propaganda), BIN_TO_UUID(id_usuario), meio_contato_email FROM tb_interesse;