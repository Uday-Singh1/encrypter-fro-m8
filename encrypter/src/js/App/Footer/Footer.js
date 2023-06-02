class Footer{
    htmlElement;
    view;
    app;
    buttonHtmlElement;
    constructor(view, buttonText) {
        this.htmlElement = document.createElement("footer");    //hier maak je een footer aan
        this.htmlElement.classList.add("view__footer");     //hier geef je de footer een classlist voor styling
        this.buttonHtmlElement = document.createElement("button");  //hier maak je een button aan voor de encrypter en decrypter
        this.buttonHtmlElement.classList.add("view__button");   //hier geef je de buttons styling
        this.buttonHtmlElement.onclick = this.buttonClicked;    //dit is een onclick die wat  uit voert zodra er wordt geklikt op de knop
        this.buttonHtmlElement.innerText = buttonText;  //de button text is encrypt of decrypt
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;   //hier define je view even weer in dezelfde scope
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);  //hier render je de footer en daarna geef je aan waar en dat is de view element
    }

    buttonClicked = () => { //functie dat wat uitvoert na het clicken
        this.view.getDataFromBody();    //na het kikken haalt het data op uit de body en dan wordt het gecrypt of gedecrypt
    }

}