// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
function demarrerLaMontre() {
let date = new Date();


//Stocker l'heure , minute , seconde  dans des varaiables
let hr =date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();





// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
// Je recupere les elements de mon html J'applique style.transform pour modifier CSS en fonction du degres
// J'appelle ma variable avec une backtic et je calcule le degres dedans.
// J'utilise la fonction rotate pour la rotation des aiguilles et deg pour degrès
// Mes aiguilles recupérer se déplace en fonction de l'heure et se déplace en fonction du degrès calculer


// Déplacer les aiguilles 

    AIGUILLEHR.style.transform=
    `rotate(${ hr * 360 / 12 + min * 30 / 60 }deg)`

    AIGUILLEMIN.style.transform=
    `rotate(${ min*360 / 60 +sec * 6 / 60 }deg)`

    AIGUILLESEC.style.transform=
    `rotate(${sec* 360 / 60 }deg)`

}
// Exercuter la fonction chaque second
//varinterval =
 setInterval(demarrerLaMontre, 1000);