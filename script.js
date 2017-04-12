$(document).ready(function(){
    $("#login").click(function(){
        var values = [];
		$("input[name='text']").each(function() {
		    values.push($(this).val());
		});
		var userName = "Maryla";
 		var password= "Rodowicz1";
		if (values[0]==userName && values[1]==password) {
			html("<a href=timestamp.html");
		}
		else {
			alert("Try again");
		}

		
    });
});


//var article_id = $(this).closest('form').find('input[name="article_id"]').val();

// $("button").on("click", function() {
// 	var userInputName=$("#username").val();
// 	var userInputPswd=$("#password").val();
// 	console.log(userInputName);
// 	console.log(userInputPswd);
// 	var userName = "Maryla";
// 		var password= "Rodowicz1";

// 	if(userInputName==userName && userInputPswd== password) {
// 		console.log("ok!")
// 	} else {
// 		console.log("oops!")
// 	}

// })


// $( "#username" ).on( "blur", function() {
//   $( this ).val(function( i, val ) {
//     console.log(val);
//   });
//   console.log(val);
// });
