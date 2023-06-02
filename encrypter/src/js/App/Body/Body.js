class Body{
    htmlElement;    //de section
    view;
    inputHtmlElement;   // de input veld
    text;   //de tekst is afkomstig van de json en kan uiteraard aangepast worden
    constructor(view,object) {  //een constructor waar de view en object in wordt aangegeven voor data
        this.htmlElement = document.createElement("section");    //hier maak je een section aan
        this.htmlElement.classList.add("view__body"); //hier voeg je een style classlist aan de section
        this.inputHtmlElement = document.createElement("textarea"); //hier maak je een tekstveld aan waar je dus straks tekst in kan voeren
        this.inputHtmlElement.classList.add("view__input")  //hier geeef je de tekstveld een styling 
        this.htmlElement.appendChild(this.inputHtmlElement);    //in de section maak je een tekstveld
        this.inputHtmlElement.placeholder = object.placeholder; //de placeholder is de tekst dat er al in staat bijvoorbeeld "type something to encrypt" dat uit de json is gehaald
        this.inputHtmlElement.value = object.value; //hier geef je de value aan dat je uit de json haalt , de value heeeft geen specifieke waarde aangezien de "" in json leeg zijn
        this.text = object.value;  //hier geef je de value aan dat je uit de json haalt , de value heeeft geen specifieke waarde aangezien de "" in json leeg zijn
        this.inputHtmlElement.oninput = this.typed; //de typed haalt het op uit de typed functie onderaan

        this.view = view;   //hier declareer je view in dezelfde scope
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement); //hier render je op de section de view elementen 
    }

    typed = (event) => { //deze functie houd de getypte text bij
        this.text = event.target.value; //dus de value is de aantal text en dat is dus zijn target en dus focus
      
    }

    changeBody(newText) {
        this.inputHtmlElement.value = newText;  //hier vernieuw je de waarde van inputHtmlelement
    }
}