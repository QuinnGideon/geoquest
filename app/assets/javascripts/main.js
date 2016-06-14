var template=new Array();

template[0]="The name of this country is ";
template[1]="What is the capital of ";
template[2]="What is the population of ";
template[3]="Currency used in ";


var ranCountry=new Array();

var answerIndex;


function getRandomCountry(){


$("#info").hide();

$('#loading').offset({ top : 160});
$("#loading").show();


$.ajax({ url: "https://restcountries.eu/rest/v1/all" }

).
then(function(data) {

   ranCountry[0]=Math.floor((Math.random() *data.length) +1);


 var avoidSel=createQuestion(data,ranCountry[0]);
 showIncorrect(data, answerIndex, avoidSel);

 }); 

}