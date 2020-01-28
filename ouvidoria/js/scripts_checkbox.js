$(document).ready(function() {
    $("select").material_select(),  
    $("#aviso-sigiloso").hide(),
    $("#mostracurso").hide(), 
    $("#retornopositivo").hide(), 
    $("#retornonegativo").hide(), 
    $("#tel_fixo").mask("(99)9999-9999"), 
    $("#tel_cel").mask("(99)99999-9999"), 
    $("#cep").mask("99.999-999"), 

    $('input:radio[name="sigilosa"]').click(function() {
        var e = $(this).val();
        console.log('clicou!');
        "Sim" == e ? $("#aviso-sigiloso").show("slideUp") : ($("#aviso-sigiloso").hide(), $("#aviso_sigiloso").val(""))
    }),

    $('input:radio[name="tipopessoa"]').click(function() {
        var e = $(this).val();
        "Aluno" == e ? $("#mostracurso").show("slideUp") : ($("#mostracurso").hide(), $("#curso").val(""))
    }), 

    $("#btnEnviar").click(function(e) {
        e.preventDefault(), $("#form-ouvidoria div").removeClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !0);
        var t = $("#form-ouvidoria").serialize();
        //console.log("Presencial" == $("input[name='meio_resposta']:checked").val() && "" != $("#email").val() && !($("#email").val().indexOf("@", 0) != -1 && $("#email").val().indexOf(".", 0) != -1));
        //console.log("" == $("#nome").val());
        
        return $("input[name='sigilosa']:checked").val() ? $("input[name='obj_reclamacao']:checked").val() ? $("input[name='meio_resposta']:checked").val() ? $("input[name='tipopessoa']:checked").val() ? 

        /** VALIDAÇÃO CURSO */
        "Aluno" == $("input[name='tipopessoa']:checked").val() && "" == $("#curso").val() ? (sweetAlert("Curso:", "O campo curso deve ser preenchido corretamente!", "error"), 
            $(".curso").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 

        /** VALIDAÇÃO NOME */
        "" == $("#nome").val() ? (sweetAlert("Nome:", "O campo nome deve ser preenchido corretamente!", "error"), $(".nome").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 

        /** VALIDAÇÃO EMAIL */
        "Email" == $("input[name='meio_resposta']:checked").val() && "" == $("#email").val() ? (sweetAlert("E-mail:", "O campo E-mail deve ser preenchido corretamente!", "error"), $(".email").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        "Email" != $("input[name='meio_resposta']:checked").val() || "" == $("#email").val() || $("#email").val().indexOf("@", 0) != -1 && $("#email").val().indexOf(".", 0) != -1 ? 
        
        /** VALIDAÇÃO TELEFONE */
        "Telefone" == $("input[name='meio_resposta']:checked").val() && "" == $("#tel_cel").val() ? (sweetAlert("Tel Celular:", "O campo Tel Celular deve ser preenchido corretamente!", "error"), $(".telcelular").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        "Telefone" == $("input[name='meio_resposta']:checked").val() && "" != $("#tel_cel").val() && $("#tel_cel").val().length < 14 ? (sweetAlert("Tel Celular:", "O campo Tel Celular deve ser preenchido corretamente!", "error"), $(".telcelular").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        
        /** VALIDAÇÂO PRESENCIAL */
        "Presencial" == $("input[name='meio_resposta']:checked").val() && "" == $("#tel_cel").val() ? (sweetAlert("Tel Celular:", "O campo 1 Tel Celular deve ser preenchido corretamente!", "error"), $(".telcelular").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        "Presencial" == $("input[name='meio_resposta']:checked").val() && "" != $("#tel_cel").val() && $("#tel_cel").val().length < 14 ? (sweetAlert("Tel Celular:", "O campo 2 Tel Celular deve ser preenchido corretamente!", "error"), $(".telcelular").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) :
        "Presencial" == $("input[name='meio_resposta']:checked").val() && "" == $("#email").val() ? (sweetAlert("E-mail:", "O campo E-mail 1 deve ser preenchido corretamente!", "error"), $(".email").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) :
        "Presencial" == $("input[name='meio_resposta']:checked").val() && "" != $("#email").val() && !($("#email").val().indexOf("@", 0) != -1 && $("#email").val().indexOf(".", 0) != -1) ? (sweetAlert("E-mail:", "O campo E-mail 2 deve ser preenchido corretamente!", "error"), $(".email").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) :
        
        /* VALIDAÇÃO MENSAGEM */
        "" == $("#mensagem").val() || $("#mensagem").val().length < 10 ? (sweetAlert("Manifestaçao:", "O campo para manisfestação deve ser preenchido corretamente com no mínimo 10 dígitos!", "error"), $(".mensagem").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        
        void $.ajax({
            url: "inseri.php",
            type: "post",
            data: {
                dadosform: t
            },
            dataType: "json",
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
                swal.close();
                var t = 0;
                return 0 == e.sucesso && "ERRO CAMPO:" == e.tipo && ($.each(e.campos, function(e, t) {
                    0 == t && $("." + e).addClass("camposObrigatorios")
                }), t = 1), t > 0 ? ($("#btnEnviar").attr("disabled", !1), !1) : 0 != e.sucesso || "ERRO DE BANCO:" != e.tipo && "ERRO DE EMAIL:" != e.tipo ? ($("#form-ouvidoria").each(function() {
                    this.reset()
                }), $("#formcontato").hide(), $("#retornopositivo").show(), void 0) : ($("#retornonegativoMensagem").html('<p class="center-align"><span class="red lighten-1 white-text">' + e.tipo + "</span> " + e.mensagemErro + "</p>"), $("#retornonegativo").show(), $("#formcontato").hide(), !1)
            },
            error: function(e, t) {
                alert(t)
            }
        }) : (sweetAlert("E-mail:", "O campo E-mail deve ser preenchido corretamente!", "error"), 
        $(".email").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        (sweetAlert("Você é:", "O campo Você é deve ser preenchido corretamente!", "error"), 
        $(".tipopessoa").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        (sweetAlert("Meio Resposta:", "O campo Meio Resposta deve ser preenchido corretamente!", "error"), 
        $(".meio_resposta").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        //(sweetAlert("Resposta:", "O campo Resposta deve ser preenchido corretamente!", "error"), 
        //$(".resposta").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        (sweetAlert("Objetivo:", "O campo Objetivo deve ser preenchido corretamente!", "error"), 
        $(".obj_reclamacao").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1) : 
        (sweetAlert("Sigilosa:", "O campo demanda sigilosa deve ser preenchido corretamente!", "error"), 
        $(".sigilosa").addClass("camposObrigatorios"), $("#btnEnviar").attr("disabled", !1), !1)
    })
});