<!doctype html>
<html lang="pt-br" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CORE CSS-->
    <link href="css/styles.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- CORE JS-->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script> 
    <!-- <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> --><!-- 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"> </script>-->
    <title>Ouvidoria - Unilavras</title>
</head>
<body>
<!-- START HEADER -->
<header id="header">
    <!-- start header nav-->
    <div class="navbar-fixed">
        <nav class="light-blue darken-4">
            <div class="titulo">
                <a href="http://www.unilavras.edu.br" class="brand-logo right">
                    <img src="img/logo.png" alt="Unilavras" class="responsive-img" width="60px" height="60px">
                </a>
                <h5><a href="index.php" target="_self">Ouvidoria - Unilavras</a></h5>

            </div>
        </nav>
    </div>
</header><!-- END HEADER -->

<!--/////////////////////////////////////CONTEÚDO/////////////////////////////////////////////-->

<div class="container" id="conteudo">

    <div id="formcontato" class="card grey lighten-5 z-depth-4">
        <div class="header-card">
            <div class="header-card card-content grey lighten-2 black-text center-align ">
                <div class="row">
                    <!-- <div class="col s1"><i class="small material-icons  grey-text lighten-1 icon-header">hearing</i></div> -->
                    <div class="col s11"> <h5>Manifeste sua demanda</h5></div>
                </div>
            </div>
        </div>
        <div class="card-content">
            <form id="form-ouvidoria" class="form-ouvidoria" method="" action="">
                <div class="row">
                    <div class="col 12 red-text">* Campos obrigatórios</div>
                    <span id="camposErro"></span>
                </div>
                <div class="row">
                    <div class="col s12 sigilosa waves-effect waves-light" id="divSigilosa" >
                        <span>* Sua demanda é sigilosa:</span>
                        <input class="with-gap" name="sigilosa" type="radio" id="sigilosa1" value="Sim" data-target=""/>
                        <label for="sigilosa1">Sim<label>
                        <input class="with-gap" name="sigilosa" type="radio" id="sigilosa2" value="Não"/>
                        <label for="sigilosa2">Não</label> 
                    </div>
                </div>

                 <!-- <button class="waves-effect waves-light btn modal-trigger" data-target="modal1">Modal</button> -->

                  <!-- Modal Structure -->
                  <div id="modal1" class="modal">
                    <div class="modal-content">
                      <h4>Aviso</h4>
                          <div class="row modal-form-row">
                            <div class="input-field col s12">
                              <p align="justify">A solicitação de Sigilo garante a você que todas as informações apresentadas serão tratadas, em todo o processo, no mais absoluto sigilo em cumprimento ao disposto no Art. 6º do Regimento da Ouvidoria do UNILAVRAS. Em nenhum momento você será identificado junto aos setores institucionais. O preenchimento do campo nome, telefone e e-mail visa garantir a você uma resposta à questões apresentadas à Ouvidoria e um melhor acompanhamento do processo. Em hipótese alguma serão utilizadas estas informações na análise da demanda.</p>
                            </div>
                          </div>
                          <div class="modal-footer">
                              <a class=" modal-action modal-close waves-effect waves-green btn-flat">Fechar</a>
                          </div>           
                    </div>
                  </div>

                <!-- <div class="row">
                    <div class="col s12 aviso-sigiloso red-text" id="aviso-sigiloso">
                        <p>A solicitação de Sigilo garante a você que todas as informações apresentadas serão tratadas, em todo o processo, no mais absoluto sigilo em cumprimento ao disposto no Art. 6º do Regimento da Ouvidoria do UNILAVRAS. Em nenhum momento você será identificado junto aos setores institucionais. O preenchimento do campo nome, telefone e e-mail visa garantir a você uma resposta à questões apresentadas à Ouvidoria e um melhor acompanhamento do processo. Em hipótese alguma serão utilizadas estas informações na análise da demanda.</p>
                    </div>
                </div> -->

                <div class="row">
                    <div class="input-field col s4 obj_reclamacao">
                        <select id="obj_reclamacao" name="obj_reclamacao">
                            <option value="" disabled="disabled" selected></option>
                            <option value="Elogio">Elogio</option>
                            <option value="Reclamação">Reclamação</option>
                            <option value="Denúncia">Denúncia</option>
                            <option value="Dúvida">Dúvida</option>
                            <option value="Sugestão">Sugestão</option>
                        </select>
                        <label>* Qual o objetivo:</label>
                    </div>
                        <!-- <div class="col s6 m3 l2 obj_reclamacao">

                            <span>* Qual o objetivo:</span>
                            <p>
                                <input class="with-gap" name="obj_reclamacao" type="radio" id="obj_reclamacao1" value="Elogio" />
                                <label for="obj_reclamacao1">Elogio<label>
                            </p>
                            <p>
                                <input class="with-gap" name="obj_reclamacao" type="radio" id="obj_reclamacao2" value="Reclamação"/>
                                <label for="obj_reclamacao2">Reclamação<label>
                            </p>
                            <p>
                                <input class="with-gap" name="obj_reclamacao" type="radio" id="obj_reclamacao3" value="Denúncia"/>
                                <label for="obj_reclamacao3">Denúncia</label>
                            </p>
                            <p>
                                <input class="with-gap" name="obj_reclamacao" type="radio" id="obj_reclamacao4" value="Dúvida"/>
                                <label for="obj_reclamacao4">Dúvida</label>
                            </p>
                            <input class="with-gap" name="obj_reclamacao" type="radio" id="obj_reclamacao5" value="Sugestão"/>
                            <label for="obj_reclamacao5">Sugestão</label>

                    </div>-->

                    <!-- <div class="col s5 m3 l2 resposta">

                            <span>* Deseja receber uma resposta:</span>
                            <p>
                                <input class="with-gap" name="resposta" type="radio" id="resposta1" value="Sim" />
                                <label for="resposta1">Sim</label>
                            </p>
                            <input class="with-gap" name="resposta" type="radio" id="resposta2" value="Não" />
                            <label for="resposta2">Não</label>

                    </div> -->

                    <div class="input-field col s4 meio_resposta">
                        <select id="meio" name="meio_resposta">
                            <option value="" disabled="disabled" selected></option>
                            <option value="Email">Email</option>
                            <option value="Telefone">Telefone</option>
                            <option value="Presencial">Presencial</option>
                        </select>
                        <label>* Qual o meio:</label>
                    </div>

                    <!-- <div class="col s6 m2 l2 meio_resposta" id="meio">

                            <span>Qual o meio:</span>
                            <p>
                                <input class="with-gap" name="meio_resposta" type="radio" id="meio_resposta1" value="Email"/>
                                <label for="meio_resposta1">E-mail</label>
                            </p>
                            <p>
                                <input class="with-gap" name="meio_resposta" type="radio" id="meio_resposta2" value="Telefone"/>
                                <label for="meio_resposta2">Telefone</label>
                            </p>
                            <input class="with-gap" name="meio_resposta" type="radio" id="meio_resposta3" value="Presencial"/>
                            <label for="meio_resposta3">Presencial<label>

                    </div> -->

                    <!-- <div class="col s12 m3 tipopessoa">

                            <span>* Você é:</span>
                            <p>
                                <input class="with-gap" name="tipopessoa" type="radio" id="tipopessoa1" value="Professor"/>
                                <label for="tipopessoa1">Professor<label>
                            </p>
                            <p>
                                <input class="with-gap" name="tipopessoa" type="radio" id="tipopessoa2" value="Téc-adm"/>
                                <label for="tipopessoa2">Téc-adm</label>
                            </p>
                            <p>
                                <input class="with-gap" name="tipopessoa" type="radio" id="tipopessoa3" value="Aluno"/>
                                <label for="tipopessoa3">Aluno<label>
                            </p>
                            <input class="with-gap" name="tipopessoa" type="radio" id="tipopessoa4" value="Externo"/>
                            <label for="tipopessoa4">Externo</label>

                    </div> -->

                    <div class="input-field col s4 tipopessoa">
                        <select id="tipopessoa" name="tipopessoa">
                            <option value="" disabled="disabled" selected></option>
                            <option value="Professor">Professor</option>
                            <option value="Técnico Administrativo">Técnico Administrativo</option>
                            <option value="Aluno">Aluno</option>
                            <option value="Externo">Externo</option>
                        </select>
                        <label>* Você é:</label>
                    </div>

                </div>

                <!-- <div class="row">

                </div> -->

                <div class="row" id="mostracurso">
                    <div class="input-field col s12 curso">
                        <input id="curso" type="text" class="validate" name="curso" maxlength="100">
                        <label for="curso">Curso</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12 nome">
                        <input id="nome" type="text" name="nome" class="validate" maxlength="100">
                        <label for="nome">Nome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m4 l4">
                        <input id="tel_fixo" type="text" name="tel_fixo" class="validate" maxlength="16">
                        <label for="tel_fixo">Tel Fixo</label>
                    </div>

                    <div class="input-field col s6 m4 l4 telcelular">
                        <input id="tel_cel" type="text" name="tel_cel" class="validate" maxlength="16">
                        <label for="tel_cel">Tel Celular</label>
                    </div>

                    <div class="input-field col m4 l4 email">
                        <input id="email" type="text" name="email" class="validate" maxlength="50">
                        <label for="email">E-mail</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12 m6 l6">
                        <input id="endereco" type="text" name="endereco" class="validate" maxlength="200">
                        <label for="endereco">Endereço</label>
                    </div>

                    <div class="input-field col m2 l2">
                        <input id="numero" type="text" name="numero" class="validate" maxlength="6">
                        <label for="numero">nº</label>
                    </div>

                    <div class="input-field col s12 m6 l6">
                        <input id="bairro" type="text" name="bairro" class="validate" maxlength="100">
                        <label for="bairro">Bairro</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12 m6 l6">
                        <input id="cidade" type="text" name="cidade" class="validate" maxlength="100">
                        <label for="cidade">Cidade</label>
                    </div>

                    <div class="input-field col">
                        <input id="cep" type="text" name="cep" class="validate" maxlength="10">
                        <label for="cep">Cep</label>
                    </div>

                    <div class="input-field col s5">
                        <select id="estado" name="estado">
                            <option value="" disabled="disabled" selected></option>
                            <option value="MG">Minas Gerais</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <label>Estado</label>
                    </div>
                </div>

                <div class="row">

                        <div class="row">
                            <div class="input-field col s12 mensagem">
                                <i class="material-icons prefix  grey-text lighten-1">mode_edit</i>
                                <textarea id="mensagem" class="materialize-textarea" name="mensagem"></textarea>
                                <label for="mensagem">* Conforme assinalado acima, descreva o motivo de seu contato:</label>
                            </div>
                        </div>

                </div>
            </div>
            <div class="row">
                <div class="col s12 center-align btnenviar">
                    <button class="btn waves-effect waves-light light-blue darken-4 btn-block" type="submit" name="btnEnviar" id="btnEnviar">Enviar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
       </form>

    </div>
    <!-- modal com aviso de campos obrigatórios-->
    <div id="modal">
     <!-- Modal Structure -->
        <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
            </div>
        </div>
    </div>

    <!-- aviso de envio com sucesso-->
    <div id="retornopositivo">
        <div class="card grey lighten-5 z-depth-4">
            <div class="header-card">
                <div class="header-card card-content teal lighten-2 white-text center-align ">
                    <div class="row">
                        <div class="col s1"><i class="small material-icons  white-text icon-header">done</i></div>
                        <div class="col s11"> <h5 class="center-align">Manifestação enviada com sucesso!</h5></div>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <p class="center-align retornopositivo">Obrigado por procurar a Ouvidoria, sua manisfetação foi muito importante!</p>
            </div>
            <div class="card-content">
                <div class="row">
                    <div class="col s12 center-align btnenviar">
                        <a href="index.php" target="_self" class="btn waves-effect waves-light light-blue darken-4 btn-block" type="submit" name="btnEnviar" id="btnEnviar">Nova manifestação
                            <i class="material-icons right">send</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>


    <!-- aviso de erros-->
    <div id="retornonegativo">
        <div class="card lighten-5 z-depth-4">
            <div class="header-card">
                <div class="header-card card-content red lighten-1 white-text center-align ">
                    <div class="row">
                        <div class="col s1"><i class="small material-icons white-text icon-header">warning</i></div>
                        <div class="col s11"> <h5 class="center-align">Ocorreu um erro!</h5></div>
                    </div>
                </div>
            </div>
            <div class="card-content" id="retornonegativoMensagem">

            </div>
        </div>
    </div>
</div>
<!--///////////////////////////////FIM CONTEÚDO///////////////////////////////////////////////////-->

<!--START FOOTER -->

<footer class="page-footer light-blue darken-4 grey-text text-lighten-2 footer">
    <div class="center-align">
        <span>OUVIDORIA - Tel.: (35) 3694-8155</span>
    </div>

    <div class="footer-copyright">
        <span class="copyright">Copyright © 2018 - Unilavras - Fundação Educacional de Lavras</span>
    </div>
</footer><!--END FOOTER -->
</body>
</html>