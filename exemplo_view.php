<?php
//@ignoredoc
//
// SIMP
// Descricao: Imprime a ferramenta de exemplo
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 26/05/2011
// Modificado: 26/05/2011
// Copyright (C) 2011  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//


/// View
final class exemplo_view {
    private $model;   // exemplo_model Modelo
    private $pagina;  // pagina Objeto que exibe a pagina


    //
    //     Construtor
    //
    public function __construct($model, $pagina) {
    // exemplo_model $model: camada de modelo
    // pagina $pagina: gerador da pagina
    //
        $this->model = $model;
        $this->pagina = $pagina;
    }


    //
    //     Imprime a ferramenta de exemplo
    //
    public function imprimir() {
        global $CFG;

        // Obter valores usados pela visao
        $link_base = $CFG->site;
        link::normalizar($link_base);

        $img_aberto = icone::img('seta_baixo', 'Aberto');
        $img_fechado = icone::img('seta_direita', 'Fechado');

        // Perguntar ao model se o hello esta aberto
        $hello_aberto = $this->model->hello_aberto();

        // Se esta aberto: montar um link para fecha-lo
        if ($hello_aberto) {
            $link = link::adicionar_atributo($link_base, 'op', 'fechar_hello');
            $seta = $img_aberto;

        // Se esta fechado: montar um link para abri-lo
        } else {
            $link = link::adicionar_atributo($link_base, 'op', 'abrir_hello');
            $seta = $img_fechado;
        }

        // Montar a descricao do link
        $descricao = $seta.' Hello';

        // Exibir o link "hello" com uma seta aberta ou fechada
        echo '<div>';
        link::texto($link, $descricao, 'Hello', false, false, false, true, false);
        echo '</div>';

        // Caso o hello esteja aberto: mostrar "world"
        if ($hello_aberto) {
            echo '<div>World!</div>';
        }
    }

}//class