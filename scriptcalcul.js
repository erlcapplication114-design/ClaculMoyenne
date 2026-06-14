function calculer() {
    let matieres = [
        {nom: "BDD", ids : ["td_bdd", "tp_bdd", "examen_bdd"], coefs: [0.2, 0.2, 0.6], multiple :[3]},
        {nom: "SE", ids : ["td_se", "tp_se", "examen_se"], coefs: [0.2, 0.2, 0.6], multiple :[3]},
        {nom: "DAW", ids : ["tp_daw", "examen_daw"], coefs: [0.4, 0.6], multiple :[2]},
        {nom: "POO", ids : ["tp_poo", "examen_poo"], coefs: [0.4, 0.6], multiple :[2]},
        {nom: "THL", ids: ["tp_thl", "td_thl", "examen_thl"], coefs: [0.2, 0.2, 0.6], multiple :[2]},
        {nom: "Reseau", ids: ["tp_reseau", "td_reseau", "examen_reseau"], coefs: [0.2, 0.2, 0.6] , multiple :[3]},
        {nom: "Anglais", ids: ["examen_anglais"], coefs: [1] , multiple :[1]}
    ];

    let somme = 0;
    matieres.forEach(matiere => {
        let moyenne = 0;
        matiere.ids.forEach((id, i) => {
            let note = document.getElementById(id).value || 0;
            if (note < 0 || note > 20) {
                alert("Veuillez entrer une note valide entre 0 et 20 pour " + matiere.nom);
                return;
            }
            moyenne += note * matiere.coefs[i];
            
        });
        
        somme += moyenne * matiere.multiple[0];
        let span = document.getElementById("moy_" + matiere.nom.toLowerCase());

        if (moyenne > -1) {
            span.innerText = "Moyenne : " + moyenne.toFixed(2);
            span.style.color = moyenne >= 10 ? "green" : "red";
        } else {
            span.innerText = "";
        }
    });
    let moy_generale = somme / 16;
    let span_moyenne_generale = document.getElementById("moyenne_generale");
    if (moy_generale > 0) {
        span_moyenne_generale.innerText = "Votre moyenne générale est d'environ " + moy_generale.toFixed(2);
        span_moyenne_generale.style.color = moy_generale >= 10 ? "green" : "red";
    } else {
        span_moyenne_generale.innerText = "Veuillez bien remplir les notes avant de lancer le calcul";
        span_moyenne_generale.style.color = "lightgray";
    }
}


    document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculer)});

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