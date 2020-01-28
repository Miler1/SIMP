<?php 

define ('EMAIL', 'milergrudtner@gmail.com');
define ('PASS', 'esqueciasenha');
define ('NAME', 'Miler Grudtner Boell');
define ('FORMATO', 'UTF-8');
define ('SMTP', 'smtp.gmail.com');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/src/Exception.php';
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';
//require_once 'helper/valida.php';

// $erros armazena as mensagens de erro
$erros = array();

$curso 	  		= ( isset($_POST['curso']) ) ? $_POST['curso'] : null;
$nome 	  		= ( isset($_POST['nome']) ) ? $_POST['nome'] : null;
$tel_cel  		= ( isset($_POST['tel_cel']) ) ? $_POST['tel_cel'] : null;
$email 	  		= ( isset($_POST['email']) ) ? $_POST['email'] : null;
$mensagem 		= ( isset($_POST['mensagem']) ) ? $_POST['mensagem'] : null;
$sigilosa 		= ( isset($_POST['sigilosa']) ) ? $_POST['sigilosa'] : null;
$obj_reclamacao = ( isset($_POST['obj_reclamacao']) ) ? $_POST['obj_reclamacao'] : null;
$meio_resposta  = ( isset($_POST['meio_resposta']) ) ? $_POST['meio_resposta'] : null;
$tipopessoa 	= ( isset($_POST['tipopessoa']) ) ? $_POST['tipopessoa'] : null;

$vt_telefone = str_split($tel_cel);
$vt_email = str_split($email);
$vt_mensagem = str_split($mensagem);

var_dump($_POST);

if (!isset($sigilosa)) {
	$erros[] .= "O campo Sigilosa deve ser preenchido corretamente!";
}

if (!isset($obj_reclamacao)) {
	$erros[] .= "O campo Objetivo deve ser preenchido corretamente!";
}

if (!isset($meio_resposta)) {
	$erros[] .= "O campo Meio deve ser preenchido corretamente!";
}

if (!isset($tipopessoa)) {
	$erros[] .= "O campo Você é deve ser preenchido corretamente!";
}

if ($tipopessoa == 'Aluno' && !isset($curso)) {
	$erros[] .= 'O campo Curso deve ser preenchido corretamente!';
}

if (empty($nome)) {
	$erros[] .= 'O campo Nome deve ser preenchido corretamente!';
}

if ($meio_resposta == "Email" && !isset($email)) {
	$erros[] .= 'O campo E-mail 1 deve ser preenchido corretamente!';

} else if ($meio_resposta == "Email" && isset( $email ) && !(filter_var($email, FILTER_VALIDATE_EMAIL) || 
	preg_match("/^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/", $email))) {

	$erros[] .= 'O campo E-mail 2 deve ser preenchido corretamente!';
}

if ($meio_resposta == "Telefone" && !isset($tel_cel)) {
	$erros[] .= 'O campo Tel Celular deve ser preenchido corretamente!';
} else if ($meio_resposta == "Telefone" && isset($tel_cel) && count($vt_telefone) < 14) {
	$erros[] .= 'O campo Tel Celular deve ser preenchido corretamente!';
}

/** VALIDAÇÂO PRESENCIAL */
if ($meio_resposta == "Presencial" && !isset($tel_cel)) {
    $erros[] .= "O campo Tel Celular deve ser preenchido corretamente!";

} else if ($meio_resposta == "Presencial" && isset($tel_cel) && count($vt_telefone) < 14) {
    $erros[] .= "O campo Tel Celular deve ser preenchido corretamente!";

} else if ($meio_resposta == "Presencial" && !isset($email)) {
    $erros[] .= "O campo E-mail 3 deve ser preenchido corretamente!";

} else if ($meio_resposta == "Presencial" && isset($email) && !(filter_var($email, FILTER_VALIDATE_EMAIL) || 
	preg_match("/^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/", $email))) {
    $erros[] .= "O campo E-mail 4 deve ser preenchido corretamente!";
}

if (!isset($mensagem) || count($vt_mensagem) < 10) {
    $erros[] .= "O campo para a manisfestação deve ser preenchido corretamente com no mínimo 10 digítos!";
}

if (count($erros) == 0) {

	$mail = new PHPMailer(true); // Passing `true` enables exceptions
	try {
		// Server Settings debug
		//$mail->SMTPDebug = 4;

	    // Set mailer to use SMTP
	    $mail->isSMTP();            

	    // SMTP do google ou algum outro                   
	    $mail->Host = SMTP;  

	    // Formato de caracteres
	    $mail->Charset = FORMATO;

	    // Specify main and backup SMTP servers
	    $mail->SMTPAuth = true;                  // Enable SMTP authentication
	    $mail->Username = EMAIL;                 // SMTP username
	    $mail->Password = PASS;                  // SMTP password
	    $mail->SMTPSecure = 'tls';               // Enable TLS encryption, `ssl` also accepted
	    $mail->Port = 587;                                     
	    $mail->setFrom($email, NAME);

	    // Destinatário
	    $mail->addAddress($email);

	    // Adicionar uma réplica
	    $mail->addReplyTo(EMAIL);

	    //Content
	    $mail->isHTML(true);                                  // Set email format to HTML

	    //Assunto da mensagem
	    $mail->Subject = 'Teste de envio de email';

	    //Corpo da mensagem
	    $mail->Body = '<b>'.$mensagem.' </b>';

	    //Attachments
	    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		
	    $mail->send();
	    //echo 'Message has been sent';
	} catch (Exception $e) {
	    //echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
	}

} else {
	//var_dump($erros);

}


