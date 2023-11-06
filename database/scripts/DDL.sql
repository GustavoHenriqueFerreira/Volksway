CREATE DATABASE db_volksway;

USE db_volksway;

CREATE TABLE tb_empresa(
	id_empresa BINARY(16) NOT NULL,
    razao_social VARCHAR(50) NOT NULL UNIQUE,
	cidade VARCHAR(50) NOT NULL,
    cnpj CHAR(18) NOT NULL UNIQUE,
    PRIMARY KEY(id_empresa)
);

CREATE TABLE tb_usuario(
	id_usuario BINARY(16) NOT NULL,
    id_empresa	BINARY(16) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    telefone CHAR(15) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cpf CHAR(14) NOT NULL UNIQUE,
    tipo_usuario TINYINT NOT NULL,
    PRIMARY KEY (id_usuario),
    FOREIGN KEY(id_empresa) REFERENCES tb_empresa(id_empresa)
);

CREATE TABLE tb_veiculo(
	id_veiculo BINARY(16) NOT NULL,
    id_usuario BINARY(16) NOT NULL,
    marca VARCHAR(30) NOT NULL,
	placa CHAR(8) NOT NULL UNIQUE,
    codigo_chassi CHAR(20) NOT NULL UNIQUE,
    PRIMARY KEY (id_veiculo),
    FOREIGN KEY(id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_checklist(
	id_checklist BINARY(16) NOT NULL,
    id_veiculo BINARY(16) NOT NULL,
    freio BIT NOT NULL,
    combustivel BIT NOT NULL,
    oleo BIT NOT NULL,
    ar_condicionado BIT NOT NULL,
    foto_pneu VARCHAR(256) NOT NULL,
    PRIMARY KEY (id_checklist),
    FOREIGN KEY(id_veiculo) REFERENCES tb_veiculo(id_veiculo)
);

CREATE TABLE tb_propaganda(
	id_propaganda BINARY(16) NOT NULL,
    id_usuario BINARY(16) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    url VARCHAR(256) NOT NULL,
    descricao VARCHAR(256) NOT NULL,
	img VARCHAR(256) NOT NULL,
    publico_alvo VARCHAR(30) NOT NULL,
	data_limite DATE NOT NULL,
    preco FLOAT(10,2) NOT NULL,
    importancia BIT NOT NULL,
    nomeTipoPropaganda VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_propaganda),
    FOREIGN KEY(id_usuario) REFERENCES tb_usuario(id_usuario)
);

CREATE TABLE tb_interesse(
	id_interesse BINARY(16) NOT NULL,
    id_propaganda BINARY(16) NOT NULL,
    id_usuario BINARY(16) NOT NULL,
    meio_contato_email BIT NOT NULL,
    PRIMARY KEY (id_interesse),
    FOREIGN KEY(id_propaganda) REFERENCES tb_propaganda(id_propaganda),
    FOREIGN KEY(id_usuario) REFERENCES tb_usuario(id_usuario)
);