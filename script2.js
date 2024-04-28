//USE THE rest counrtries API URL

var  request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res =JSON.parse(request.response);
    console.log(res);

    //display all the country flags in the console


    for(var i=0; i<res.length; i++){
        console.log(res[i].flag);

    //use the same rest countries and print all countries names, region, sub-region and population.

    
        console.log(res[i].name);
        console.log(res[i].region);
        console.log(res[i].subregion);
        console.log(res[i].population);

    }

}