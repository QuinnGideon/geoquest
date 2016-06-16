
var template=new Array();

 var template1=[  ["Its capital is ", " and it's found in "] , [ "You would use  "," if you travelled to " ]]

 var template2=[  ["The capital of ", " is"] , [ "This capital is found in ",". The country's domain ends with " ]]

 
var answer;


var ranCountry=new Array();

var answerIndex;


function getRandomCountry(){


$("#info").hide();

$('#loading').offset({ top : 120});
$("#loading").show();


$.ajax({ url: "https://restcountries.eu/rest/v1/all" }

).
then(function(data) {

 //select a random country to make target of question
   ranCountry[0]=Math.floor((Math.random() *data.length) );

 
 //create question and populate correct answer option radio button
 var avoidSel=createQuestion(data,ranCountry[0]);

 //populate 3 other options with incorrect data
 showIncorrect(data, answerIndex, avoidSel);


 }); 

}


function createQuestion(data,selectedCountry){


 var country ={

  name:"",
  capital:"",
  subregion:"",
  topLevelDomain:"",
  currency:"",
 

};

 //populate country object with randomly select country data from api call
  country.name=data[selectedCountry].name
  country.capital=data[selectedCountry].capital
  country.subregion=data[selectedCountry].subregion
  country.topLevelDomain=data[selectedCountry].topLevelDomain[0]
  country.currency=data[selectedCountry].currencies[0]
 

 //randomly select which question type to be. asked
//based on four question templates 
  answerIndex=Math.floor((Math.random() *4));

 
 var ran=Math.floor((Math.random() *1));


$("#question").empty();


//template 0 selected
 if(answerIndex==0){


 $("#question").append(template1[0][0]);
 $("#question").append(country.capital);
 $("#question").append(template1[0][1]);
 $("#question").append(country.subregion);

}

//template 1
if(answerIndex==1){


 $("#question").append(template1[1][0]);
 $("#question").append(country.currency);
 $("#question").append(template1[1][1]);
 $("#question").append(country.capital);
 $("#question").append(". Name the country.");

}


//template 2
if(answerIndex==2){

$("#question").append(template2[0][0]);
$("#question").append(country.name);
$("#question").append(template2[0][1]);


}
// template 3
if(answerIndex==3){

	$("#question").append(template2[1][0]);
	$("#question").append(country.subregion);
	$("#question").append(template2[1][1]);

	$("#question").append(country.topLevelDomain);

}
 return showAnswer(country,answerIndex);
}


 //insert answer randomly in one of four options
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


 if(incorrectPlacement >3){
      incorrectPlacement=0;
  }

  
if(incorrectPlacement==avoidCurrentPlacement){

    incorrectPlacement ++;
  }

 

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

$("#loading").hide();
$("#info").show();



}

