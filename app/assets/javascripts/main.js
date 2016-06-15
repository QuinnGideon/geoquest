var template=new Array();

template[0]="The name of this country is ";
template[1]="What is the capital of ";
template[2]="What is the population of ";
template[3]="Currency used in ";


var ranCountry=new Array();

var answerIndex;

// This is the function for selecting a random country from the API at https://restcountries.eu/
function getRandomCountry(){


$("#info").hide();

$('#loading').offset({ top : 160});
$("#loading").show();


$.ajax({ url: "https://restcountries.eu/rest/v1/all" }

).
then(function(data) {

	ranCountry[0]=Math.floor((Math.random() * data.length) +1);

	// This is where we're setting what other answers to populate the choices with
	var avoidSel=createQuestion(data,ranCountry[0]);
	// The attributes below allows for three random wrong answers. It relies on which country's data, answerIndex, and avoids placing data where answer already is
	showIncorrect(data, answerIndex, avoidSel);

	}); 

}

// Creating a question to populate first correct option, and let us know where it is placed
function createQuestion(data,selectedCountry){


 var country = {

  name:"",
  capital:"",
  population:0,
  currency:"",
  lat:0,
  lng: 0,

};
	// Accessing data from the API, and setting variables. Also where true answers are held.
	country.name=data[selectedCountry].name
  country.capital=data[selectedCountry].capital
  country.population=data[selectedCountry].population
  country.currency=data[selectedCountry].currencies[0]
  country.lat=data[selectedCountry].latlng[0]
  country.lng=data[selectedCountry].latlng[1]


  answerIndex=Math.floor((Math.random() *3));

	var ran=Math.floor((Math.random() *template.length));