<?php
//
// SIMP
// Descricao: Classe com metodos para compactacao de CSS e JS
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@tecnolivre.com.br
// Versao: 1.0.0.0
// Data: 06/11/2012
// Modificado: 06/11/2012
// Copyright (C) 2012  Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
final class minificador {

    //
    //     Carrega todas as classes usadas pelo minificador
    //
    static public function preparar() {
        simp_autoload('javascriptpacker');
    }

    //
    //     Compacta o css (usado por ob_start)
    //
    static public function css($documento) {
    // String $documento: documento a ser compactado
    //
        $documento = preg_replace('#/\*(.*?)\*/#ms', '', $documento);
        $documento = preg_replace('#\s{2,}#m', ' ', $documento);
        $documento = preg_replace('#\s*([,\}\{:])\s*#m', '$1', $documento);
        return $documento;
    }

    //
    //     Compacta o js (usado por ob_start)
    //
    static public function javascript($documento) {
    // String $documento: documento a ser compactado
    //
        $js_packer = new javascriptpacker($documento);
        return $js_packer->pack();
    }
}
