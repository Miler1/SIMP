<?php
//
// SIMP
// Descricao: Exemplo de grafico de pilha
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 10/08/2010
// Modificado: 10/08/2010
// Copyright (C) 2010  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');

$g = new grafico('Gráfico de Pilha');
$g->formato = GRAFICO_TIPO_PNG;
$g->largura = 300;
$g->altura  = 350;
$g->pos_legenda  = GRAFICO_DIREITA;
$g->tipo_cor     = GRAFICO_COR_NORMAL;
$g->tipo_grafico = GRAFICO_PILHA;

$g->legenda = array('Ativos', 'Inativos');
$g->escala = array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio');


$g->valores = array(
    array(100,  22,  40,  48,  10),  // Ativos
    array( 50,  30,  50,  98,  10)   // Inativos
);
$g->valor_topo = 150;

$g->imprimir();
