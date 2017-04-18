
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
			$('#link-hide').hide();
			$('#login-alert').html("success").fadeIn();
			window.location="timestamp.html";
			return false;
			
		} else if (login==='' || pswd===''){
		    $('#login-alert').html("<strong>Warning!</strong> You left a field empty");
		    return false;
   
		} else {
			$('#login-alert').html("Something went wrong, try again");
			return false;
		}
				
    });
});

//TIMESTAMP
$(document).ready(function() {
	$('#now').click(function() {
	        var now = new Date();
	        var month = now.getMonth()+1;
	        var day = now.getDate();
	        var year = now.getUTCFullYear();

	       var value= $('#date').val(month + "/"  + day + "/"+ year);
	       dateString=now.toDateString();
	       console.log(dateString);
	       console.log("Type: " +typeof(dateString));
	       localStorage.setItem('enterDate1', dateString);


	 });
	//Check if jquery ui is loading
// 	if (jQuery.ui) {
//   		console.log("jquery ui success");
// }
	 $(".timestamp input").click(function() {
		var value = $( "#date" ).datepicker();
		console.log(value);
		value=value.toDateString;
		console.log("Value type: " + typeof(value));
		//nowDate=value;
		localStorage.setItem('enterDate2', value);
		
		

	});
	
	$('#btn2').click(function() {
		var time = $('option:selected').text();
		// nowTime=time;
		// console.log(nowTime);

		localStorage.setItem('enterTime', time);

		window.location="emotions.html";
	});

	

	$('.clear-button').click(function() {	
		$('form').trigger("reset");

	
	});
	
//EMOTIONS
	$('.emotion-buttons').on('click',function(){
     $(this).toggleClass('emotion-picked');
});
    $('.hide-emotion').hide();

    $('#add-emotion').click(function() {
        $('.hide-emotion').toggle();
        
        $('#adding').click(function() {
            var newEmotion = $('#new-emotion').val();
            $('#last-emotion').html('<button class="emotion-buttons" id="added" value="">'+newEmotion+'</button>');
            console.log(newEmotion);
            $('#last-emotion').val(newEmotion);
            console.log($('#last-emotion').val())
            $('#added').addClass('emotion-picked');
            emotionArray.push($('#last-emotion').val());

           
        });
        

    });

	$('#clear-button2').click(function() {	
		$('.emotion-picked').removeClass();
	
	});
	$('#emotion-submit').click(function() { 
        
        $(".emotion-picked").each(function() {
		    emotionArray.push($(this).val());
		});
		 
		console.log(emotionArray)
		localStorage.setItem('emotions', emotionArray);
		window.location="trigger.html"
    }); 

//TRIGGERS
    $('#trigger-add').hide();
    $('#trigger-submit').click(function() {
    	var loc= $('input[name=location]').val();
    	
        //BROKEN
        $('.environment-select').click(function() {
            var env=$('option:selected').val();//this could be a problem!
            if (env == "Other") {
                $('#trigger-add').show();
                env=('input[name=otherAdd]').val();
            } else if (env == "Select") {
                alert("Invalid Environment Option, please select from the choices below");
                env=" "
                window.location = "trigger.html";
            } else {

            }
        })
    	
    	
    	var comp = $('input[name=company]').val();
    	
    	var inter=$('input[name=internal]').val();
    	
    	var exter=$('input[name=external]').val();
    	
    	var noted = $('input[name=notes]').val();
    
    	
    	var event1= new Event(loc, env, comp, inter, exter, noted);
    	
    	eventArray.push(event1);
    	localStorage.setItem("events", JSON.stringify(eventArray));
    	window.location="view.html";
    	
    });
    

     //VIEW
     	if (localStorage.getItem('enterDate1') != ""){
     		$('#displayDay').html("<p> Date: "+ localStorage.getItem('enterDate1') + "<p>");
     	} else {
     		$('#displayDay').html("<p> Date: "+ localStorage.getItem('enterDate2') + "<p>");
     	}
     	
     	
    	$('#displayTime').html("<p> Time: "+ localStorage.getItem('enterTime') + "<p>");
    	//$('#displayEmotions').html("<p> You felt: " + localStorage.getItem('emotions') + "<p>")
    	
    	displayedObject=localStorage.getItem('events');
    	displayedObject=('displayedObject: ', JSON.parse(displayedObject));
    	console.log(displayedObject);
    	$('#displayTriggers').append("<p> Where I was "+ displayedObject[0].location + "</p>" + "<p> At:" + 
    		displayedObject[0].environment + "</p>" +"<p> With:" + displayedObject[0].company + "</p>" + "<p> Thoughts:" + displayedObject[0].internal + "</p>"
    		+ "<p> Other Factors:" + displayedObject[0].external + "</p>" +"<p> Notes:" + displayedObject[0].notes + "</p>");
    	
    	//dateDisplayer();
    	emotionDisplayer();
    	//eventDisplayer();

    	
    	//disploying functions - only one works
    	function emotionDisplayer() {
    		emotionDisplay = localStorage.getItem('emotions').split(',');
            $('#displayEmotions').html("<p> I felt: " + emotionDisplay[0] + "</p>")

            console.log(emotionDisplay);
            for(i=1; i<emotionDisplay.length; i++) {
                $('#displayEmotions').append("<p>" + emotionDisplay[i] + "</p>");
            }
            

    		
    		
    		
    	}
    	 function eventDisplayer() {
    		displayObject = localStorage.getItem('events');
    		displayObject=('displayObject: ', JSON.parse(displayObject));
    		for(var key in displayObject) {
    			$('#displayTriggers').html("<p> What Happened: "+ displayObject[key] + "<p>");
    		}
    	};

    	$("#empty-storage").click(function() {
    		localStorage.clear();
    		window.location="timestamp.html";
    	})
    	
    

});


// var xhr = new XMLHttpRequest();
// //"https://https://www.fitbit.com/oauth2/authorize/auth?response_type=code&client_id=2288Y5&redirect_uri=trigger.html&scope=photos&state=1234zyx"


// xhr.open("GET", "https://api.fitbit.com/1.2/user/-/sleep/date/2017-04-17.json", false);
// // Add your code below!
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);


//curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyV1JYNjgiLCJhdWQiOiIyMjg4WTUiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc2xlIiwiZXhwIjoxNDkzMDc3NTgxLCJpYXQiOjE0OTI0NzI4NTJ9.NHfYFbVV2Sj7RcG-ZfZhfWUUurjDTvc8ecrlY5bsmj4" https://api.fitbit.com/1/user/-/profile.json





		 
    	



 