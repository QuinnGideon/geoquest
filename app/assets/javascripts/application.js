// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

	 // $('#answers').hide();
	getRandomCountry();

	$("#submit").click(function(){ 

		  if($("#opt0").val()=="1" && $("#optcheck0").is(":checked")){
		  	$('#answers').text("Fantastic");
	setTimeout(function(){window.location.reload();
		  }, 1000);

		  }

		  else if($("#opt1").val()=="1" && $("#optcheck1").is(":checked")){
		  		  	$('#answers').text("You got it!");
		  	setTimeout(function(){window.location.reload();
}, 1000);
		  }
		  
			else if($("#opt2").val()=="1" && $("#optcheck2").is(":checked")){
							$('#answers').text("Correct!");
				setTimeout(function(){window.location.reload();
}, 1000);
		  }
		 
			else if($("#opt3").val()=="1" && $("#optcheck3").is(":checked")){
							$('#answers').text("You rock!");
				setTimeout(function(){window.location.reload();
}, 1000);
		  }
			else{
				$('#answers').text("Not quite, but it's "+answer).css("color", "red");
				setTimeout(function(){window.location.reload();
}, 3000);

		}

	 }); 

// $("#hint").click(function(){
//     $("#googleMapToggle").toggle();
// });
	$("#hint").click(function(){
	    $("#googleMap").css("visibility", "visible").toggle();
		});
});