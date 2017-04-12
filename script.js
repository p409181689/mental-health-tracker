$(document).ready(function(){
    $("#login").click(function(){
        var values = [];
		$("input").each(function() {
		    values.push($(this).val());
		});
		var userName = "Maryla";
 		var password= "Rodowicz1";
		if (values[0]==userName && values[1]==password) {
			//alert(values);
			//window.location.href="timestamp.html";
			onclick="location.href='timestamp.html';"
		}
		else {
			alert("Try again");
		}

		
    });
});
$(document).ready(function() {
	$('#now').click(function() {
	       var now = new Date();
	       $('#date').val(now.toDateString());
	 });

	$('select').click(function() {
		var time = $('option:selected').text();
		
	});

	$('#btn1').click(function() {	
		$('form').trigger("reset");

	
	});
});
$( "#date" ).datepicker();


 