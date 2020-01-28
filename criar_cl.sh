#!/bin/bash
# SIMP
# Autor: Rubens Takiguti Ribeiro
# Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
# E-mail: rubens@tecnolivre.ufla.br
# Data: 14/01/2008
# Modificado: 12/01/2010
# Versao: 1.0.0.2
# Licenca: LICENCE.TXT
# Utilizacao: ./criar_cl.sh
# Copyright (C) 2008  Rubens Takiguti Ribeiro

# Data de inicio do changelog
INICIO='2007-12-08'

# Checar se existe o programa svn2cl
type -P svn2cl &> /dev/null

# Se existe
if (( $? == 0 ))
then
    # Gerar log de inicio ate hoje nos formatos Texto e HTML
    DATA_ATUAL=`date +%F`
    svn2cl --authors=svn.xml --break-before-msg=2 --linelen=80 -r "{$INICIO}:{$DATA_ATUAL}" ../../
    r1=$?
    svn2cl --authors=svn.xml --html --strip-prefix=simp/trunk -r "{$INICIO}:{$DATA_ATUAL}" --title="Mudanças no SIMP" ../../
    r2=$?
    unset DATA_ATUAL
    if (($r1 == 0 && $r2 == 0))
    then
        echo "ChangeLog criado com sucesso"
        exit 0
    else
        echo "Erro ao criar ChangeLog" 1>&2
        exit 2
    fi
# Se nao existe
else
    echo "Programa svn2cl nao encontrado" 1>&2
    echo "Link: <http://ch.tudelft.nl/~arthur/svn2cl/>" 1>&2
    exit 1
fi
