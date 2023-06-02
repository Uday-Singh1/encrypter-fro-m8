class Header{
    htmlElement;    //de header
    view; // de elementen die uiteindelijk in de kaartjes komen
    headingHtmlElement;  //de h1 element
    constructor(view, headingText) {  //je maakt een constructor met de view en headingtext
        this.htmlElement = document.createElement("header");    //hier maak je een header aan
        this.htmlElement.classList.add("view__header"); //je voegt een class voor styling to aan de header
        this.headingHtmlElement = document.createElement("h1"); //je maakt hier een h1 
        
        this.headingHtmlElement.innerText = headingText;    //text dat in de header komt, dus Encrypter en Decrypter
        this.headingHtmlElement.classList.add("view__heading"); //styling voor de heading
        this.htmlElement.appendChild(this.headingHtmlElement);  //je voegt de h1 toe aan de header zelf
        this.view = view;   //je geeft aan dat view view is in de scope
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);    //hier geef je aan waar en wat je gaat renderen        
    }
}