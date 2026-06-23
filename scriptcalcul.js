function calculer() {
    let matieres = [
        { nom: "BDD", ids: ["td_bdd", "tp_bdd", "examen_bdd"], coefs: [0.2, 0.2, 0.6], multiple: [3] },
        { nom: "SE", ids: ["td_se", "tp_se", "examen_se"], coefs: [0.2, 0.2, 0.6], multiple: [3] },
        { nom: "DAW", ids: ["tp_daw", "examen_daw"], coefs: [0.4, 0.6], multiple: [2] },
        { nom: "POO", ids: ["tp_poo", "examen_poo"], coefs: [0.4, 0.6], multiple: [2] },
        { nom: "THL", ids: ["tp_thl", "td_thl", "examen_thl"], coefs: [0.2, 0.2, 0.6], multiple: [2] },
        { nom: "Reseau", ids: ["tp_reseau", "td_reseau", "examen_reseau"], coefs: [0.2, 0.2, 0.6], multiple: [3] },
        { nom: "Anglais", ids: ["examen_anglais"], coefs: [1], multiple: [1] }
    ];
    
    let matieres2 = [
        { nom: "ALGO3", ids: ["td_algo3", "tp_algo3", "examen_algo3"], coefs: [0.2, 0.2, 0.6], multiple: [3] },
        { nom: "AO", ids: ["td_ao", "tp_ao", "examen_ao"], coefs: [0.2, 0.2, 0.6], multiple: [3] },
        { nom: "SI", ids: ["td_si", "tp_si", "examen_si"], coefs: [0.2,0.2, 0.6], multiple: [3] },
        { nom: "THG", ids: ["td_thg", "examen_thg"], coefs: [0.4, 0.6], multiple: [2] },
        { nom: "LM", ids: ["td_lm", "examen_lm"], coefs: [0.4, 0.6], multiple: [2] },
        { nom: "MN", ids: ["tp_mn", "examen_mn"], coefs: [0.4, 0.6], multiple: [2] },
        { nom: "Anglais2", ids: ["examen_anglais2"], coefs: [1], multiple: [1] },
    ]

    let somme2 = calculerR(matieres2);
    let somme1 = calculerR(matieres);

    calculerMoyenneSem(somme2, "moyenne_semestrielle", document.getElementById("container1_id"));
    calculerMoyenneSem(somme1, "moyenne_semestrielle2", document.getElementById("container2_id"));
    calculerMoyenneGen(somme1, somme2, "moyenne_generale");

}

function calculerR (matieres) {

    let somme = 0;
    matieres.forEach(matiere => {
        let moyenne = 0;
        matiere.ids.forEach((id, i) => {
            let note = document.getElementById(id).value || 0;
            if (note < 0 || note > 20) {
                return;
            }
            moyenne += note * matiere.coefs[i];

        });

        somme += moyenne * matiere.multiple[0];
        let span = document.getElementById("moy_" + matiere.nom.toLowerCase());

        if (moyenne > -1) {
            span.innerText = "Moyenne : " + moyenne.toFixed(2);
            span.style.color = moyenne >= 10 ? "#26ff00" : "red";
        } else {
            span.innerText = "";
        }
    });
    
    return somme;
   
}
function calculerMoyenneGen (semestre1, semestre2, span_of_div) {

    let moy1 = semestre1 / 16;
    let moy2 = semestre2 / 16;
    let moyenne = (moy1 + moy2) / 2;    
    let span_moyenne_generale = document.getElementById(span_of_div);
    let span_border = document.getElementById("container3_id")
    if (moyenne > 0) {
        span_moyenne_generale.innerText = "Votre moyenne générale est d'environ " + moyenne.toFixed(2);
        span_moyenne_generale.style.color = moyenne >= 10 ? "#26ff00" : "#ff0000";
    } else {
        span_moyenne_generale.innerText = "Veuillez bien remplir les notes avant de lancer le calcul";
        span_moyenne_generale.style.color = "lightgray";
    }
}

function calculerMoyenneSem (somme, span_of_div, container) {
    let moy_generale = somme / 16;
    let span_moyenne_generale = document.getElementById(span_of_div);
    let span_border = container;
    if (moy_generale > 0) {
        span_moyenne_generale.innerText = "Votre moyenne semestrielle est d'environ " + moy_generale.toFixed(2);
        span_moyenne_generale.style.color = moy_generale >= 10 ? "#26ff00" : "red";
    } else {
        span_moyenne_generale.innerText = "Veuillez bien remplir les notes avant de lancer le calcul";
        span_moyenne_generale.style.color = "lightgray";
    }
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculer)
});

function charger() {
    document.querySelectorAll("input").forEach(input => {
        let valeur = localStorage.getItem(input.id);
        if (valeur) input.value = valeur;
    });
    calculer();
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value);
    });
});

charger();

function vider() {
    localStorage.clear();
    document.querySelectorAll("input").forEach(input => input.value = "");
    calculer();
}