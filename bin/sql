#!/usr/bin/env php
<?php
//
// SIMP
// Descricao: script para gerar as SQLs de instalacao da base de dados
// Autor: Rubens Takiguti Ribeiro
// Orgao: Tecnolivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.2.0.2
// Data: 12/12/2007
// Modificado: 10/11/2010
// Copyright (C) 2007  Rubens Takiguti Ribeiro
// Licenca: LICENCE.TXT
//
$simp = getenv('SIMP_SCRIPT') ? getenv('SIMP_SCRIPT') : 'simp';
$dirroot = `$simp config --dirweb`;
require_once($dirroot.'config.php');

$drivers = objeto_dao::get_drivers();

// Obter argumentos da linha de comando
$opcoes = getopt('a:d:');
$arquivo = isset($opcoes['a']) ? $opcoes['a'] : false;
$driver = isset($opcoes['d']) ? $opcoes['d'] : false;
if (!$arquivo) {
    $arquivo = 'stdout';
}
if (!$driver) {
    fwrite(STDOUT, "Drivers disponiveis:\n");
    foreach ($drivers as $d) {
        $codigo = texto::decodificar($d->codigo);
        $sgbd   = texto::decodificar($d->sgbd);
        $nome   = texto::decodificar($d->nome);
        fprintf(STDOUT, "%-15s (%s / %s)\n", $codigo, $sgbd, $nome);
    }
    fwrite(STDOUT, 'Entre com o codigo: ');
    fscanf(STDIN, "%s\n", $driver);
}

// Procurar pelo driver informado
$achou = false;
foreach ($drivers as $d) {
    if ($driver == $d->codigo) {
        $achou = true;
    }
}

if (!$achou) {
    fwrite(STDERR, "Driver desconhecido: {$driver}\n");
    exit(1);
}

// Iniciar objeto_dao
try {
    $bd = new objeto_dao($driver);
    $bd->carregar('operacao');
    $bd->set_exibicao_usuario(true);
} catch (Exception $e) {
    fwrite(STDERR, 'Erro com o driver (Erro: '.$e->getMessage().")\n");
    exit(2);
}

$vt_sql = array();
foreach (instalacao::get_objetos() as $obj) {
    $vt_sql[] = $bd->sql_create_table($obj, OBJETO_DAO_CHARSET);
}

// Gerar a SQL
$sql = $bd->formatar_sql($vt_sql, "\n\n");

// Tentar escrever no arquivo
if ($arquivo != 'stdout') {
    if (!file_put_contents($arquivo, $sql)) {
        fwrite(STDERR, "Erro ao gerar o arquivo\n");
        exit(1);
    }
} else {
    fwrite(STDOUT, $sql);
}

fwrite(STDOUT, "Arquivo gerado com sucesso\n");
exit(0);
