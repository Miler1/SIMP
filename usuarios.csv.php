<?php
//
// SIMP
// Descricao: Exemplo de geracao de arquivo CSV com todos os usuarios
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.2
// Data: 03/03/2007
// Modificado: 04/10/2012
// Copyright (C) 2007  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');


$condicoes = condicao_sql::vazia();
$campos = array('cod_usuario', 'login', 'nome');


/// Consultar os usuarios
$usuarios = objeto::get_objeto('usuario')->consultar_varios_iterador($condicoes, $campos);


$opcoes_http = array(
    'arquivo' => 'usuarios.csv',
    'compactacao' => true
);

/// Gerar arquivo CSV
http::cabecalho('text/csv; charset='.$CFG->charset.'; header=present', $opcoes_http);

// Gerar Cabecalho CSV
if ($campos === true) {
    $campos = array();
    foreach ($u->get_atributos() as $atributo) {
        $campos[] = $atributo->nome;
    }
}
echo implode(',', $campos)."\n";

// Imprimir conteudo CSV
foreach ($usuarios as $usuario) {
    echo $usuario->exportar_csv($campos);
}
