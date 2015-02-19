jQuery(document).ready(function(){


	$(".numeros").click(function(){
		numero = $("#Pantalla").val()+$(this).html();
		
		$("#Pantalla").val(numero);
	});

	$("#AC").click(function(){
		$("#Pantalla").val("");
	});

	$("#DELETE").click(function(){
		var len = $("#Pantalla").val().length;
		var texto = $("#Pantalla").val().slice(0,len-1);
		$("#Pantalla").val(texto);
	});

	$("#igual").click(function(){
		var operacion = $("#Pantalla").val();
		if(operacion.length<=50){
			$("#Pantalla").val(eval(operacion));
		}else{
			$("#Pantalla").val("Cifra demasiado grande");
		}
		
	});
});



