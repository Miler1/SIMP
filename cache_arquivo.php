<?php
//
// SIMP
// Descricao: Exemplo de utilizacao da classe cache_arquivo
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 12/08/2010
// Modificado: 12/08/2010
// Copyright (C) 2010  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../config.php');

// Os dados sao armazenados em cache de arquivo atraves de um ID unico para o sistema inteiro.
// Funcionamento: basicamente e' preciso checar se o valor ja' esta' em cache.
// Caso esteja, obtem o valor. Caso nao esteja, consulta o valor e guarda na cache indicando
// o tempo de validade.

// Obter um ID unico
// (formado pelo nome do arquivo e numero da linha para garantir que e' unico no sistema)
$id = cache_arquivo::get_id();

// Se o valor esta' em cache: obter da cache
if (cache_arquivo::em_cache($id)) {
    $t1 = microtime(true);
    $minha_lista = cache_arquivo::get_valor($id);
    $t2 = microtime(true);

    echo '<p>Obteve da cache</p>';

// Se o valor nao esta' em cache: obte-lo da forma tradicional e guarda-lo em cache
} else {
    $t1 = microtime(true);
    $minha_lista = array('a', 'b', 'c', 'd');
    cache_arquivo::set_valor($id, $minha_lista, 10);
    $t2 = microtime(true);

    echo '<p>Obteve da forma tradicional</p>';
    echo '<p>Guardou em cache com validade de 10 segundos</p>';
}
echo '<p>Tempo: '.sprintf('%0.6f', $t2 - $t1).'</p>';

util::dump($minha_lista);

echo '<p>Time atual: '.time().'</p>';