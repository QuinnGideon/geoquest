
	var template=new Array();
	// country.name questions
	var template1=[  ["Its capital is ", " and it's found in "] , [ "You would use  "," currency, if you travelled to " ]]
	// country.capital questions
	var template2=[  ["The capital of ", " is"] , [ "This capital is found in ",". The country's domain ends with " ]]

	var answer;
	var ranCountry=new Array();
	var answerIndex;
	var appendQuestion = function (theTemplate){
		$("#question").append(theTemplate);
	}

	// Google Maps
		function initialize(lat,lng) {
	  var mapProp = {
	    center:new google.maps.LatLng(lat,lng),
	    zoom:5,
	    mapTypeId:google.maps.MapTypeId.HYBRID
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	}
	// google.maps.event.addDomListener(window, 'load', initialize);


function getRandomCountry(){
	$("#info").hide();

	$.ajax({ url: "https://restcountries.eu/rest/v1/all"}).
	then(function(data) {

	 //select a random country to make target of question
		ranCountry[0]=Math.floor((Math.random() *data.length) );

	 //create question and populate correct answer option radio button
		var avoidSel=createQuestion(data,ranCountry[0]);

	 //populate 3 other options with incorrect data
		showIncorrect(data, answerIndex, avoidSel);

 }); 
}

// arguments: raw api data, and rand # between 0 and # of countries
function createQuestion(data,selectedCountry){
	var country ={
		name:"",
		capital:"",
		subregion:"",
		topLevelDomain:"",
		currency:"",
		lat:0,
		lng:0,
	};

 //populate country object with randomly selected country data from api call
  country.name=data[selectedCountry].name
  country.capital=data[selectedCountry].capital
  country.subregion=data[selectedCountry].subregion
  country.topLevelDomain=data[selectedCountry].topLevelDomain[0]
  country.currency=data[selectedCountry].currencies[0]
  country.lat=data[selectedCountry].latlng[0]
  country.lng=data[selectedCountry].latlng[1]

  initialize(country.lat,country.lng);
  
 
 //randomly select which question type to be asked
//based on four question templates 
	answerIndex=Math.floor((Math.random() *4));

	var ran=Math.floor((Math.random() *1));

	$("#question").empty();

	//template 0 selected
		if(answerIndex==0){

		appendQuestion(template1[0][0]);
		appendQuestion(country.capital);
		appendQuestion(template1[0][1]);
		appendQuestion(country.subregion);

	}
	//template 1
	if(answerIndex==1){

		appendQuestion(template1[1][0]);
		appendQuestion(country.currency);
		appendQuestion(template1[1][1]);
		appendQuestion(country.capital);
		appendQuestion(". Name the country.");

	}
	//template 2
	if(answerIndex==2){	

		appendQuestion(template2[0][0]);
		appendQuestion(country.name);
		appendQuestion(template2[0][1]);

	}
	// template 3
	if(answerIndex==3){

		appendQuestion(template2[1][0]);
		appendQuestion(country.subregion);
		appendQuestion(template2[1][1]);
		appendQuestion(country.topLevelDomain);

	}

	 return showAnswer(country,answerIndex);
}

 //insert answer randomly in one of four options
 // arguments: country and question type asked, to decide answer data to give
function showAnswer(country,answerIndex){

  var answerPlacement=Math.floor((Math.random() *4) );

 	if(answerIndex==0  || answerIndex==1){
  	$("#opt"+answerPlacement).val("1");
 		$("#opt"+answerPlacement).append("&nbsp;"+country.name);
  	answer=country.name;
 	}

  if(answerIndex==2 || answerIndex==3){
    $("#opt"+answerPlacement).val("1");
   	$("#opt"+answerPlacement).append("&nbsp;"+country.capital);
  	answer=country.capital;
  }

 return answerPlacement;
}

 // populate remaining options with incorrect but identical type of data 
function showIncorrect(data,answerIndex,avoidCurrentPlacement){

var incorrectPlacement=avoidCurrentPlacement+1;

  ranCountry[1]=Math.floor((Math.random() *data.length) +1);
  ranCountry[2]=Math.floor((Math.random() *data.length) +1);
  ranCountry[3]=Math.floor((Math.random() *data.length) +1);

  if(ranCountry[0]==ranCountry[1]){
    ranCountry[1]++;
  }

  if(ranCountry[1]==ranCountry[2]){
    ranCountry[2]++;
  }
   if(ranCountry[2]==ranCountry[3]){
    ranCountry[3]++;
  }

for(x=1;x<4;x++){
	// validation that placement doesn't exceed radio buttons
	if(incorrectPlacement >3){
  	incorrectPlacement=0;
  }
  
	if(incorrectPlacement==avoidCurrentPlacement){
    incorrectPlacement ++;
  }
  // country.name questions
 	if(answerIndex==0  || answerIndex==1){

    $("#opt"+incorrectPlacement).val("0");
    $("#opt"+ incorrectPlacement).append(data[ranCountry[x]].name);
   }
  	else if(answerIndex==2  || answerIndex==3){
     $("#opt"+incorrectPlacement).val("0");
      $("#opt"+ incorrectPlacement).append(data[ranCountry[x]].capital);
   	}
   
incorrectPlacement++;
 
}

$("#info").show();


}


