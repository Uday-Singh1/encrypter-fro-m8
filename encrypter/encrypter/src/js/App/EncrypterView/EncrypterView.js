class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) { //je krijgt de main mee in de constructor
        this.htmlElement = document.createElement("article");   //hier maak je een article
        this.htmlElement.classList.add("view"); //voegt een view class voor de styling van de article element

        this.main = main;   //this main is main dus je defined het weer in deze scope , anders weet het niet waar je over praat en krijg je errors
        this.type = "ENCRYPT";  //de type van de decrypter view is DECRYPT
        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement)   //je rendered de htmlelement in de htmlelement van de main, dus de article wordt gerenderd in de main
        this.header = new Header(this, "Encrypter");        //header krijgt this mee en encrypt dus dat is de title van 1 van de kaartjes
        this.body = new Body(this, object);     // de body krijgt this en de object property
        this.footer = new Footer(this, "Encrypt");  //dit is de text encrypt dat op  de knop staat
    }

    getDataFromBody() {

        this.main.cipher(this.body.text,this.type);//dit voert de cipher uit op this.body en this.type
    }

    changeBody(encryptedText) {
        this.body.changeBody(encryptedText); // hier wordt changebody wordt aangeroepen op de body
    }

}