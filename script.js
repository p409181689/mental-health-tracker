// var Event = function(date, time, emotions, location, environment, company, internal, external, notes) {
// 	this.date=date;
// 	this.time=time;
// 	this.emotions=emotions;
// 	this.location=location;
// 	this.environment=environment;
// 	this.company=company;
// 	this.internal = internal;
// 	this.external=external;
// 	this.notes=notes;
// }
var nowTime;
var nowDate;
var nowEmotions=[];
// var nowLoc;
// var nowEnv;
// var nowComp;
// var nowInternal;
// var nowExternal;
// var nowNotes;
var eventArray=[];

var Event = function(location, environment, company, internal, external, notes) {
	this.time=time;
	this.location=location;
	this.environment=environment;
	this.company=company;
	this.internal = internal;
	this.external=external;
	this.notes=notes;
}
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
	       nowDate=value;

	 });
	 $(".timestamp input").click(function() {
		var value = $( "#date" ).datepicker();
		nowDate=value;
		

	});
	// $('#date input').blur(function() {
	// 	var stringval = $("date").val();
	// 		var testdate;

	// 		try {
	// 		  testdate = $.datepicker.parseDate('mm/dd/yy', stringval);
	// 		             // Notice 'yy' indicates a 4-digit year value
	// 		} catch (e)
	// 		{
	// 		 alert(stringval + ' is not valid.  Format must be MM/DD/YYYY ' +
	// 		       'and the date value must be valid for the calendar.') ;
	// 		}
	// 	});
	
	$('select').click(function() {
		var time = $('option:selected').text();
		nowTime= time;
		
	});

	$('.clear-button').click(function() {	
		$('form').trigger("reset");
	
	});
	

	$('.emotion-buttons').on('click',function(){
     $(this).addClass('emotion-picked');
});

	$('.clear-button2').click(function() {	
		$('.emotion-buttons').trigger("reset");
	
	});
	$('#emotion-submit').click(function() { 
        var emotionArray=[];
        $(".emotion-picked").each(function() {
		    emotionArray.push($(this).val());
		});
		alert(emotionArray); 
		nowEmotions= emotionArray;
    }); 

    $('#trigger-submit').click(function() {
    	var loc= $('input[name=location]').val();
    	//nowLoc=loc;
    	//var loc=$(this).val();
    	//alert(loc);
    	var env=$('option:selected').val();//this could be a problem!
    	//alert(env);
    	//nowEnv=env;
    	var comp = $('input[name=company]').val();
    	nowComp=comp;
    	//alert(comp);
    	var inter=$('input[name=internal]').val();
    	//nowInternal=inter;
    	//alert(inter);
    	var exter=$('input[name=external]').val();
    	//nowExternal=exter;
    	//alert(exter);
    	var noted = $('input[name=notes]').val();
    	//nowNotes=noted;
    	//alert(noted);
    	
    	var event1= new Event(nowDate, nowTime,nowEmotions, loc, env, comp, inter, exter, noted);
    	eventArray.push(event1);
    	
    	//console.log(eventArray);
    	
    	//var event1= new Event(value, time, emotionArray, loc, env, comp, inter, exter, noted);

    })

});





 