class Main {
    encrypterView;
    decrypterView;
    htmlElement;
    constructor(data, app) { //de main heeft ook data nodig
        this.app = app; //de main en app hebben een connectie nodig dus de app moet ook worden benoemd in de main
        
        this.htmlElement = document.createElement("main");  //hier maak je de main zelf aan
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body")); //what to render is de html element en where to render is de body

        this.encrypterView = new EncrypterView(this, data.encrypt);   //de main maakt een Encrypterview
        this.decrypterView = new DecrypterView(this, data.decrypt);  //de main maakt een decrypterview
    }

    cipher(textToCipher, type) {
        if (type === "ENCRYPT") {
            this.app.encrypt(textToCipher);
        }
        else {
            this.app.decrypt(textToCipher);
        }
    }


    changeEncrypter(encryptedText) {
        this.encrypterView.changeBody(encryptedText);
    }
}

class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) { //je krijgt de main mee in de constructor
        this.htmlElement = document.createElement("article");   //hier maak je een article
        this.htmlElement.classList.add("view");

        this.main = main;   //this main is main
        this.type = "ENCRYPT";  //de type van de decrypter view is DECRYPT
        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement)   //je rendered de htmlelement in de htmlelement van de main, dus de article wordt gerenderd in de main
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Encrypt");
    }

    getDataFromBody() {
        this.main.cipher(this.body.text,this.type);
    }

    changeBody(encryptedText) {
        this.body.changeBody(encryptedText);
    }

}

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
        this.type = "DECRYPT"; //de type van de decrypter view is DECRYPT
        this.main = main;   //this main is main

        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement)   //je rendered de htmlelement in de htmlelement van de main, dus de article wordt gerenderd in de main
        this.header = new Header(this, "Decrypter"); //je geeft de header zichzelf mee
        this.body = new Body(this, placeholder); //je geeft de header zichzelf mee
        this.footer = new Footer(this, "Decrypt"); 
    }

    getDataFromBody() {
        this.main.cipher(this.body.text,this.type);
    }
}

class Header{
    htmlElement;
    view;
    headingHtmlElement;
    constructor(view, headingText) {
        this.htmlElement = document.createElement("header");    //hier maak je een header aan
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerText = headingText;
        this.headingHtmlElement.classList.add("view__heading");
        this.htmlElement.appendChild(this.headingHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);        
    }
}

class Body{
    htmlElement;
    view;
    inputHtmlElement;
    text;
    constructor(view,object) {
        this.htmlElement = document.createElement("section");    //hier maak je een header aan
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input")
        this.htmlElement.appendChild(this.inputHtmlElement);
        this.inputHtmlElement.placeholder = object.placeholder;
        this.inputHtmlElement.value = object.value;
        this.text = object.value;
        this.inputHtmlElement.oninput = this.typed;

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);        
    }

    typed = (event) => {
        this.text = event.target.value;
      
    }

    changeBody(newText) {
        this.inputHtmlElement.value = newText;
    }
}

class Footer{
    htmlElement;
    view;
    app;
    buttonHtmlElement;
    constructor(view, buttonText) {
        this.htmlElement = document.createElement("footer");    //hier maak je een header aan
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked;
        this.buttonHtmlElement.innerText = buttonText;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);        
    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }

}

class App{
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.encrypter = new Encrypter();   //hier maak je de encrypter aan
        this.decrypter = new Decrypter(); //hier maak je de decrypter aan
        this.cleaner = new Cleaner();   //je maakt een nieuwe cleaner aan , de oorspronlkelijke cleaner zit in een cleaner.js
        this.renderer = new Renderer(); //hier maak je een render aan
        this.api = new API();   //je maakt hier een nieuwe api aan, de api zelf zit in api.js
        this.api.getData("/src/data/data.json").then((data) => {    //hier krijg je de data uit api.js terug
        this.main = new Main(data, this);  //de mmain heeft data nodig en dat geef je dus ook aan de main door data tussen de ()  te typen
        }); 
    }
    
    encrypt = (textToEncrypt) => {
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted);
    }

    decrypt(textToDecrypt)  {
        console.log(this.decrypter.decrypt(textToDecrypt));
       
    }

}

const app = new App();



//Caesar Cipher

//video 20 