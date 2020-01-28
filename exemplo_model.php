<?php
//@ignoredoc
//
// SIMP
// Descricao: Controla o modelo de exemplo
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 26/05/2011
// Modificado: 26/05/2011
// Copyright (C) 2011  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//


/// Model
final class exemplo_model {


/// METODOS GERAIS DO MODELO


    //
    //     Construtor
    //
    public function __construct() {
        //TODO guardar possiveis valores em atributos
    }


/// METODOS DE SESSAO


    //
    //     Inicializa a sessao
    //
    public function iniciar_sessao() {
        if ($this->iniciou_sessao) {
            return true;
        }

        $_SESSION['exemplo'] = array(
            'hello_aberto' => false
        );

        return true;
    }


    //
    //     Verifica se a sessao foi inicializada
    //
    public function iniciou_sessao() {
        return isset($_SESSION['exemplo']);
    }


    //
    //     Limpa a sessao
    //
    public function limpar_sessao() {
        if ($this->iniciou_sessao()) {
            unset($_SESSION['exemplo']);
        }
    }


/// LOGICAS ACIONADAS PELO CONTROLADOR


    //
    //     Abre o hello
    //
    public function abrir_hello() {
        $_SESSION['exemplo']['hello_aberto'] = true;
    }


    //
    //     Fecha o hello
    //
    public function fechar_hello() {
        $_SESSION['exemplo']['hello_aberto'] = false;
    }


/// METODOS AUXILIARES PARA A VIEW


    //
    //     Verifica se o hello esta aberto
    //
    public function hello_aberto() {
        return $_SESSION['exemplo']['hello_aberto'];
    }


/// METODOS PARA DEPURACAO


    //
    //     Devolve dados de toda a sessao
    //
    public function dump() {
        return $_SESSION['exemplo'];
    }

}//class
