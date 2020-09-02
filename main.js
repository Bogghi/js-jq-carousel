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

var activeImgTmp = $(".images .first");
var activeIndTmp = $(".nav .first");

for(var i = 1; i <= 4; i++){
    
    switch(i){
        case 1:
            activeImgTmp.addClass("one");
            activeIndTmp.addClass("one");
            break;
        case 2: 
            activeImgTmp.addClass("two");
            activeIndTmp.addClass("two");
            break;
        case 3: 
            activeImgTmp.addClass("three");
            activeIndTmp.addClass("three");
            break;
        case 4: 
            activeImgTmp.addClass("four");
            activeIndTmp.addClass("four");
            break;
    }

    activeIndTmp = activeIndTmp.next();
    activeImgTmp = activeImgTmp.next();
}

$(document).ready(function(){
    $(".next").click(function() { changeImmage("next") });
    $(".prev").click(function() { changeImmage("prev") });

    $(document).keydown(
        function(e){
            if(e.keyCode == 39){
                changeImmage("next");
            }else if(e.keyCode == 37){
                changeImmage("prev");
            }
        }
    );

    function changeImmage(dir){
        var activeImg = $(".slider-wrapper .images .active").removeClass("active");
        var activeInd = $(".slider-wrapper .nav .active").removeClass("active");
        if(dir == "next"){
            if(activeImg.hasClass("last") && activeInd.hasClass("last")){
                $(".slider-wrapper .images .first").addClass("active");
                $(".slider-wrapper .nav .first").addClass("active");
            }else{
                activeImg.next().addClass("active");
                activeInd.next().addClass("active");
            }
        }else{
            if(activeImg.hasClass("first") && activeInd.hasClass("first")){
                $(".slider-wrapper .images .last").addClass("active");
                $(".slider-wrapper .nav .last").addClass("active");
            }else{
                activeImg.prev().addClass("active");
                activeInd.prev().addClass("active");
            }
        }
    }

    var firstIndex = $(".nav i.one");
    var secondIndex = $(".nav i.two");
    var threeIndex = $(".nav i.three");
    var fourIndex = $(".nav i.four");

    firstIndex.click(function() {
        changePositionOnClick(1); 
    });
    secondIndex.click(function() {
        changePositionOnClick(2); 
    });
    threeIndex.click(function() {
        changePositionOnClick(3); 
    });
    fourIndex.click(function() {
        changePositionOnClick(4); 
    });
    
    function changePositionOnClick(pos){

        switch(pos){
            case 1: 
                $(".images img.active").removeClass("active");
                $(".images img.one").addClass("active");
                $(".nav i.active").removeClass("active");
                $(".nav i.one").addClass("active");
                break;
            case 2: 
                $(".images img.active").removeClass("active");
                $(".images img.two").addClass("active");
                $(".nav i.active").removeClass("active");
                $(".nav i.two").addClass("active");
                break;
            case 3: 
                $(".images img.active").removeClass("active");
                $(".images img.three").addClass("active");
                $(".nav i.active").removeClass("active");
                $(".nav i.three").addClass("active");
                break;
            case 4: 
                $(".images img.active").removeClass("active");
                $(".images img.four").addClass("active");
                $(".nav i.active").removeClass("active");
                $(".nav i.four").addClass("active");
                break;
        }
    }

});