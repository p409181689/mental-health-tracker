
var nowTime;
var nowDate;
var nowEmotions=[];
var emotionArray=[];
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
       var login=$("#username").val();
       var pswd=$("#password").val();
		
		var userName = "Maryla";
 		var password= "Rodowicz1";

		if (login==userName && pswd==password) {
			$('#login-alert').html("success").fadeIn();
				window.location="timestamp.html"
			
		} else if (login==='' || pswd===''){
		    $('#login-alert').html("<strong>Warning!</strong> You left a field empty");
		    $('#login-alert').fadeIn().delay('slow').fadeOut();
		   
   
		}else {
			$('#login-alert').html("Something went wrong, try again");
			$('#login-alert').fadeIn().delay('slow').fadeOut();
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
	
	$('#btn2').click(function() {
		var time = $('option:selected').text();
		nowTime=time;
		console.log(nowTime);
		localStorage.setItem('enterTime', time);

		window.location="emotions.html";
	});

	

	$('.clear-button').click(function() {	
		$('form').trigger("reset");
	
	});
	

	$('.emotion-buttons').on('click',function(){
     $(this).toggleClass('emotion-picked');
});

	$('.clear-button2').click(function() {	
		$('.emotion-picked').removeClass();
	
	});
	$('#emotion-submit').click(function() { 
        
        $(".emotion-picked").each(function() {
		    emotionArray.push($(this).val());
		});
		alert(emotionArray); 
		//nowEmotions= emotionArray;
		localStorage.setItem('emotions', emotionArray);
		window.location="trigger.html"
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
    	alert(event1)
    	eventArray.push(event1);
    	localStorage.setItem("events", eventArray);
    	window.location="view.html";
    	
    });
    
     $("#next").click(function() {
     	location.assign("view.html");
     });
     	$('#displayDay').html("<p> Date: "+ localStorage.getItem('enterDate') + "<p>");
    	$('#displayTime').html("<p> Time: "+ localStorage.getItem('enterTime') + "<p>");
    	//$('#displayEmotions').html("<p> You felt: " + localStorage.getItem('emotions') + "<p>")
    	//$('#displayTriggers').html("<p> What Happened: "+ localStorage.getItem('events') + "<p>");
    	emotionDisplayer();
    	eventDisplayer();
    	function emotionDisplayer() {
    		emotionDisplay = localStorage.getItem('emotions').split(',');
    		//emotionDisplay=emotionDisplay.split(',');
    		console.log(emotionDisplay);
    		for(key in emotionDisplay) {
    			$('#displayEmotions').html("<p> You felt: " + emotionDisplay[key] + "<p>");
    		}
    	}
    	 function eventDisplayer() {
    		displayObject = localStorage.getItem('events');
    		console.log(displayObject);
    		for(key in displayObject) {
    			$('#displayTriggers').html("<p> What Happened: "+ displayObject[key] + "<p>");
    		}
    	};
    	
    

});



		 
    	



 