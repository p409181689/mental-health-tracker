
var nowTime;
var nowDate;
var nowEmotions=[];
var emotionArray=[];
var eventArray=[];
var dayArray=[];
var env;


var Event = function(location, environment, company, internal, external, notes) {
	
	this.location=location;
	this.environment=environment;
	this.company=company;
	this.internal = internal;
	this.external=external;
	this.notes=notes;
}
$(document).ready(function(){
    $('.mainbox').css({ opacity: 0.95 });
    $('.inputText').removeClass('mainbox');
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
	   
	       localStorage.setItem('enterDate1', dateString);


	 });
	
	 $(".timestamp input").click(function() {
		var value = $( "#date" ).datepicker();
		console.log(value);
		value=value.toDateString;
		console.log("Value type: " + typeof(value));
		//nowDate=value;
		localStorage.setItem('enterDate1', value);
		
		

	});
	
	$('#btn2').click(function() {
		var time = $('option:selected').text();
		// nowTime=time;
		// console.log(nowTime);
        value=$('#date').val();
        console.log(value);
        localStorage.setItem('enterDate2', value);
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
            console.log($('#last-emotion').val());
            $('#added').addClass('emotion-picked');
            emotionArray.push($('#last-emotion').val());

           
        });
        

    });

	$('#clear-button2').click(function() {	
		$('.emotion-picked').removeClass('emotion-picked');
        emotionArray=[];
	
	});
	$('#emotion-submit').click(function() { 
        
        $(".emotion-picked").each(function() {
		    emotionArray.push($(this).val());
		});
		 
		console.log(emotionArray);
		localStorage.setItem('emotions', emotionArray);
		window.location="trigger.html";
    }); 

//TRIGGERS
if (jQuery.ui) {
  console.log("ui loaded");
}
    $(function() {
            $( "#dialog" ).dialog({
                  autoOpen: false,
                  show: {
                    effect: "blind", 
                    duration: 1000
                  },
                  hide: {
                    effect: "explode",
                    duration: 1000
                  }
                });
            $( '#opener' ).click(function() {
               $( '#dialog' ).dialog( 'open' );
            });
         });
    

    $('#trigger-add').hide();
    $('.environment-select').change(function() {
         env = $('option:selected').val();
        
        if (env=="Other") {
            $('#trigger-add').show().keyup(function() {
                env=$('input[name=otherAdd]').val();
                console.log(env);
            });

            
        } else if (env=="Select") {
            alert("Invalid Environment Option, please select from the choices below");
        } else {

        }
        console.log("Value of env " + env);
        return env;     
        
    });
    
            //var env=$('option:selected').val();//this could be a problem!
        
                
                 

    $('#trigger-submit').click(function() {
    	var loc= $('input[name=location]').val();
    	
        //BROKEN
        
             
            // } else 
            // if (env == "Select") {
            //     alert("Invalid Environment Option, please select from the choices below");
            // }     
            // } else {

            // }
        // })
    	
    	
    	var comp = $('input[name=company]').val();
    	
    	var inter=$('input[name=internal]').val();
    	
    	var exter=$('input[name=external]').val();
    	
    	var noted = $('input[name=notes]').val();
    
    	
    	var event1= new Event(loc, env, comp, inter, exter, noted);
    	
    	eventArray.push(event1);
    	localStorage.setItem("events", JSON.stringify(eventArray));
    	window.location="view.html";
    	
    });
    

     //VIEW-Old
     	
     // 		$('#displayDay').html("<p> Date: "+ localStorage.getItem('enterDate2') + "</p>");
     //        //$('#displayDay').html("<p> Date: "+ localStorage.getItem('enterDate1') + "</p>");
     // 	      console.log(localStorage.getItem('enterDate2'));
     	
    	// $('#displayTime').html("<p> Time: "+ localStorage.getItem('enterTime') + "<p>");
    	// //$('#displayEmotions').html("<p> You felt: " + localStorage.getItem('emotions') + "<p>")
    	
    	// displayedObject=localStorage.getItem('events');
    	// displayedObject=('displayedObject: ', JSON.parse(displayedObject));
    	
    	// $('#displayTriggers').append("<p> Where I was "+ displayedObject[0].location + "</p>" + "<p> At:" + 
    	// 	displayedObject[0].environment + "</p>" +"<p> With:" + displayedObject[0].company + "</p>" + "<p> Thoughts:" + displayedObject[0].internal + "</p>"
    	// 	+ "<p> Other Factors:" + displayedObject[0].external + "</p>" +"<p> Notes:" + displayedObject[0].notes + "</p>");
    	
    	// //dateDisplayer();
    	// emotionDisplayer();
    	

    	
    	// //disploying functions - only one works
    	// function emotionDisplayer() {
    	// 	emotionDisplay = localStorage.getItem('emotions').split(',');
     //        $('#displayEmotions').html("<p> I felt: " + emotionDisplay[0] + "</p>")

     //        console.log(emotionDisplay);
     //        for(i=1; i<emotionDisplay.length; i++) {
     //            $('#displayEmotions').append("<p>" + emotionDisplay[i] + "</p>");
     //        }
            

    		
    		
    		
    	// }

        $("#empty-storage").click(function() {
            //localStorage.clear();
            window.location="timestamp.html";
        })      
    

});
    	 

 var Day = function(date, time, events, triggers) {
    this.date=date;
    this.time=time;
    this.events=events;
    this.triggers=triggers;
}


var day1=new Day (localStorage.getItem('enterDate2'), localStorage.getItem('enterTime'), localStorage.getItem('emotions'), localStorage.getItem('events'));
dayArray.push(day1);

//stringify the array set to local storage
//use eval if a for loop doesn't work - can use to make dynamic variables
localStorage.setItem('array', dayArray);

 

console.log("What is the current date: " + dayArray[0].date)
var stupid = localStorage.getItem('events');
stupid = ('stupid: ', JSON.parse(stupid));
console.log("This is stupid: " + stupid);

 data = [
  //{name: 'Ted', surname: 'Smith', company: 'Electrical Systems', age: 30},
  {day: dayArray[0].date, time: dayArray[0].time , events: dayArray[0].events, location: stupid[0].location , environment: stupid[0].environment , company: stupid[0].company,internal: stupid[0].internal, external: stupid[0].external, notes: stupid[0].notes},
   {day: "4/10/2017", time: "Morning" , events: "Happy,Excited" , location: "South Lyon" , environment: "Home" , company: "Alone" , internal: "Cuddling puppies is nice" , external: "Quiet House" , notes: "NA" },
   {day: "4/09/2017", time: "Evening" , events: "Tired,Upset" , location: "Comerica Park", environment: "Baseball stadium" , company: "Large crowd" , internal: "WHY SPORTSBALL" , external: "Crowd Noise" , notes: "SPORTSBALLLLL!" },
  {day: "4/08/2017", time: "Afternoon" , events: "Stressed" , location: "South Lyon", environment: "Home" , company: "Alone" , internal: "Cleaning is taking too long" , external: "Ella barking" , notes: "NA" }
];

$(function(){
  $('#container').FancyGrid({ 
    
    title: 'Quick View of Emotions',
    renderTo: 'container',
    width: '1000',
    height: 400,
    selModel: 'cell',
    width: 'fit',
    height: 'fit',
    theme: {
      name: 'bootstrap',
      config: {
        cellHeight: 92,
        cellWidth: 100,
        titleHeight: 65
        
      },
},

    data: data,
    columns: [{
      index: 'day',      
      title: 'Date',
      type: 'string',
      width: 95,
      sortable: true,
      resizable: true
    },{
      index: 'time',
      title: 'Time',
      type: 'string',
      width: 95,
      sortable: true,
      esizable: true
    },{
      index: 'events',
      title: 'Emotions',
      type: 'string',
      width : 250,
      sortable: true
    },{
      index: 'location',
      title: 'Location',
      type: 'string',
      width: 200,
      sortable: true,
      flex: 1
      
    },{
      index: 'environment',
      title: 'Environment',
      type: 'string',
      width: 185,
      sortable: true,
      
      
    },
    {
      index: 'company',
      title: 'Company',
      type: 'string',
      width: 95,
      sortable: true
      
    },{
      index: 'external',
      title: 'External Factors',
      type: 'string',
      width: 175,
      sortable: true,
      flex: 2
      
    },{
      index: 'internal',
      title: 'Thoughts',
      type: 'string',
      width: 200,
      sortable: true,
      flex: 3
    },{
      index: 'notes',
      title: 'Notes',
      type: 'string',
      width: 100,
      height: 150,
      sortable: true,
      flex: 1
    },

    ]
  });
});

//GET https://api.fitbit.com/1/user/-/profile.json

// //curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyV1JYNjgiLCJhdWQiOiIyMjg4WTUiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc2xlIiwiZXhwIjoxNDkzMTcwNjgxLCJpYXQiOjE0OTI1NjU4ODF9.QCQLmVC2Mbrndq6JMn06jOH9LdjsbolLLYuBYvVNlAQ" https://api.fitbit.com/1/user/-/profile.json
//  var xhr = new XMLHttpRequest();


//  xhr.open("GET", "https://api.fitbit.com/1/user/-/profile.json", Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0MzAzNDM3MzUsInNjb3BlcyI6Indwcm8gd2xvYyB3bnV0IHdzbGUgd3NldCB3aHIgd3dlaSB3YWN0IHdzb2MiLCJzdWIiOiJBQkNERUYiLCJhdWQiOiJJSktMTU4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE0MzAzNDAxMzV9.z0VHrIEzjsBnjiNMBey6wtu26yHTnSWz_qlqoEpUlpc
// );
// // Add your code below!
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);








		 
    	



 