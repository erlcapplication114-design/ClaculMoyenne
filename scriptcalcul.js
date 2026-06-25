function calculer() {
    const page = document.body.dataset.page;
    if (page === "premiere_annee") premiereAnnee();
    else if (page === "deuxieme_annee") deuxiemeAnnee();
    else if (page === "troisieme_annee_si") troisieme_annee_si();
}

function premiereAnnee() {
    let matieres = [
        { nom: "ANALYSE1", ids: ["td_analyse1", "examen_analyse1"], coefs: [0.4, 0.6], multiple: 4 },
        { nom: "ALGEBRE1", ids: ["td_algebre1", "examen_algebre1"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "ALGO1", ids: ["td_algo1", "tp_algo1", "examen_algo1"], coefs: [0.2, 0.2, 0.6], multiple: 5 },
        { nom: "SM1", ids: ["td_sm1", "examen_sm1"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "LL", ids: ["td_ll", "examen_ll"], coefs: [0.4, 0.6], multiple: 1 },
        { nom: "EG", ids: ["td_eg", "examen_eg"], coefs: [0.4, 0.6], multiple: 1 },
        { nom: "ANGLAIS1", ids: ["examen_anglais1"], coefs: [1], multiple: 1 },
    ];
    let matieres2 = [
        { nom: "ANALYSE2", ids: ["td_analyse2", "examen_analyse2"], coefs: [0.4, 0.6], multiple: 4 },
        { nom: "ALGEBRE2", ids: ["td_algebre2", "examen_algebre2"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "ALGO2", ids: ["td_algo2", "tp_algo2", "examen_algo2"], coefs: [0.2, 0.2, 0.6], multiple: 5 },
        { nom: "SM2", ids: ["td_sm2", "examen_sm2"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "LM1", ids: ["td_lm1", "examen_lm1"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "IIA", ids: ["td_iia", "tp_iia", "examen_iia"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "EF", ids: ["td_ef", "tp_ef", "examen_ef"], coefs: [0.2, 0.2, 0.6], multiple: 2 },
    ];

    calculerAnnee(matieres, matieres2);
}

function deuxiemeAnnee() {
    let matieres = [
        { nom: "BDD", ids: ["td_bdd", "tp_bdd", "examen_bdd"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "SE", ids: ["td_se", "tp_se", "examen_se"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "DAW", ids: ["tp_daw", "examen_daw"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "POO", ids: ["tp_poo", "examen_poo"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "THL", ids: ["tp_thl", "td_thl", "examen_thl"], coefs: [0.2, 0.2, 0.6], multiple: 2 },
        { nom: "Reseau", ids: ["tp_reseau", "td_reseau", "examen_reseau"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "Anglais", ids: ["examen_anglais"], coefs: [1], multiple: 1 },
    ];
    let matieres2 = [
        { nom: "ALGO3", ids: ["td_algo3", "tp_algo3", "examen_algo3"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "AO", ids: ["td_ao", "tp_ao", "examen_ao"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "SI", ids: ["td_si", "tp_si", "examen_si"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "THG", ids: ["td_thg", "examen_thg"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "LM", ids: ["td_lm", "examen_lm"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "MN", ids: ["tp_mn", "examen_mn"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "Anglais2", ids: ["examen_anglais2"], coefs: [1], multiple: 1 },
    ];

    calculerAnnee(matieres, matieres2);

}

function troisieme_annee_si() {
    let matieres = [
        { nom: "SE2", ids: ["td_se2", "tp_se2", "examen_se2"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "COMP", ids: ["td_comp", "tp_comp", "examen_comp"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "GL", ids: ["td_gl", "tp_gl", "examen_gl"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "IHM", ids: ["td_ihm", "tp_ihm", "examen_ihm"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "PL", ids: ["td_pl", "examen_pl"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "PS", ids: ["td_ps", "examen_ps"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "ECONOMIE", ids: ["examen_economie"], coefs: [1], multiple: 1 },
    ];

    let matieres2 = [
        { nom: "AM", ids: ["tp_am", "examen_am"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "CYBERSECURITY", ids: ["td_cybersecurity", "examen_cybersecurity"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "IA", ids: ["tp_ia", "examen_ia"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "DSS", ids: ["tp_dss", "examen_dss"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "PROJET", ids: ["examen_projet"], coefs: [1], multiple: 3 },
        { nom: "RS", ids: ["td_rs", "examen_rs"], coefs: [0.4, 0.6], multiple: 1 },
        { nom: "CDS", ids: ["examen_cds"], coefs: [1], multiple: 1 },
    ];
    calculerAnnee(matieres, matieres2);
}

function calculerAnnee(matieres, matieres2) {
    let somme1 = calculerR(matieres);
    let somme2 = calculerR(matieres2);
    let total1 = matieres.reduce((acc, m) => acc + m.multiple, 0);
    let total2 = matieres2.reduce((acc, m) => acc + m.multiple, 0);
    calculerMoyenneSem(somme1, total1, "moyenne_semestrielle");
    calculerMoyenneSem(somme2, total2, "moyenne_semestrielle2");
    calculerMoyenneGen(somme1, somme2, total1, total2, "moyenne_generale");
}

function calculerR(matieres) {
    let somme = 0;
    matieres.forEach(matiere => {
        let moyenne = 0;
        matiere.ids.forEach((id, i) => {
            let note = parseFloat(document.getElementById(id).value) || 0;
            if (note < 0 || note > 20) return;
            moyenne += note * matiere.coefs[i];
        });
        somme += moyenne * matiere.multiple;
        let span = document.getElementById("moy_" + matiere.nom.toLowerCase());
        span.innerText = "Moyenne : " + moyenne.toFixed(2);
        span.style.color = moyenne >= 10 ? "#26ff00" : "red";
    });
    return somme;
}

function calculerMoyenneSem(somme, total, span_of_div) {
    let moyenne = somme / total;
    let span = document.getElementById(span_of_div);
    if (moyenne > 0) {
        span.innerText = "Votre moyenne semestrielle est d'environ " + moyenne.toFixed(2);
        span.style.color = moyenne >= 10 ? "#26ff00" : "red";
    } else {
        span.innerText = "Veuillez bien remplir les notes avant de lancer le calcul";
        span.style.color = "lightgray";
    }
}

function calculerMoyenneGen(somme1, somme2, total1, total2, span_of_div) {
    let moyenne = ((somme1 / total1) + (somme2 / total2)) / 2;
    let span = document.getElementById(span_of_div);
    if (moyenne > 0) {
        span.innerText = "Votre moyenne générale est d'environ " + moyenne.toFixed(2);
        span.style.color = moyenne >= 10 ? "#26ff00" : "#ff0000";
    } else {
        span.innerText = "Veuillez bien remplir les notes avant de lancer le calcul";
        span.style.color = "lightgray";
    }
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculer);
    input.addEventListener("input", () => localStorage.setItem(input.id, input.value));
});

function charger() {
    document.querySelectorAll("input").forEach(input => {
        let valeur = localStorage.getItem(input.id);
        if (valeur) input.value = valeur;
    });
    calculer();
}

function vider() {
    localStorage.clear();
    document.querySelectorAll("input").forEach(input => input.value = "");
    calculer();
}

charger();