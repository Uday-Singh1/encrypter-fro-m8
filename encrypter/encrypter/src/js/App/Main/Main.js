class Main {
    //properties van de main
    encrypterView;
    decrypterView;
    htmlElement;
    app;
    constructor(data, app) { //de main heeft ook data nodig
        this.app = app; //de main en app hebben een connectie nodig dus de app moet ook worden benoemd in de main
        
        this.htmlElement = document.createElement("main");  //hier maak je de main zelf aan
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body")); //what to render is de html element en where to render is de body

        this.encrypterView = new EncrypterView(this, data.encrypt);   //de main maakt een Encrypterview
        this.decrypterView = new DecrypterView(this, data.decrypt);  //de main maakt een decrypterview
    }

    //hier heb je de cipher functie met texttocipher en de soort type dus of encrypt of decrypt omdat je die 2 type encriptions hebt
    cipher(textToCipher, type) {
        if (type === "ENCRYPT") {          //if statement die gaat kijken of het type overeenkomt met Encrypt
            this.app.encrypt(textToCipher);     //encryption wordt uitgevoerd op  de textToCipher
        }
        else {
            this.app.decrypt(textToCipher);  //decryption wordt uitgevoerd op  de textToCipher
        }
    }


    changeEncrypter(encryptedText) {     //encrypter wordt aangepast
        this.encrypterView.changeBody(encryptedText);          //changebody wordt uitgevoerd op de encrypterview
    }

    changeDecrypter(decryptedText) {  //decrypter wordt aangepast
        this.decrypterView.changeBody(decryptedText);        //changebody wordt uitgevoerd op de decrypterview
    }
}