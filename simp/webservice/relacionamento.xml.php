<?php
//
// SIMP
// Descricao: Arquivo para listar entidades e codigos
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.1.0.0
// Data: 20/12/2007
// Modificado: 26/11/2012
// Copyright (C) 2007  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../config.php');

/// Obter dados
$id = util::get_dado('id', 'string');
$input = util::get_dado('input', 'string', false);

$id = str_replace('.', '', $id);
$arq = $CFG->dirarquivos.'/simp_relacionamentos/'.$id;

if (!is_file($arq)) {
    exit(1);
}
$dados = file_get_contents($arq);
$dados = unserialize($dados);

$xml = gerar_xml($dados, $input);

coletar_lixo_relacionamentos();

/// Exibir os possiveis itens
$opcoes_http = array(
    'arquivo' => 'lista_'.$dados[0].'.xml',
    'compactacao' => true
);

http::cabecalho('text/xml; charset='.$CFG->charset, $opcoes_http);
echo $xml;
exit(0);


//
//     Gera um XML com os dados desejados
//
function gerar_xml($dados, $input) {
// Array[Mixed] $dados: dados do relacionamento
// String $input: nome do input
//
    global $CFG;
    list($classe, $campo_preencher, $campo_exibir, $condicoes) = $dados;

    if (is_null($condicoes) || (is_string($condicoes) && empty($condicoes))) {
        $condicoes = condicao_sql::vazia();
    }
    $campos = array(
        $campo_preencher,
        $campo_exibir
    );
    $ordem = array(
        $campo_preencher => true
    );

    $registros = objeto::get_objeto($classe)->consultar_varios_iterador($condicoes, $campos, $ordem);

    /// Montar conteudo XML
    $xml = "<?xml version=\"1.0\" encoding=\"{$CFG->charset}\" ?>\n".
           "<?xml-stylesheet type=\"text/xsl\" href=\"{$CFG->wwwroot}webservice/relacionamento.xsl.php?dados={$dados}&amp;input={$input}\" ?>\n".
           "<entidades>\n";
    foreach ($registros as $registro) {
        $codigo = $registro->__get($campo_preencher);
        if (is_int($codigo) || is_float($codigo)) {
            $codigo = texto::numero($codigo);
        }
        $valor  = $registro->__get($campo_exibir);
        $xml .= "<entidade>".
                "<codigo><![CDATA[{$codigo}]]></codigo>".
                "<valor><![CDATA[{$valor}]]></valor>\n".
                "</entidade>\n";
    }
    //$xml .= '<memoria>'.memoria::formatar_bytes(memory_get_usage())."</memoria>\n";
    $xml .= "</entidades>";

    return $xml;
}


//
//    Remove arquivos de relacionamento muito antigos
//
function coletar_lixo_relacionamentos() {
    global $CFG;

    // Executar apenas em 1% das requisicoes
    $executar = mt_rand(1, 100) == 1;

    if (!$executar) {
        return;
    }

    // Remover arquivos com mais de 5 dias
    $nome_dir = $CFG->dirarquivos.'simp_relacionamentos';
    $dir = opendir($nome_dir);
    if (!$dir) {
        return false;
    }

    $agora = time();
    $max_diferenca = 5 * 24 * 60 * 60;
    while (($item = readdir($dir)) !== false) {
        $item_completo = $nome_dir.'/'.$item;
        if (is_dir($item_completo)) {
            continue;
        }
        $mtime = filemtime($item_completo);
        $diferenca = $agora - $mtime;
        if ($diferenca > $max_diferenca) {
            unlink($item_completo);
        }
    }
    closedir($dir);
}