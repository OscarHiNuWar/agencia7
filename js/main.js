$(document).ready(function(){

	$(".boton").click(function(e){
		$( '#caja_opciones' ).toggle( 'show' );
		$('body').css("overflow","none");
		e.stopPropagation(); 
	});
		
});