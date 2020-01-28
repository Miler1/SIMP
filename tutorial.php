<?php
//
// SIMP
// Descricao: Extensao da classe Banca de Monografia
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 03/03/2007
// Modificado: 30/08/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT

/* Criacao da definicao de criacao da classe entidade 
Normalmente é criada a classe ENTIDADE (ou classe base) e, em seguida, a extensão desta
classe (obrigatório)*/
abstract class banca_base extends objeto_formulario {

	//
	// Cria a definição da entidade
	//
	protected function definir_entidade() {
		$this->criar_entidade(
			/* Nome Entidade */   'Banca de Monografia',
			/* Entidade Plural */ 'Bancas de Monografia',
			/* Gênero */ 		  'F',
			/* Nome Classe */ 	  'banca',
			/* Tabela */ 		  'bancas',
			/* Desc. Tabela */ 	  'Tabela de bancas de monografia'	
		)
	}

	// 
	// Cria os atributos da classe 
	//
	protected function definir_atributos(){

		// Definicao da chave primaria da tabela no bd

		// CAMPO: cod_banca
		$atributo = new atributo('cod_banca',
								 'C&oacute;digo da Banca', null);
		$atributo->set_tipo('int', false, 'PK'); //Chave Primaria
		$atributo->set_intervalo(1, 10000000);
		$atributo->set_validacao(false, false, true);
		$atributo->adicionar_atributo($atributo);
		unset($atributo);

		// CAMPO: nome
		$atributo = new atributo('nome', 'Nome', '');

		$atributo->set_tipo('string', false);
		$atributo->set_intervalo(1, 128);
		$atributo->set_validacao('NOME', false, false);
		$atributo->adicionar_atributo($atributo);
		unset($atributo);

		// CAMPO: data
		$atributo = new atributo('data', 'Data', 0);

		$atributo->set_tipo('int', false);
		$atributo->set_intervalo(0, 9000000000);
		$atributo->set_validacao(false, 'validar_data', false);
		$atributo->adicionar_atributo($atributo);
		unset($atributo);

		// CAMPO IMPLICITO: ano
		$this->adicionar_atributo_implicito('ano', 'Ano', 'get_ano', array('data'));

		// CAMPO: cod_orientador / orientador
		$this->adicionar_rel_uu(
			/* nome classe   	  */ 'professor',
			/* objeto gerado 	  */ 'orientador',
			/* atributo gerado 	  */ 'cod_orientador',
			/* descricao objeto   */ 'Orientador',
			/* descricao atributo */ 'C&oacute;digo do Orientador'
		);
		
		// CAMPO: cod_coorientador / coorientador
		$this->adicionar_rel_uu(
			/* nome classe 		  */ 'professor',
			/* objeto gerado 	  */ 'coorientador',
			/* atributo gerado 	  */ 'cod_coorientador',
			/* descricao objeto   */ 'Co-orientador',
			/* descricao_atributo */ 'C&oacute;digo do Co-orientador'
		);

		// CAMPO: professores (O método adicionar_rel_un é utilizado para relacionamentos (1:N), este porém cria um vetor que só pode ser consultado. Para adicionar ou remover elementos deste vetor é necessário utilizar os métodos inserir_elemento_rel_un e remover_elemento_rel_un ex: 
		/* 
			$this->inserir_rel_un(
			/* nome classe     */ //'professor',
			/* vetor gerado    */ //'membros',
			/* index vetor     */ //'cod_professor',
			/* campo impressao */ //'nome',
			/* campo ordem 	   */ //'nome'

		// CAMPO: professores (O método adicionar_rel_un é utilizado para relacionamentos (1:N), este porém cria um vetor que só pode ser consultado. Para adicionar ou remover elementos deste vetor é necessário utilizar os métodos inserir_elemento_rel_un e/ou remover_elemento_rel_un ex: 
		/* 
			$this->remover_rel_un(
			/* nome classe     */ //'professor',
			/* vetor gerado    */ //'membros',
			/* index vetor     */ //'cod_professor',
			/* campo impressao */ //'nome',
			/* campo ordem 	   */ //'nome'
																										)
		$this->adicionar_rel_un(
			/* nome classe     */ 'professor',
			/* vetor gerado    */ 'membros',
			/* index vetor     */ 'cod_professor',
			/* campo impressao */ 'nome',
			/* campo ordem 	   */ 'nome'
		);
	}

	// 
	// Retorna o ano da data requerida
	//
	public function get_ano(){
		return (int)strftime('%Y', $this->__get('data'));
	}

	// 
	// Checa se a data está correta
	//
	public function validar_data($data){
	// Int $data: timestamp da data a ser validada
	//
		return $data < time(); // Data de defesa não pode ser no futuro
	}

}//class

//
// SIMP
// Descricao: Extensao da classe Banca de Monografia
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 03/03/2007
// Modificado: 30/08/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT

// A seguir é apresentado um exemplo de (EXTENSÃO) da classe banca_base, definida no exemplo anterior (obrigatório):
final class banca extends banca_base{

	//
	// Retorna um campo do formulario
	//
	public function campo_formulario(&$form, $campo, $valor){
		// formulario $form: objeto do tipo formulario
		// String $campo: campo a ser adicionado
		// Mixed $valor: valor a ser preenchido automaticamente
		//
		switch($campo){

			// Campos de Texto
			case 'nome':
				$atributo = $this->get_definicao_atributo($campo);
				$form->campo_text($atributo->nome, $atributo->nome, $valor, $atributo->maximo, 30, $atributo->descricao);
				return true;
			case 'data_str':
				$valor = self::converter_data($valor, 'str');
				$form->campo_text('data_str', 'data_str', $valor, 10, 30, 'Data');
				return true;

			// Campos Select
			case 'cod_orientador':
				$atributo = $this->get_definicao_atributo($campo);
				$obj = $this->__get('orientador');
				$vt_orientadores = $obj->vetor_associativo();
				$label = $obj->get_entidade();
				$form->campo_select($atributo->nome, $atributo->nome, $vt_orientadores, $valor, $label);
				return true;

			case 'cod_coorientador':
				$atributo = $this->get_definicao_atributo($campo);
				$obj = $this->__get('coorientador');
				$vt_orientadores = $obj->vetor_associativo();
				$label = $obj->get_entidade();
				$form->campo_select($atributo->nome, $atributo->nome, $vt_orientadores, $valor, $label);
				return true;
		}
		return false;

	}

	//
	// Converte a data de Time para Str e de Str para Time
	//
	public static function converter_data($data, $formato){
	// Int || String $data: data no formato de string ou time
	// $formato: formato desejado
	//
		if ($formato == 'str') {
			return strftime('%d/%m/%Y', $data);
		} else {
			list($dia, $mes, $ano) = explode('/', $data);
			return mktime(0, 0, 0, $mes, $dia, $ano);
		}
	}

	//
	// Faz operacoes antes de salvar
	//
	public static function pre_salvar(&$salvar_campos){
	// Array[String] $salvar_campos: vetor de dados a serem salvos
	//
		switch($this->id_form){
		case $this->id_formulario_inserir():
		case $this->id_formulario_alterar():
			$salvar_campos[] = 'data';
			$time = self::converter_data($this->get_auxiliar('data_str'), 'time');
			$this->__set('data', $time);
		}
		return !$this->possui_erros();
	}

	//
	// Define a forma de exibir os atributos da classe
	//
	public function exibir_atributo($nome_atributo){
	// String $nome_atributo: nome do atributo a ser impresso
	//
		$valor = $this->get_atributo($nome_atributo);

		switch ($nome_atributo) {
		case 'data':
			$time = $this->__get('data');
			return self::converter_data($time, 'str');
		}
		return parent::exibir_atributo($nome_atributo);
	}
}//class

//
//		Retorna as possibilidades de valores para o atributo (ENUMERADO)
//
public function get_vetor_tipo(){
	return array(1 => 'sim',
				 2 => 'n&atilde;o',
				 3 => 'talvez');
}


/*		Criação do script de instalação da classe Preparação dos dados durante a instalação (OPCIONAL) 
		mas é opcional mesmo?! vamo ler o tutorial então      */

//
//		Funcao de instalacao de usuarios
//

function instalar_usuario(&$erros){
// Array[String] $erros: erros ocorridos
//
	$r = true;   //retorno da funcao

	$u = new usuario('login','admin');
	if ($u->existe()){
		return true;     // Se já existe, nao precisa instalar
	}
	$u->nome  = 'Administrador';
	$u->login = 'admin';
	$u->senha = 'admin';
	$u->email = 'mudeme@para.outra.coisa';

	// Salvando o usuário no BD
	$r = $r && $u->salvar();

	// Coloca-lo no grupo "administradores"
	if ($r) {
		$grupo = new stdClass();
		$grupo->cod_grupo = COD_ADMIN;
		$r = $r && $u->inserir_elemento_rel_un('grupos', $grupo);
	}

	// Se ocorreu algum erro interno no objeto $u
	if (!$r) {
		$erros = array_merge($erros, $u->get_erros());
	}

	return $r;		// retorna se deu tudo certo ou não
}

//
//		Retorna um vetor de classes dependentes
//
function dependencias_usuario() {
	return array('grupo');
}

// Utilizando a classe Banca aquela classe abstrata banca_base!
// digamos que já comece com:
// <?php
require_once('config.php');		// Caminho do arquivo config.php

// Incluindo o config.php ja podemos criar um objeto vazio
$banca_vazia = new banca();

// Ou criar um objeto consultado do BD atraves de algum campo 
$banca_rubens = new banca('nome', 'Rubens Takiguti Ribeiro');

// Checa se o objeto consultado existe ou não
$existe = $banca_rubens->existe();

// Obtendo o nome da chave primária e o seu valor
echo '<p>Nome da Chave:'.$banca_rubens->get_chave().'</p>';
echo '<p>Valor da Chave:'.$banca_rubens->get_valor_chave().'</p>';

// Imprimindo a banca por algum atributo que a identifique
echo 'Banca: '.$banca_rubens->get_nome().'</p>';
// O campo utilizado e obtido em $banca_rubens_get_campo_nome();

// Definindo o valor dos atributos da banca vazia
$banca_vazia->nome = 'Exemplo';
$banca_vazia->data = mktime(0, 0, 0, 12, 10, 2007);
$banca_vazia->cod_orientador = 3;
$banca_vazia->cod_coorientador = 4;

// Definindo atributos auxiliares
$banca_vazia->teste = 123;
// $banca_vazia->set_auxiliar('teste', 123);    // Outra forma

// Obtendo valores de atributos auxiliares
echo '<p>Teste: '.$banca_vazia->teste.'</p>';
// banca_vazia->get_auxiliar('teste')			// Outra forma

// Salvando os dados da banca vazia
$campos = array('nome', 'data', 'cod_orientador', 'cod_coorientador');
$salvou = $banca_vazia->salvar($campos);
// Se nao fosse passado o parametro, ele salvaria os campos modificados

// Checando se ocorreram erros
$possui_erros = $banca_vazia->possui_erros();

// Obtendo os erros ocorridos no objeto (caso existam)
$vetor_erros = $banca_vazia->get_erros();

// Imprimindo o vetor de avisos ocorridos no objeto
$banca_vazia->imprimir_avisos();

// Imprimindo o vetor de erros no objeto
$banca_vazia->imprimir_erros();

// Limpando os erros e avisos
$banca_vazia->limpar_avisos();
$banca_vazia->limpar_erros();

// Adicionando professores a banca
$p = new stdClass();
$p->cod_professor = 20;
$banca_vazia->inserir_elemento_rel_un('membros', $p);

$p->cod_professor = 23;
$banca_vazia->inserir_elemento_rel_un('membros', $p);

// Removendo professores da banca
$p->cod_professor = 20;		// Removendo professor 20
$banca_vazia->remover_elemento_rel_un('membros', $p);

// Obtendo o vetor de professores membros da banca
$membros = $banca_vazia->membros;

// Imprimindo os atributos da banca salva
echo '<p>Data: '.$banca_vazia->data.'</p>';
echo '<p>Ano: '.$banca_vazia->ano.'</p>';
echo '<p>Codigo do Orientador: '.$banca_vazia->cod_orientador.'</p>';

// Imprimindo algum atributo que identifique um orientador
echo '<p>Orientador: '.$banca_vazia->orientador.'</p>';

// Forma de imprimir algum atributo especifico de um orientador
echo '<p>Nome do Orientador: '.$banca_vazia->orientador->nome.'</p>';
echo '<p>Idade do Orientador: '.$banca_vazia->orientador->idade.'</p>';

// Forma de imprimir um quadro com os dados do objeto
$banca_vazia->imprimir_dados(array('nome', 'data',
								   'orientador:nome',
								   'coorientador:nome',
								   'membros'));

// Obtem a definicao de um atributo de classe
$atributo = $banca_vazia->get_definicao_atributo('data');

// Obtem o nome da entidade no singular ou plural
// Singular: Banca de Monografia
echo '<p>Entidade: '.$banca_vazia->get_entidade().'</p>';
// Plural: Banca de Monografia
echo '<p>Entidade: '.$banca_vazia->get_entidade(1).'</p>';

// Obtem o nome da classe do objeto
echo '<p>Classe: '.$banca_vazia->get_classe().'</p>';

// Obtem o nome da tabela do BD
echo '<p>Tabela: '.$banca_vazia->get_tabela().'</p>';

// Gera um objeto simples (stdClass) com os atributos desejados
$objeto = $banca_vazia->get_dados();

// Checa se possui um atributo com determinado nome
$objeto = $banca_vazia->possui_atributo('idade');

// Consulta outro objeto 
$banca_vazia->consultar('data', 1984791387);

// Consulta os campos do objeto consultado
$banca_vazia->consultar_campos(array('nome', 'data'));

// Retorna a quantidade de registros sob uma condição
$condicao = condicao_sql::montar('data', '>', '1984791357');
$quantidade = $banca_vazia->consultar_varios($condicao);

// Exclui a banca consultada
$banca_vazia->excluir();

/********************************************Listar Entidades (index.php)******************************************/

//
// SIMP
// Descricao: Lista os Livros da Biblioteca
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 11/12/2007
// Modificado: 11/12/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

// Dados do Quadro
$modulo = util::get_modulo(__FILE__);
$classe = 'livro';
$id_lista = 'lista livros';
$opcoes = array('exibir', 'alterar', 'excluir');
$campos = array('nome');
$link = $CFG->site;
$ajuda = <<<AJUDA
	<p>A tabela a seguir apresenta a lista de livros registrados
	no sistema. As op&ccedil;&otilde;es poss&iacute;veis
	s&atilde;o editar e excluir livros.</p>
AJUDA;

/// Dados da Pagina
$titulo = 'Livros da Biblioteca';
$nav[] = '#index.php';
$nav[] = $modulo.'#'.basename(__FILE__);
$estilos = $CFG->wwwmods.$modulo.'/estilos.css';

// Obter entidade
$entidade = new $classe();

// Obter condicoes da consulta
$condicoes = '';   // condicoes_consulta($dados);

// Imprimir pagina
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
mensagem::comentario($CFG->site, $ajuda);
//imprimir_form($dados);
$entidade->imprimir_lista($condicoes, $modulo, $id_lista, $link, $opcoes, $campos, $ordem);
//imprimir_links();
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);

// 
//		Imprime uma lista de links
//
function imprimir_links(){
	global $CFG, $USUARIO, $pagina, $modulo;

	$links = array(link::arquivo_modulo($USUARIO, 'inserir.php', 
				   $modulo, false, '', 'inserir', 1),
				   link::arquivo_modulo($USUARIO, 'importar_csv.php', 
				   $modulo, false, '', 'importar', 1)
				   link::arquivo_modulo($USUARIO, 'importar_xml.php', 
				   $modulo, false, '', 'importar', 1)
				  );
	$pagina->listar_opcoes($links);
}

/*****************************************Exibir Entidade (exibir.php)***********************************************/

//
// SIMP
// Descricao: Exibe os dados de um livro
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 04/09/2007
// Modificado: 04/09/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

// Dados do Quadro 
$modulo = util::get_modulo(__FILE__);
$classe = 'livro';
$campos = array('nome', 'autor', 'editora');

// Dados da Pagina
$titulo = 'Exibir Livro';
$nav[] = '#index.php';
$nav[] = $modulo.'#index.php';
$nav[] = $modulo.'#'.basename(__FILE__);
$estilos = array($CFG->wwwmods.$modulo.'/estilos.css');

// Consultar Entidade
$entidade = util::get_entidade($classe, $campos);

// Imprimir
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
$entidade->imprimir_dados($campos);
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);

/********************************************Inserir Entidade (inserir.php)********************************************************/

//
// SIMP
// Descricao: Arquivo para cadastrar livros
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 04/09/2007
// Modificado: 04/09/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

/// Dados do formulario
$modulo = util::get_modulo(__FILE__);
$classe = 'livro';
$campos = array('nome', 'autor', 'editora');
$prefixo = '';
$dados = util::dados_submetidos();
$action = $CFG->site;
$ajuda = <<<AJUDA
	'<p>Este formul&aacute;rio destina-se a cria&ccedil;&atilde;o de novos livros no sistema.</p>'
AJUDA; 

/// Dados da Pagina
$titulo = 'Cadastrar Livro';
$nav[] = '#index.php';
$nav[] = $modulo.'#index.php';
$nav[] = $modulo.'#'.basename(__FILE__);
$estilos = array($CFG->wwwmods.$modulo.'/estilos.css');

/// Criar Entidade
$entidade = new $classe();

/// Operacoes
if (!$entidade->pode_ser_manipulado($USUARIO)) {
	pagina::erro($USUARIO, ERRO_INSERIR);
	exit(1);
}

/// Imprimir pagina();
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
mensagem::comentario($CFG->site, $ajuda);
$entidade->formulario_inserir($dados, $campos, $action, $prefixo);
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);

/*****************************************Alterar Entidade (alterar.php)*******************************************/

//
// SIMP
// Descricao: Arquivo para alterar os dados dos livros
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 04/09/2007
// Modificado: 04/09/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

/// Dados do Formulario
$modulo = util::get_modulo(__FILE__);
$classe = 'livro';
$campos = array('nome', 'autor', 'editora');
$prefixo = '';
$dados = util::dados_submetidos();
$action = $CFG->site;
$ajuda = <<<AJUDA
	<p>Formul&eacute;rio para alterar os dados de um livro.</p>
AJUDA;

/// Dados da Pagina
$titulo = 'Alterar Livro';
$nav[] = '#index.php';
$nav[] = $modulo.'#index.php';
$nav[] = $modulo.'#'.basename(__FILE__);
$estilos = array($CFG->wwwmods.$modulo.'/estilos.css');

/// Consultar Entidade
$entidade = util::get_entidade($classe, $campos);

// Operacoes
if (!$entidade->pode_ser_manipulado($USUARIO)) {
	pagina::erro($USUARIO, ERRO_ALTERAR);
	exit(1);
}

/// Imprimir Pagina
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
mensagem::conteudo($CFG->site, $ajuda);
$pagina->formulario_alterar($dados, $campos, $action, $prefixo);
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);

/***************************************Excluir Entidade (excluir.php)**********************************************/
//
// SIMP
// Descricao: Arquivo que exclui um livro
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.10
// Data: 11/12/2007
// Modificado: 11/12/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

$modulo = util::get_modulo(__FILE__);
$classe = 'evento';
$campos = array('nome','autor','editora');
$prefixo = '';
$dados = util::dados_submetidos();
$action = $CFG->site;
<<<AJUDA
	<p>O formul&aacute;rio abaixo permite a exclus&atilde;o
	de um livro. Ap&oacute;s a confirma&ccedil;&atilde;o os
	dados n&atilde;o poder&atilde;o ser recuperados.</p>
AJUDA;

/// Dados da Pagina
$titulo = 'Excluir Evento';
$nav[] = '#index.php';
$nav[] = $modulo.'#index.php';
$nav[] = $modulo.'#exibir_eventos.php';
$nav[] = $modulo.'#'.basename(__FILE__);
$estilos = array($CFG->wwwmods.$modulo.'/estilos.css');

/// Consultar Entidade
$entidade = util::get_entidade($classe, $campos);

/// Operacoes
if (!$entidade->pode_ser_manipulado($USUARIO)){
	pagina::erro($USUARIO, ERRO_EXCLUIR);
	exit(1);
}

/// Imprimir pagina
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
mensagem::comentario($CFG->site, $ajuda);
$entidade->formulario_excluir($dados, $campos, $action, $prefixo);
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);

/***************************************Importar Entidades (importar_csv.php e importar_xml.php)**********************************************/

//
// SIMP
// Descricao: Importa livros de um arquivo CSV
// Autor: Rubens Takiguti Ribeiro
// Orgao: TecnoLivre - Cooperativa de Tecnologia e Solucoes Livres
// E-mail: rubens@exemplo.com
// Versao: 1.0.0.0
// Data: 04/09/2007
// Modificado: 04/09/2007
// Copyright (C) 2007 Rubens Takiguti Ribeiro
// License: LICENSE.TXT
//
require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

/// Dados do Formulario
$modulo = util::get_modulo(__FILE__);
$classe = 'livro';
$campos = array('nome', 'autor', 'editora');
$prefixo = '';
$action = $CFG->site;
$ajuda = <<<AJUDA
	<p>Este formul&aacute;rio destina-se &agrave;
importa&ccedil;&atilde;o de livros para popular o sistema.</p>
<p>O formato do arquivo deve ser <acronym title="Comma-separated
Values">CSV</acronym> contendo os campos: nome, autor e
editora.</p><p>Importar diretamente para o BD significa que os
dados n&atilde;o passar&atilde;o por uma valida&ccedil;&atilde;o,
logo ser&atilde;o inseridos da forma como est&atilde;o no
arquivo.</p>
AJUDA;

/// Consultar Entidade
$entidade = new $classe();

/// Dados da Pagina
$titulo = 'Importar Livros CSV';
$nav[] = '#index.php';
$nav[] = $modulo.'#index.php';
$nav[] = $modulo.'#'.basename(__FILE__);
$estilos = array($CFG->wwwmods.$modulo.'/estilos.css');

/// Imprimir pagina
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
mensagem::comentario($CFG->site, $ajuda);
$entidade->formulario_importar_csv($dados, $arquivos, $action, $prefixo, $campos);
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);


/*****************************************************************************Tópicos Extras (Trabalhando com Abas) *****************************************************/

require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

/// Definicao das abas
$modulo = util::get_modulo(__FILE__);
$classe = 'usuario';
$id_abas = $modulo.'_abas';

/// Recuperar a entidade desejada
$entidade = util::get_entidade($classe, true, false, false, false, $USUARIO,->get_valor_chave());

// Links e nomes das abas
$link = $CFG->wwwmods.$modulo.'/alterar.php';
$dir_modulo = $CFG->dirmods.$modulo.'/'; // diretório dos módulos do sistema
$parametros = $entidade->get_chave().'='.$entidade->get_valor_chave();
$padrao = 'pessoal';

/// Criar as Abas

// Aba: Alterar Dados Pessoais
$aba = new stdClass();
$aba->id = 'pessoal';
$aba->link = $link.'?'.$id_abas.'='.$aba->id.'&amp;'.$parametros;
$aba->arquivo = $dir_modulo.'alterar_pessoal.php';
$aba->nome = 'Pessoal';
$abas[$aba->id] = $aba;

// Aba: Alterar Senha
$aba = new stdClass();
$aba->id = 'senha';
$aba->link = $link.'?'.$id_abas.'='.$aba->id.'&amp;'.$parametros;
$aba->arquivo = $dir_modulo.'alterar_senha.php';
$aba->nome = 'Senha';
$abas[$aba->id] = $aba;

if ($entidade->get_valor_chave() !=
	$_SESSION[$modulo.'_'.$entidade->get_chave()]){
	$_SESSION[$id_abas] = $padrao;
}
$_SESSION[$modulo.'_'.$entidade->get_chave()] = $entidade->get_valor_chave();

/// Dados rcebidos por GET
$padrao = isset($_SESSION[$id_abas]) ? $_SESSION[$id_abas] : $padrao;
$ativa = util::get_dado($id_abas, 'string', false, $padrao);
$_SESSION[$id_abas] = $ativa;

/// Incluir o arquivo correspondente
require_once($abas[$ativa]->arquivo);

/*********************** Arquivo de apresentação de abas ************************/

require_once('../../config.php');
require_once($CFG->dirroot.'sessao.php');

/// Checar se foi concluido do arquivo de abas 
if (!isset($id_abas)) {
	exit(0);
}

/// Dados do Formulario
$dados = util::dados_submetidos();
$campos = array('nome', 'email', 'login');
$prefixo = '';
$action = $CFG->site;
$ajuda = <<<AJUDA
<p>Formul&aacute;rio para alterar os dados de usu&aacute;rios. N&atilde;o
&eacute; permitido duplicar e-mails ou logins para usu&aacute;rios
diferentes.</p>
AJUDA;

/// Dados da Pagina
$titulo = 'Alterar Dados Pessoais';
$nav[] = '#index.php';
$nav[] = $modulo.'#alterar.php';
$estilos = array($CFG->wwwmods.$modulo.'/estilos.css');

/// Imprimir Pagina
$pagina = new pagina();
$pagina->cabecalho($titulo, $nav, $estilos);
$pagina->imprimir_menu($USUARIO);
$pagina->inicio_conteudo($titulo);
$pagina->imprimir_abas($abas, $id_abas, $ativa);
mensagem::comentario($CFG->site, $ajuda);
$entidade->formulario_alterar($dados, $campos, $action, $prefixo);
$pagina->fechar_abas();
$pagina->fim_conteudo();
$pagina->rodape();
exit(0);

/*Paginacao*/

//
//		Imprime a lista de entidades
//
function imprimir_entidades($condicoes, $modulo, $id_lista, $link) {
// String $condicoes: condicoes de consulta
// String $modulo: nome do modulo 
// String $id_lista: identificador unico da lista
// String $link: link da pagina atual
//
	global $CFG;

	//Verifica se tem condicoes para consulta
	if ($condicoes === false) {
		return;
	}

	// Dados para paginacao
	$classe 	  = 'livro';
	$campos 	  = array('nome', 'autor');
	$ordem 		  = 'nome';
	$index  	  = false;
	$itens_pagina = false;

	// Criar paginacao
	$paginacao = new paginacao($modulo, $id_lista, $link);

	// Consultar entidades
	$livros = $paginacao->inicio_lista($classe, $condicoes, $campos, $ordem, $index, $itens_pagina);

	if ($livros) {

		// Manipular os dados
		foreach ($livros as $livro) {

			// Imprimir os dados e opcoes
			echo "<p>{$livro->nome} ({$livro->autor})<p>";
		}
	}
	$paginacao->fim_lista();
}

[...]
$dados = util::dados_submetidos();
[...]
// Normalizar link
link::normalizar($action, true);
[...]

/// Operacoes
if (!$dados){
	if (isset($_SESSION['livros_dados'])) {
		$dados = unserialize($_SESSION['livros_dados']);
	} else {
		$paginacao = new paginacao($modulo, $id_lista);
		$paginacao->salvar_pagina(1);
	}
} else {
	$_SESSION['livros_dados'] = serialize($dados);
	$paginacao = new paginacao($modulo, $id_lista);
	$paginacao->salvar_pagina(1);
}
[...]

// Condicao vazia
$condicao = condicao_sql::vazia();

// Condicao entre dois atributos: nome igual ao login
$condicao = condicao_sql::montar('nome','=','login',true);

// Condicao entre um atributo e um valor: cod_usuario maior que 4
$condicao = condicao_sql::montar('cod_usuario', '>', 4, true);

// Condicao para checar consultar usuarios que nao possuem grupo
$condicao = condicao_sql::montar('grupos:cod_grupo', '=', null);