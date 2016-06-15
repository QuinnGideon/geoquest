
var template=new Array();

template[0]="It's capital is ";

template[1]="Considered the most important place in ";

template[2]="Where is the subregion of ";

template[3]="What currency is used in ";


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


function createQuestion(data,selectedCountry){


 var country ={

  name:"",
  capital:"",
  population:0,
  currency:"",
  lat:0,
  lng: 0,
  subregion:"",
  region:"",

};

  country.capital=data[selectedCountry].capital
  country.name=data[selectedCountry].name
  country.name=data[selectedCountry].name
  country.currency=data[selectedCountry].currencies[0]
  country.population=data[selectedCountry].population
  country.lat=data[selectedCountry].latlng[0]
  country.lng=data[selectedCountry].latlng[1]
  country.subregion=data[selectedCountry].subregion
  country.region=data[selectedCountry].region


  answerIndex=Math.floor((Math.random() *4));

 var ran=Math.floor((Math.random() *template.length));


$("#question").empty();
$("#question").append(template[answerIndex]);
$('#target').empty();
$('#question').append(country.name+"?");

 return showAnswer(country,answerIndex);


}




function showAnswer(country,answerIndex){

  var answerPlacement=Math.floor((Math.random() *4) );


 if(answerIndex==0){

   $("#opt"+answerPlacement).val("1");
   
   $("#opt"+answerPlacement).append("&nbsp;"+country.captial);
 }

  if(answerIndex==1){

      $("#opt"+answerPlacement).val("1");
   
   $("#opt"+answerPlacement).append("&nbsp;"+country.capital);
 }

  if(answerIndex==2){

     $("#opt"+answerPlacement).val("1");
  
   $("#opt"+answerPlacement).append("&nbsp;"+country.subregion);
 }

 if(answerIndex==3){

   $("#opt"+answerPlacement).val("1");
   $("#opt"+answerPlacement).append("&nbsp;"+country.currency);
 }




 return answerPlacement;

}



function showIncorrect(data,answerIndex,avoidCurrentPlacement){

var curr=0;

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


 if(incorrectPlacement >3){
      incorrectPlacement=0;
  }

  
if(incorrectPlacement==avoidCurrentPlacement){

    incorrectPlacement ++;
  }

 

  if(answerIndex==0 ){


     $("#opt"+incorrectPlacement).val("0");
      $("#opt"+ incorrectPlacement).append(data[ranCountry[x]].name);

    
   }
  else if(answerIndex==1 ){


     $("#opt"+incorrectPlacement).val("0");
      $("#opt"+ incorrectPlacement).append(data[ranCountry[x]].capital);

   }
   
  else if(answerIndex==2 ){


     $("#opt"+incorrectPlacement).val("0");
      $("#opt"+ incorrectPlacement).append(data[ranCountry[x]].subregion);
      


   }
    else if(answerIndex==3 ){

    
    $("#opt"+incorrectPlacement).val("0");
      $("#opt"+ incorrectPlacement).append(data[ranCountry[x]].currencies[0]);

   }

 

incorrectPlacement++;

 
}

$("#loading").hide();
$("#info").show();



}







function getIncorrectCountry(avoidCountry){

var country ={

  name:"",
  capital:"",
  population:0,
  currency:"",
  lat:0,
  lng: 0,
  subregion:"",
  region:"",

};

$.ajax({ url: "https://restcountries.eu/rest/v1/name/"+ count+"?fullText=true" }

).
then(function(data) {

   var randSel=Math.floor((Math.random() *data.length) +1);

  country.name=data[0].name
  country.capital=data[0].capital
  country.subregion=data[0].subregion
  country.currency=data[0].currencies[0]
  country.population=data[0].population
  country.lat=data[0].latlng[0]
  country.lng=data[0].latlng[1]
  country.region=data[0].region


 }); 

 
}