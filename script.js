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

$('#btn1').click(function() {	
$.fn.noText = function() {/*use the jquery prototype technology to make a chainable clear field method*/
    if(this.is('input')){ /*check to c if you the element type is an input*/
        this.val('');/*clear the input field*/
    }return this;/*means it is chainable*/
};
$('input').noText();
});
});



 