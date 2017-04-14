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
// var nowLoc;
// var nowEnv;
// var nowComp;
// var nowInternal;
// var nowExternal;
// var nowNotes;
var nowTime;
var nowDate;
var nowEmotions=[];

var eventArray=[];

var Event = function(location, environment, company, internal, external, notes) {
	
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
			
		} else if (values[0]=='' || values[1]===''){
		    $('#login-alert').html("<strong>Warning!</strong> You left a field empty");
		    $('#login-alert').fadeIn().delay(900).fadeOut();
		    //return false;
   
		   }else {
					$('#login-alert').html("Something went wrong, try again");
					$('#login-alert').fadeIn().delay(900).fadeOut();
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
	       localStorage.setItem('enterDate', now);


	 });
	 $(".timestamp input").click(function() {
		var value = $( "#date" ).datepicker();
		nowDate=value;
		localStorage.setItem('enterDate', value);
		
		

	});
	// $('#btn2').click(function() {

	// })
	$('#btn2').click(function() {
		var time = $('option:selected').text();
		nowTime=time;
		console.log(nowTime);
		localStorage.setItem('enterTime', time);
		
	console.log(localStorage.getItem('enterTime') + localStorage.getItem('enterDate') );
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
    	alert(env);
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
    	
    	var event1= new Event(loc, env, comp, inter, exter, noted);
    	//alert(event1)
    	//eventArray.push(event1);
    	
    	// $('#view-location').append("<p>" + "You were at" +event1.location+"</p>");
    	// $('input[name=location]').hide();
    	//location.assign("view.html");
    	
    });
    
     $("#next").click(function() {
     	location.assign("view.html");
     });
     	$('#displayDay').html("<p>"+ localStorage.getItem('enterDate') + "<p>");
    	$('#displayTime').html("<p>"+ localStorage.getItem('enterTime') + "<p>");
    	
    	
    

});



		 
    	



 