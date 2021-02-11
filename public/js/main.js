// // Exo 1
// let magasin = {
//     chocolat: 2,
//     tartine: 3.5,
//     cacao: 5,
//     courgette: 1.5,
// };

// let argent = Number(prompt("Combien d'argent as-tu sur toi ?"));
// let choisirMagasin = prompt(`Que souhaites-tu acheter ? Nous avons ceci en stock : ${JSON.stringify(magasin)}`).toLowerCase();

// if(choisirMagasin == "chocolat"){
//     choisirMagasin = magasin.chocolat;
// } else if (choisirMagasin == "tartine"){
//     choisirMagasin = magasin.tartine;
// } else if (choisirMagasin == "cacao"){
//     choisirMagasin = magasin.cacao;
// } else if (choisirMagasin == "courgette"){
//     choisirMagasin = magasin.courgette;
// };

// console.log(choisirMagasin);

// let soustraire = (a) => {
//     argent = argent - a;
//     return argent;
// };

// soustraire(choisirMagasin);
// alert(`Il te reste : ${argent}€`);

// Exo 2
let vieilleDame = {
    age: 80,
    identite: {
        nom: "Duchêne",
        prenom: "Geraldine",
    },
    moral: "mal",
    objet: "canne",
    sePlaindre(){
        if (this.moral == "mal"){
            alert("Vous me dérangez");
        } else if (this.moral == "bien"){
            alert(`Bonjour monsieur ${vieilHomme.prenom}`);
        };
    },
    sePromener(){
        this.objet = "perdu";
        return this.objet;
    }
};

// Exo 3
let vieilHomme = {
    age: 84,
    prenom: "George",
    saluer(){
        alert(`Bonjour ${vieilleDame.identite.prenom} ${vieilleDame.identite.nom} !`);
        vieilleDame.sePlaindre();
    },
    adoucir(){
        vieilleDame.moral = "bien";
    },
};

vieilHomme.adoucir();
vieilHomme.saluer();