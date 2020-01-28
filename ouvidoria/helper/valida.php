<?php 

// Cria uma variável que terá os dados do erro
$erro = false;

$erros = array();

$curso 	  = $_POST["curso"];
$nome 	  = $_POST["nome"];
$tel_fixo = $_POST["tel_fixo"];
$tel_cel  = $_POST["tel_cel"]; 
$email 	  = $_POST["email"];
$numero   = $_POST["numero"];
$cep 	  = $_POST["cep"];
	
if ( ( ! isset( $curso ) || is_numeric( $curso ) ) && !$erro ) {
	$erros[] = 'O campo curso não pode ser numérico.';
}
echo 'valida.php';
// Verifica se $idade realmente existe e se é um número. 
// Também verifica se não existe nenhum erro anterior
if ( ( ! isset( $nome ) || is_numeric( $nome ) ) && !$erro ) {
	$erros[] += 'O campo nome não pode ser numérico.';
}

if ( ( ! isset( $tel_fixo ) || !is_numeric( $tel_fixo ) ) && !$erro ) {
	$erros[] += 'O campo telefone fixo deve ser numérico.';
}

// Verifica se $idade realmente existe e se é um número. 
// Também verifica se não existe nenhum erro anterior
if ( ( ! isset( $tel_cel ) || !is_numeric( $tel_cel ) ) && !$erro ) {
	$erros[] += 'O campo telefone celular deve ser numérico.';
}

if ( ( ! isset( $cep ) || !is_numeric( $cep ) ) && !$erro ) {
	$erros[] += 'O campo cep deve ser numérico.';
}

// Verifica se $idade realmente existe e se é um número. 
// Também verifica se não existe nenhum erro anterior
if ( ( ! isset( $numero ) || !is_numeric( $numero ) ) && !$erro ) {
	$erros[] += 'O campo numero deve ser numérico.';
}

// Verifica se $email realmente existe e se é um email. 
// Também verifica se não existe nenhum erro anterior
if ( ( ! isset( $email ) || ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) && !$erro ) {
	$erros[] += 'Envie um email válido.';
}

print_r($erros);
