<?php
//
// SIMP
// Descricao: Exemplo de geracao de arquivo XML com todos os usuarios
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


/// Campos a serem armazenados no arquivo XML
$condicoes = condicao_sql::vazia();
$campos = array('cod_usuario', 'login', 'nome');


/// Consultar usuarios
$usuarios = objeto::get_objeto('usuario')->consultar_varios_iterador($condicoes, $campos);


$opcoes_http = array(
    'arquivo' => 'usuarios.xml'
);

/// Gerar arquivo XML
http::cabecalho('text/xml; charset='.$CFG->charset, $opcoes_http);
echo "<?xml version=\"1.0\" encoding=\"{$CFG->charset}\" ?>\n";
echo "<usuarios>\n";
foreach ($usuarios as $usuario) {
    echo $usuario->exportar_xml($campos);
}
echo '</usuarios>';
