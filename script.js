$(document).ready(function(){
    $("#login").click(function(){
        var values = [];
		$("input").each(function() {
		    values.push($(this).val());
		});
		var userName = "Maryla";
 		var password= "Rodowicz1";
		if (values[0]==userName && values[1]==password) {
			alert("success");
			window.location.href='timestamp.html';
			
		}
		else {
			alert("Something went wrong, try again");
		}

		
    });
});
$(document).ready(function() {
	$('#now').click(function() {
	        var now = new Date();
	        var month = now.getMonth()+1;
	        var day = now.getDate();
	        var year = now.getUTCFullYear();

	       var value= $('#date').val(month + "/"  + day + "/"+ year);
	       return value;

	 });
	$('input').click(function() {
		var value = $( "#date" ).datepicker();
		//return value;
		

	});
	$('input').blur(function() {
		var stringval = $("date").val();
			var testdate;

			try {
			  testdate = $.datepicker.parseDate('mm/dd/yy', stringval);
			             // Notice 'yy' indicates a 4-digit year value
			} catch (e)
			{
			 alert(stringval + ' is not valid.  Format must be MM/DD/YYYY ' +
			       'and the date value must be valid for the calendar.') ;
			}
		});
	
	$('select').click(function() {
		var time = $('option:selected').text();
		return time;
		
	});

	$('#btn1').click(function() {	
		$('form').trigger("reset");

	
	});

});



 