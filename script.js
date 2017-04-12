$( "#userName" ).on( "blur", function() {
  $( this ).val(function( i, name ) {
    userInputName=name;
  });
});
 	var userName = "Maryla";
	var password= "Rodowicz1";

if(userInputName==userName && userInputPswd== password) {
	console.log("ok!")
} else {
	console.log("oops!")
}





