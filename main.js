/* Grab the input value */

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var input = document.querySelector("input").value;
   if(e.which === 13) {
     findthegift(input);
   }
 
 });

/*get data  from the API */


function findthegift(input){
var url = "https://api.openweathermap.org/data/2.5/weather?appid=05de2d7a90babe42db82921038c37b50&q="+input;

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
var data=e.target.response;
changethedom(data);
});
}


function changethedom(input){
    var apidata=JSON.parse(input);
    console.log(apidata);
    var rtemp=apidata.main.temp;
    rtemp/=10;
    var mtemp=Math.ceil(rtemp);
    var farenhight=Math.ceil((rtemp*9)/5 + 32);
    var name=apidata.name;
    var feel=apidata.main.feels_like;
    feel=Math.ceil((feel/10)+1);
    console.log(rtemp);
    var humidity=apidata.main.humidity;
    var nameUpdate=document.querySelector('#location');
    nameUpdate.innerHTML=name;
    var updatec=document.querySelector('.c');
    updatec.innerHTML=mtemp+"°C";
    var updatef=document.querySelector('.f');
    updatef.innerHTML=farenhight+"°F";
    var updatefeel=document.querySelector('.desc');
    updatefeel.innerHTML="Feels Like "+feel+"°C";
    var updatehumidity=document.querySelector('.hu');
    updatehumidity.innerHTML=" "+humidity;
    
    
}