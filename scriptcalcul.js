function calculer() {
    let matieres = [
        {nom: "BDD", ids : ["td_bdd", "tp_bdd", "examen_bdd"], coefs: [0.2, 0.2, 0.6]},
        {nom: "SE", ids : ["td_se", "tp_se", "examen_se"], coefs: [0.2, 0.2, 0.6]},
        {nom: "DAW", ids : ["tp_daw", "examen_daw"], coefs: [0.4, 0.6]},
        {nom: "POO", ids : ["tp_poo", "examen_poo"], coefs: [0.4, 0.6]},
        {nom: "THL", ids: ["tp_thl", "td_thl", "examen_thl"], coefs: [0.2, 0.2, 0.6]},
        {nom: "Reseau", ids: ["tp_reseau", "td_reseau", "examen_reseau"], coefs: [0.2, 0.2, 0.6]},
        {nom: "Anglais", ids: ["examen_anglais"], coefs: [1]}
    ];

    matieres.forEach(matiere => {
        let moyenne = 0;
        matiere.ids.forEach((id, i) => {
            let note = document.getElementById(id).value || 0;
            moyenne += note * matiere.coefs[i];
        });
        
        let span = document.getElementById("moy_" + matiere.nom.toLowerCase());

        if (moyenne > 0) {
            span.innerText = "Moyenne : " + moyenne;
            span.style.color = moyenne >= 10 ? "green" : "red";
        } else {
            span.innerText = "";
        }
        console.log (matiere.nom + " : " + moyenne);
    });
}