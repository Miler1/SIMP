<?php
//
// SIMP
// Descricao: Exemplo de logica em MVC
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 26/05/2011
// Modificado: 26/05/2011
// Copyright (C) 2011  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');

modulo::pagina('logica_exemplo');


//
//     Realiza a logica de exemplo
//
function logica_exemplo($pagina, $dados, $arquivos, $dados_gerais) {
// pagina $pagina: pagina que exibe os dados
// Object $dados: dados submetidos
// Object $arquivos: arquivos submetidos
// Object $dados_gerais: dados de utilizacao da funcao
//
    global $USUARIO, $CFG;

    // Incluir classes MVC
    $dir = dirname(__FILE__);
    require_once($dir.'/exemplo_model.php');
    require_once($dir.'/exemplo_view.php');
    require_once($dir.'/exemplo_controller.php');

    // Instanciar classes MVC
    $model      = new exemplo_model();
    $view       = new exemplo_view($model, $pagina);
    $controller = new exemplo_controller($model, $view);

    // Executar controlador
    $controller->executar();
}