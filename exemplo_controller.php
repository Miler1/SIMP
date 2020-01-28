<?php
//@ignoredoc
//
// SIMP
// Descricao: Controla as acoes de exemplo
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 26/05/2011
// Modificado: 26/05/2011
// Copyright (C) 2011  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//


/// Controller
final class exemplo_controller {
    private $model;  // exemplo_model Modelo
    private $view;   // exemplo_view Visao


    //
    //     Construtor
    //
    public function __construct($model, $view) {
    // exemplo_model $model: camada de modelo
    // exemplo_view $view: camada de visao
    //
        $this->model = $model;
        $this->view  = $view;
    }


    //
    //     Executa a logica de exemplo
    //
    public function executar() {

        // Inicializar sessao
        $this->model->iniciar_sessao();

        // Tratar eventos / modificar modelo
        $this->tratar_eventos();

        // Imprimir tudo
        $this->view->imprimir();
    }


    //
    //     Trata os eventos e aciona operacoes sobre o modelo
    //
    public function tratar_eventos() {

        // Obter dados recebidos por POST (para usar em algum evento, se precisar)
        $dados = formulario::get_dados();

        // Verificar se foi solicitada alguma operacao
        if (isset($_REQUEST['op'])) {

            // Realizar uma acao de acordo com o evento
            switch ($_REQUEST['op']) {
            case 'abrir_hello':
                $this->model->abrir_hello();
                break;
            case 'fechar_hello':
                $this->model->fechar_hello();
                break;
            }
        }
    }
}