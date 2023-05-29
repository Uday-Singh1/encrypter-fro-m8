class API {     //dit is een hele herbruikbare API
    async getData(url) {    //dit loopt asynchroon
        let dataToBeReturned = {};  //data is een leeg object
       await fetch(url).then(  //het loopt pas wanneer de data er is 
           (response) => {  // zonder de arrow key function raakt het de "this" kwijt
               return response.json();  //hier geeft het de data terug
           }
       ).then((data) => {       //hier ga je aangeven wat er met de data gebeurt na het laden
            dataToBeReturned = data.data;    //this.data = data doe je zodat je een this kan meegeven en de code begrijpt wat this betekent en je doet data.data want dan pak je de data van de hele object
       });
        return dataToBeReturned; //hier returend hij de data dat moet worden returend
    }
}


