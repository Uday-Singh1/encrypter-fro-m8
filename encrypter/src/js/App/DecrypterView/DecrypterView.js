class DecrypterView{
    header; 
    body;
    footer;
    htmlElement;
    main;
    type;


    constructor(main, placeholder) { //je krijgt de main mee in de constructor
        this.htmlElement = document.createElement("article");   //hier maak je een article
        this.htmlElement.classList.add("view"); //hier voeg je een view classes toe aan de article voor styling
        this.type = "DECRYPT"; //de type van de decrypter view is DECRYPT   dit doe je zodat je het defined in deze scope
        this.main = main;   //this main is main dat doe je om de main in deze scope te definen

        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement)   //je rendered de htmlelement in de htmlelement van de main, dus de article wordt gerenderd in de main
        this.header = new Header(this, "Decrypter"); //je geeft de header zichzelf mee
        this.body = new Body(this, placeholder); //je geeft de header zichzelf mee
        this.footer = new Footer(this, "Decrypt");   //de text voor de footer zijn knop decrypt
    }

    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);     //voer cipher uit op this.body en this.type    dus dan wordt de text veld gecipherd
    }

    changeBody(decryptedText) {
        this.body.changeBody(decryptedText);    //de body wordt aangepast door de decrypted text
    }
}