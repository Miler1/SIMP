<?php
//
// SIMP
// Descricao: Arquivo para testar a cache em sessao (classe objeto)
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.1
// Data: 03/03/2007
// Modificado: 17/12/2010
// Copyright (C) 2007  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../config.php');

$classe = 'grupo';

$dados = formulario::get_dados();
if (isset($dados->limpar_cache)) {
    echo '<p>Limpando a Cache</p>';
    objeto::limpar_cache('usuario');
    objeto::limpar_cache($classe);
}

if (!objeto::em_cache('usuario', 1)) {
    echo '<p>Consultando usuario no BD</p>';
    $t1 = microtime(true);
    $u = new usuario('', 1, true);
    $t1 = microtime(true) - $t1;
    objeto::set_cache('usuario', 1);
} else {
    echo '<p>Consultando usuario na Cache</p>';
    $t1 = microtime(true);
    if (objeto::em_cache('usuario', 1)) {
        $u = &objeto::get_cache('usuario', 1);
    } else {
        echo 'Erro: '.$e->getMessage();
        exit(1);
    }
    $t1 = microtime(true) - $t1;
}

if (!objeto::em_cache($classe)) {
    echo '<p>Consultando '.$classe.' no BD</p>';
    $t2 = microtime(true);
    $entidades = objeto::get_objeto($classe)->consultar_varios(condicao_sql::vazia(), true);
    $t2 = microtime(true) - $t2;
    objeto::set_cache($classe);
} else {
    echo '<p>Consultando '.$classe.' na Cache</p>';
    $t2 = microtime(true);
    if (objeto::em_cache($classe)) {
        $entidades = &objeto::get_cache($classe);
    } else {
        echo 'Erro: '.$e->getMessage();
        exit(1);
    }
    $t2 = microtime(true) - $t2;
}

echo '<p>Tempo de Consulta: '.round($t1 + $t2, 3).' segundos</p>';

echo '<h1>Alguns dados do Usu&aacute;rio 1</h1>';
$u->imprimir_dados(array('nome', 'email'));


echo '<h1>Lista de '.$classe.'</h1>';
echo '<ul>';
foreach ($entidades as $e) {
    echo '<li>'.$e->get_nome().'</li>';
}
echo '</ul>';

$form = new formulario($CFG->site, 'form_reset');
$form->campo_submit('limpar_cache', 'limpar_cache', 'Limpar Cache');
$form->campo_submit('consultar', 'consultar', 'Atualizar P&aacute;gina');
$form->imprimir();
