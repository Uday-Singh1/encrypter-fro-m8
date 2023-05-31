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
    
    // hier is de encrypt method
    encrypt = (textToEncrypt) => {
        //variabele met de waarde van de encrypted text
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted); // de function waar changeEncrypter wordt aangeroepen met de encrypted variabelen
    }
    // hier is de decrypt method
    decrypt(textToDecrypt) {
           //variabele met de waarde van de decrypted text
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);   // de function waar changeDecrypter wordt aangeroepen met de decrypted variabelen
    }

}

//Caesar Cipher

//video 17 