var key = config.MY_KEY;
var database = config.databaseURL;
var storageBucket = config.storageBucket;


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
//localStorage.setItem('array', dayArray);

ref.push({
          date: localStorage.getItem('enterDate2'),
          time: localStorage.getItem('enterTime'),
          emotions: localStorage.getItem('emotions'),
          events: localStorage.getItem('events')
        })
 
//Table scripting
console.log("What is the current date: " + dayArray[0].date)
var stupid = localStorage.getItem('events');
stupid = ('stupid: ', JSON.parse(stupid));
console.log("This is stupid: " + stupid);
var data = [
  //{name: 'Ted', surname: 'Smith', company: 'Electrical Systems', age: 30},
  {day: dayArray[0].date, time: dayArray[0].time , events: dayArray[0].events, location: stupid[0].location , environment: stupid[0].environment , company: stupid[0].company,internal: stupid[0].internal, external: stupid[0].external, notes: stupid[0].notes},
   {day: "4/10/2017", time: "Morning" , events: "Happy,Excited" , location: "South Lyon" , environment: "Home" , company: "Alone" , internal: "Cuddling puppies is nice" , external: "Quiet House" , notes: "NA" },
   {day: "4/09/2017", time: "Evening" , events: "Tired,Upset" , location: "Comerica Park", environment: "Baseball stadium" , company: "Large crowd" , internal: "WHY SPORTSBALL!" , external: "Crowd Noise" , notes: "SPORTS!" },
  {day: "4/08/2017", time: "Afternoon" , events: "Stressed" , location: "South Lyon", environment: "Home" , company: "Alone" , internal: "Cleaning is taking too long" , external: "Ella barking" , notes: "NA" }
];

$(function(){
  $('#container').FancyGrid({ 
    //set to tv screen settings - also check the container div in styles.css and delete if need be
    title: 'Emotion Tracker',
    renderTo: 'container',
    //width: 9000,
    height: 'fit',
    selModel: 'cell',
     width: 'fit',
    // height: 'fit',

    theme: {
      name: 'bootstrap',
      config: {
        cellHeight: 92,
        titleHeight: 65
        
      },
},

    data: data,
    columns: [{
      index: 'day',      
      title: 'Date',
      type: 'string',
      width: 100,
      sortable: true,
      resizable: true
    },{
      index: 'time',
      title: 'Time',
      type: 'string',
      width: 100,
      sortable: true,
      resizable: true
    },{
      index: 'events',
      title: 'Emotions',
      type: 'string',
      width : 200,
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
      width: 200,
      sortable: true,
      
      
    },
    {
      index: 'company',
      title: 'Company',
      type: 'string',
      width: 200,
      sortable: true
      
    },{
      index: 'external',
      title: 'External Factors',
      type: 'string',
      width: 200,
      sortable: true,
      
      
    },{
      index: 'internal',
      title: 'Thoughts',
      type: 'string',
      width: 250,
      sortable: true,
      
    },{
      index: 'notes',
      title: 'Notes',
      type: 'string',
      width: 250,
      sortable: true,
      resizable: true,
      editable: true,
      
      
    },

    ]
  });
});









		 
    	



 