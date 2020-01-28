<?php
//
// SIMP
// Descricao: Arquivo para testar a serializacao de objetos do simp
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 16/12/2010
// Modificado: 16/12/2010
// Copyright (C) 2010  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../config.php');

echo '<p>criou U1</p>';
$u1 = new usuario('', 1, array('nome', 'login'));
objeto::dump_instancias('usuario');

echo '<p>criou U2</p>';
$u2 = new usuario('login', 'admin', array('senha'));
objeto::dump_instancias('usuario');

echo '<p>Serializou U1 e apagou U1 e U2</p>';
$x = serialize($u1);
unset($u1, $u2);
objeto::dump_instancias('usuario');

echo '<p>Criou U3 a partir de valor serializado</p>';
$u3 = unserialize($x);
objeto::dump_instancias('usuario');

