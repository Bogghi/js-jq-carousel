// Ciao ragazzi,
// Esercizio di oggi: Slider
// Cartella/Repo: js-jq-carousel
// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.
// Se volete potete partire dal layout base visto in classe
// https://bitbucket.org/booleancareers/lc-ex-slider-layout/downloads/

var x = $(".slider-wrapper .images .active.first").removeClass("active");

console.log(x);

x.next().addClass("active");
