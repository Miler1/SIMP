<?php
//
// SIMP
// Descricao: Teste de barra de progresso
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 15/03/2011
// Modificado: 15/03/2011
// Copyright (C) 2011  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../config.php');

/// Dados da Pagina
$titulo  = 'Progresso';
$nav[''] = 'Progresso';
$estilos = false;


/// Imprimir pagina
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->inicio_conteudo($titulo);
teste_progresso();
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);


//
//     Teste de progresso
//
function teste_progresso() {
    global $CFG;
    $dados = formulario::get_dados();

    if ($dados) {
        simular_execucao($dados);
        imprimir_form();
    } else {
        imprimir_form();
    }
}


//
//     Imprime o formulario
//
function imprimir_form() {
    global $CFG;
    $form = new formulario($CFG->site, 'form_teste');
    $form->titulo_formulario('Teste de Progresso');
    $form->campo_hidden('id_progresso', md5(rand(1, 100000)));
    $form->campo_submit('testar', 'testar', 'Testar');
    $form->imprimir();
}


//
//     Simula uma execucao de alguns segundos
//
function simular_execucao($dados) {
// stdClass $dados: dados submetidos
//
    global $CFG;
    $duracao = 10; // Simulando algo em 10 segundos

    $time = $CFG->time + $duracao;
    progresso::abrir($dados->id_progresso);
    do {
        $time_atual = time();
        $percentual = min(100, ($duracao - ($time - $time_atual)) * 100 / $duracao);
        sleep(1);
        progresso::atualizar($dados->id_progresso, $percentual);
    } while ($time_atual < $time);
    progresso::atualizar($dados->id_progresso, 100);
    mensagem::aviso('Pronto');
    return true;
}