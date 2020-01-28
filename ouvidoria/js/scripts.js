$(document).ready(function() {
    $("select").material_select(), 
    $("#meio").hide(), 
    $("#aviso-sigiloso").hide(),
    $("#mostracurso").hide(), 
    $("#retornopositivo").hide(), 
    $("#retornonegativo").hide(), 
    $("#tel_fixo").mask("(99)9999-9999"), 
    $("#tel_cel").mask("(99)99999-9999"), 
    $("#cep").mask("99.999-999"), 
    //$("#sigilosa1").prop('checked', true),
    //$("#sigilosa1").leanModal(),

    $("input:radio[name=resposta]").click(function() {
        var e = $(this).attr("value");
        "Sim" == e ? $("#meio").show("slideUp") : $("#meio").hide()
    }), 
    
    $("#tipopessoa").change(function() {
        var e = $(this).val();
        "Aluno" == e ? $("#mostracurso").show("slideUp") : ($("#mostracurso").hide(), $("#curso").val(""))
    }),

    $('input:radio[name="sigilosa"]').click(function(event) {
        var e = $(this).val();
        console.log('clicou!');
        if (e == "Sim") {
            //$("#sigilosa1").leanModal();
            $("#modal1").modal();
            $("#modal1").modal('open');
        }
    }),
    
    $("#btnEnviar").click(function(e) {
        e.preventDefault(), 
        $("#form-ouvidoria div").removeClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !0);
        //var t = $("#form-ouvidoria").serialize();
        
        /** declaração de variáveis */
        var erro           = "";
        var sigilosa       = $("input[name='sigilosa']:checked").val();
        var mensagem       = $("#mensagem").val();
        var obj_reclamacao = $("#obj_reclamacao").val();
        var meio           = $("#meio").val();
        var tipopessoa     = $("#tipopessoa").val();
        var nome           = $("#nome").val();
        var curso          = $("#curso").val();
        var email          = $("#email").val();
        var tel_cel        = $("#tel_cel").val();

        console.log('sigilosa'+sigilosa);
        
        if (!sigilosa) {
            $(".sigilosa").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Sigilosa deve ser preenchido corretamente!\n";
        }

        if (!obj_reclamacao) {
            $(".obj_reclamacao").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Objetivo deve ser preenchido corretamente!\n";
        }

        if (!meio) {
            $(".meio_resposta").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Meio deve ser preenchido corretamente!\n";
        }

        if (!tipopessoa) {
            $(".tipopessoa").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Você é deve ser preenchido corretamente!\n";
        }

        /** VALIDAÇÃO CURSO */
        if (tipopessoa == "Aluno" && curso == "") {
            $(".curso").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Curso deve ser preenchido corretamente!\n";
        }

        if (nome == "") {
            $(".nome").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Nome deve ser preenchido corretamente!\n";
        }

        /** VALIDAÇÃO EMAIL */
        if (meio == "Email" && email == "") {
            $(".email").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo E-mail deve ser preenchido corretamente!\n";

        } else if (meio == "Email" && email != "" && !(email.indexOf("@", 0) != -1 || email.indexOf(".", 0) != -1)) {
            $(".email").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo E-mail deve ser preenchido corretamente!\n";
        }
        
        /** VALIDAÇÃO TELEFONE */
        if (meio == "Telefone" && tel_cel == "") {
            $(".telcelular").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Tel Celular deve ser preenchido corretamente!\n";

        } else if (meio == "Telefone" && tel_cel != "" && tel_cel.length < 14) {
            $(".telcelular").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Tel Celular deve ser preenchido corretamente!\n";
        }

        /** VALIDAÇÂO PRESENCIAL */
        if (meio == "Presencial" && tel_cel == "") {
            $(".telcelular").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Tel Celular deve ser preenchido corretamente!\n";

        } else if (meio == "Presencial" && tel_cel != "" && tel_cel.length < 14) {
            $(".telcelular").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo Tel Celular deve ser preenchido corretamente!\n";

        } else if (meio == "Presencial" && email == "") {
            $(".email").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo E-mail deve ser preenchido corretamente!\n";

        } else if (meio == "Presencial" && email != "" && !(email.indexOf("@", 0) != -1 || email.indexOf(".", 0) != -1)) {
            $(".email").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo E-mail deve ser preenchido corretamente!\n";
        }
        
        /** VALIDAÇÃO MENSAGEM */
        if (mensagem == "" || mensagem.length < 10) {
            $(".mensagem").addClass("camposObrigatorios");
            $("#btnEnviar").attr("disabled", !1);
            erro += "O campo para a manisfestação deve ser preenchido corretamente com no mínimo 10 digítos!\n";
        }

        if (erro != "") {
            sweetAlert("Erros:", erro, "error");
            return false;
        }

        void $.ajax({
            url: "inseri.php",
            type: "post",
            /*data: {
                dadosform: t
            },*/
            //dataType: "json",
            data: { sigilosa:sigilosa, mensagem:mensagem, obj_reclamacao:obj_reclamacao, meio: meio, tipopessoa: tipopessoa, nome : nome curso:curso, email :email, tel_cel:tel_cel }, 
            beforeSend: function() {
                swal({
                    title: "Enviando demanda...!",
                    text: "<div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>",
                    showConfirmButton: !1,
                    html: !0,
                    closeOnConfirm: !1
                })
            },
            success: function(e) {
                alert(e);
                swal.close();
                var t = 0;
                return 0 == e.sucesso && "ERRO CAMPO:" == e.tipo && ($.each(e.campos, function(e, t) {
                    0 == t && $("." + e).addClass("camposObrigatorios")
                }), t = 1), t > 0 ? ($("#btnEnviar").attr("disabled", !1), !1) : 0 != e.sucesso || "ERRO DE BANCO:" != e.tipo && "ERRO DE EMAIL:" != e.tipo ? ($("#form-ouvidoria").each(function() {
                    this.reset()
                }), $("#formcontato").hide(), 
                $("#retornopositivo").show(), void 0) : ($("#retornonegativoMensagem").html('<p class="center-align"><span class="red lighten-1 white-text">' + e.tipo + "</span> " + e.mensagemErro + "</p>"), $("#retornonegativo").show(), $("#formcontato").hide(), !1)
            },
            error: function(e, t) {
                alert('erro de json:'+t)
            }
        }) 
    })
});