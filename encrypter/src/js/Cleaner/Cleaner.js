class Cleaner{
    clean(whatToClean) {
        document.querySelector(whatToClean).innerHTML = ""; //wat je tussen de tags zet geeft het de eerste van een element dat is gemaakt als je bijvoorbeeld meerdere uls hebt pakt het de eerste ul
    }
}

//de cleaner cleaned