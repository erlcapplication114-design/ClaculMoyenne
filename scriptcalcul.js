const CONFIG = {
    L1: { titre: "PREMIERE ANNEE", niveau: "Licence 1" },
    L2: { titre: "DEUXIEME ANNEE", niveau: "Licence 2" },
    L3SI: { titre: "TROISIEME ANNEE SI", niveau: "Licence 3" },
    L3ISIL: { titre: "TROISIEME ANNEE ISIL", niveau: "Licence 3" },
};

const ANNEES = {
    L1: {
        sem1: {
            label: "SEMESTRE I",
            matieres: [
                { label: "Analyse 1", nom: "ANALYSE1", inputs: [{ label: "TD", id: "td_analyse1" }, { label: "Examen", id: "examen_analyse1" }] },
                { label: "Algèbre 1", nom: "ALGEBRE1", inputs: [{ label: "TD", id: "td_algebre1" }, { label: "Examen", id: "examen_algebre1" }] },
                { label: "Algorithmique et Structure de Données I", nom: "ALGO1", inputs: [{ label: "TD", id: "td_algo1" }, { label: "TP", id: "tp_algo1" }, { label: "Examen", id: "examen_algo1" }] },
                { label: "Structure Machine 1", nom: "SM1", inputs: [{ label: "TD", id: "td_sm1" }, { label: "Examen", id: "examen_sm1" }] },
                { label: "Logiciels Libre", nom: "LL", inputs: [{ label: "TD", id: "td_ll" }, { label: "Examen", id: "examen_ll" }] },
                { label: "Electricité Générale", nom: "EG", inputs: [{ label: "TD", id: "td_eg" }, { label: "Examen", id: "examen_eg" }] },
                { label: "Anglais 1", nom: "ANGLAIS1", inputs: [{ label: "Examen", id: "examen_anglais1" }] }
            ]
        },
        sem2: {
            label: "SEMESTRE II",
            matieres: [
                { label: "Analyse 2", nom: "ANALYSE2", inputs: [{ label: "TD", id: "td_analyse2" }, { label: "Examen", id: "examen_analyse2" }] },
                { label: "Algèbre 2", nom: "ALGEBRE2", inputs: [{ label: "TD", id: "td_algebre2" }, { label: "Examen", id: "examen_algebre2" }] },
                { label: "Algorithmique et Structure de Données II", nom: "ALGO2", inputs: [{ label: "TD", id: "td_algo2" }, { label: "TP", id: "tp_algo2" }, { label: "Examen", id: "examen_algo2" }] },
                { label: "Structure Machine II", nom: "SM2", inputs: [{ label: "TD", id: "td_sm2" }, { label: "Examen", id: "examen_sm2" }] },
                { label: "Logique Mathématique", nom: "LM1", inputs: [{ label: "TD", id: "td_lm1" }, { label: "Examen", id: "examen_lm1" }] },
                { label: "Introduction à l'Intelligence Artificielle", nom: "IIA", inputs: [{ label: "TD", id: "td_iia" }, { label: "TP", id: "tp_iia" }, { label: "Examen", id: "examen_iia" }] },
                { label: "Electronique Fondamentale", nom: "EF", inputs: [{ label: "TD", id: "td_ef" }, { label: "TP", id: "tp_ef" }, { label: "Examen", id: "examen_ef" }] }
            ]
        },
    },
    L2: {
        sem1: {
            label: "SEMESTRE III",
            matieres: [
                { label: "Bases de Données", nom: "BDD", inputs: [{ label: "TD", id: "td_bdd" }, { label: "TP", id: "tp_bdd" }, { label: "Examen", id: "examen_bdd" }] },
                { label: "Systèmes d'Exploitation", nom: "SE", inputs: [{ label: "TD", id: "td_se" }, { label: "TP", id: "tp_se" }, { label: "Examen", id: "examen_se" }] },
                { label: "Développement Applications Web", nom: "DAW", inputs: [{ label: "TP", id: "tp_daw" }, { label: "Examen", id: "examen_daw" }] },
                { label: "Programmation Orientée Objet", nom: "POO", inputs: [{ label: "TP", id: "tp_poo" }, { label: "Examen", id: "examen_poo" }] },
                { label: "Théorie des Langages", nom: "THL", inputs: [{ label: "TP", id: "tp_thl" }, { label: "TD", id: "td_thl" }, { label: "Examen", id: "examen_thl" }] },
                { label: "Réseaux de Communication", nom: "Reseau", inputs: [{ label: "TP", id: "tp_reseau" }, { label: "TD", id: "td_reseau" }, { label: "Examen", id: "examen_reseau" }] },
                { label: "Anglais 2", nom: "Anglais2", inputs: [{ label: "Examen", id: "examen_anglais2" }] }
            ]
        },
        sem2: {
            label: "SEMESTRE IV",
            matieres: [
                { label: "Algorithmique et Structures de Données III", nom: "ALGO3", inputs: [{ label: "TD", id: "td_algo3" }, { label: "TP", id: "tp_algo3" }, { label: "Examen", id: "examen_algo3" }] },
                { label: "Architecture des Ordinateurs", nom: "AO", inputs: [{ label: "TD", id: "td_ao" }, { label: "TP", id: "tp_ao" }, { label: "Examen", id: "examen_ao" }] },
                { label: "Systèmes d'Information", nom: "SI", inputs: [{ label: "TD", id: "td_si" }, { label: "TP", id: "tp_si" }, { label: "Examen", id: "examen_si" }] },
                { label: "Théorie des Graphes", nom: "THG", inputs: [{ label: "TD", id: "td_thg" }, { label: "Examen", id: "examen_thg" }] },
                { label: "Logique Mathématique", nom: "LM", inputs: [{ label: "TD", id: "td_lm" }, { label: "Examen", id: "examen_lm" }] },
                { label: "Méthodes Numériques", nom: "MN", inputs: [{ label: "TP", id: "tp_mn" }, { label: "Examen", id: "examen_mn" }] },
                { label: "Anglais 3", nom: "Anglais3", inputs: [{ label: "Examen", id: "examen_anglais3" }] }
            ]
        },
    },
    L3SI: {
        sem1: {
            label: "SEMESTRE V",
            matieres: [
                { label: "Systèmes d'Exploitation 2", nom: "SE2", inputs: [{ label: "TD", id: "td_se2" }, { label: "TP", id: "tp_se2" }, { label: "Examen", id: "examen_se2" }] },
                { label: "Compilation", nom: "COMP", inputs: [{ label: "TD", id: "td_comp" }, { label: "TP", id: "tp_comp" }, { label: "Examen", id: "examen_comp" }] },
                { label: "Génie Logiciel", nom: "GL", inputs: [{ label: "TD", id: "td_gl" }, { label: "TP", id: "tp_gl" }, { label: "Examen", id: "examen_gl" }] },
                { label: "Interactions Homme-Machine", nom: "IHM", inputs: [{ label: "TD", id: "td_ihm" }, { label: "TP", id: "tp_ihm" }, { label: "Examen", id: "examen_ihm" }] },
                { label: "Programmation Linéaire", nom: "PL", inputs: [{ label: "TD", id: "td_pl" }, { label: "Examen", id: "examen_pl" }] },
                { label: "Probabilités et Statistiques", nom: "PS", inputs: [{ label: "TD", id: "td_ps" }, { label: "Examen", id: "examen_ps" }] },
                { label: "Économie Numérique et Veille Stratégique", nom: "ECONOMIE", inputs: [{ label: "Examen", id: "examen_economie" }] }
            ]
        },
        sem2: {
            label: "SEMESTRE VI",
            matieres: [
                { label: "Applications Mobiles", nom: "AM", inputs: [{ label: "TP", id: "tp_am" }, { label: "Examen", id: "examen_am" }] },
                { label: "Sécurité Informatique", nom: "CYBERSECURITY", inputs: [{ label: "TD", id: "td_cybersecurity" }, { label: "Examen", id: "examen_cybersecurity" }] },
                { label: "Intelligence Artificielle", nom: "IA", inputs: [{ label: "TP", id: "tp_ia" }, { label: "Examen", id: "examen_ia" }] },
                { label: "Données Semi-Structurées", nom: "DSS", inputs: [{ label: "TD", id: "td_recherche" }, { label: "Examen", id: "examen_recherche" }] },
                { label: "Rédaction Scientifique", nom: "RS", inputs: [{ label: "TD", id: "td_sad" }, { label: "Examen", id: "examen_sad" }] },
                { label: "Projet", nom: "PROJET", inputs: [{ label: "Examen", id: "examen_projet" }] },
                { label: "Créer et développer une startup", nom: "CDS", inputs: [{ label: "Examen", id: "examen_cds" }] }
            ]
        },
    },
    L3ISIL: {
        sem1: {
            label: "SEMESTRE V",
            matieres: [
                { label: "Système d'information distribué", nom: "SID", inputs: [{ label: "TD", id: "td_sid" }, { label: "TP", id: "tp_sid" }, { label: "Examen", id: "examen_sid" }] },
                { label: "Système d'Aide à la Décision :", nom: "SAD", inputs: [{ label: "TP", id: "tp_sad" }, { label: "Examen", id: "examen_sad" }] },
                { label: "Génie Logiciel", nom: "GL_ISIL", inputs: [{ label: "TD", id: "td_gl_isil" }, { label: "TP", id: "tp_gl_isil" }, { label: "Examen", id: "examen_gl_isil" }] },
                { label: "Interface Homme-Machine", nom: "IHM_ISIL", inputs: [{ label: "TD", id: "td_ihm_isil" }, { label: "TP", id: "tp_ihm_isil" }, { label: "Examen", id: "examen_ihm_isil" }] },
                { label: "Administration des Systèmes d'information", nom: "ASI", inputs: [{ label: "TD", id: "td_asi" }, { label: "Examen", id: "examen_asi" }] },
                { label: "Programmation Avancée pour le Web", nom: "PAW", inputs: [{ label: "TD", id: "td_paw" }, { label: "Examen", id: "examen_paw" }] },
                { label: "Economie Numérique et Veille Stratégique", nom: "ECONOMIE_ISIL", inputs: [{ label: "Examen", id: "examen_economie_isil" }] }
            ]
        },
        sem2: {
            label: "SEMESTRE VI",
            matieres: [
                { label: "Recherche d'Information", nom: "RI", inputs: [{ label: "TD", id: "td_ri" }, { label: "Examen", id: "examen_ri" }] },
                { label: "Sécurité Informatique", nom: "CYBERSECURITY_ISIL", inputs: [{ label: "TD", id: "td_cybersecurity_isil" }, { label: "Examen", id: "examen_cybersecurity_isil" }] },
                { label: "Données Semi-Structurées", nom: "DSS_ISIL", inputs: [{ label: "TP", id: "tp_dss_isil" }, { label: "Examen", id: "examen_dss_isil" }] },
                { label: "Système d'Exploitation 2", nom: "SE2_ISIL", inputs: [{ label: "TD", id: "td_se2_isil" }, { label: "TP", id: "tp_se2_isil" }, { label: "Examen", id: "examen_se2_isil" }] },
                { label: "Projet", nom: "PROJET_ISIL", inputs: [{ label: "Examen", id: "examen_projet_isil" }] },
                { label: "Business Intelligence", nom: "BI", inputs: [{ label: "Examen", id: "examen_bi" }] },
                { label: "Rédaction Scentifique", nom: "RS_ISIL", inputs: [{ labels: "Examen", id: "examen_rs_isil" }] }
            ]
        },
    },
};

// Read URL parameter
const params = new URLSearchParams(window.location.search);
const level = params.get("level");
const annee = ANNEES[level];
const config = CONFIG[level];

// Set titles
if (config) {
    document.getElementById("titre-annee").innerText = config.titre;
    document.getElementById("titre-niveau").innerText = config.niveau;
}

// Render inputs
if (annee) {
    renderSemestre(annee.sem1, "container1_id", "moyenne_semestrielle");
    renderSemestre(annee.sem2, "container2_id", "moyenne_semestrielle2");
    charger();
}

function renderSemestre(semestre, containerId, spanId) {
    const container = document.getElementById(containerId);
    let html = `<div class="entete"><strong>${semestre.label}</strong></div>`;
    semestre.matieres.forEach(m => {
        html += `<div class="matiere">
            <label class="nom_matiere">${m.label} :</label>
            <div>`;
        m.inputs.forEach(inp => {
            html += `<span>${inp.label} :</span>
                     <input type="number" id="${inp.id}" placeholder="0">`;
        });
        html += `<span id="moy_${m.nom.toLowerCase()}"></span>
            </div>
        </div>`;
    });
    html += `<span id="${spanId}"></span>`;
    container.innerHTML = html;
}

function calculer() {
    const page = document.body.dataset.page;
    if (page === "premiere_annee") premiereAnnee();
    else if (page === "deuxieme_annee") deuxiemeAnnee();
    else if (page === "troisieme_annee_si") troisieme_annee_si();
    else if (page === "troisieme_annee_isil") troisieme_annee_isil();
    else if (page === "deuxieme_annee_new") deuxiemeAnneeNew();
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
        { nom: "Anglais2", ids: ["examen_anglais2"], coefs: [1], multiple: 1 },
    ];
    let matieres2 = [
        { nom: "ALGO3", ids: ["td_algo3", "tp_algo3", "examen_algo3"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "AO", ids: ["td_ao", "tp_ao", "examen_ao"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "SI", ids: ["td_si", "tp_si", "examen_si"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "THG", ids: ["td_thg", "examen_thg"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "LM", ids: ["td_lm", "examen_lm"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "MN", ids: ["tp_mn", "examen_mn"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "Anglais3", ids: ["examen_anglais3"], coefs: [1], multiple: 1 },

    ];

    calculerAnnee(matieres, matieres2);

}

function deuxiemeAnneeNew() {
    let matieres = [
        { nom: "ALGO3_NEW", ids: ["td_algo3_new", "tp_algo3_new", "examen_algo3_new"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "AO_NEW", ids: ["td_ao_new", "tp_ao_new", "examen_ao_new"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "SI_NEW", ids: ["td_si_new", "tp_si_new", "examen_si_new"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "PS", ids: ["td_ps", "examen_ps"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "GP", ids: ["td_gp", "examen_gp"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "MN_NEW", ids: ["tp_mn_new", "examen_mn_new"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "POO_NEW", ids: ["tp_poo_new", "examen_poo_new"], coefs: [0.4, 0.6], multiple: 1 },
    ];

    let matieres2 = [
        { nom: "BDD_NEW", ids: ["td_bdd_new", "tp_bdd_new", "examen_bdd_new"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "SE_NEW", ids: ["td_se_new", "tp_se_new", "examen_se_new"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "PL_NEW", ids: ["td_pl_new", "examen_pl_new"], coefs: [0.2, 0.2, 0.6], multiple: 2 },
        { nom: "POO2_NEW", ids: ["tp_poo_new", "examen_poo_new"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "THL_NEW", ids: ["tp_thl_new", "td_thl_new", "examen_thl_new"], coefs: [0.2, 0.2, 0.6], multiple: 2 },
        { nom: "PS2_NEW", ids: ["td_ps2_new", "examen_thl_new"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "Entreprenariat", ids: ["examen_entreprenariat"], coefs: [1], multiple: 1 },
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

function troisieme_annee_isil() {
    let matieres = [
        { nom: "SID", ids: ["td_sid", "tp_sid", "examen_sid"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "SAD", ids: ["tp_sad", "examen_sad"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "GL_ISIL", ids: ["td_gl_isil", "tp_gl_isil", "examen_gl_isil"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "IHM_ISIL", ids: ["td_ihm_isil", "tp_ihm_isil", "examen_ihm_isil"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "ASI", ids: ["td_asi", "examen_asi"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "PAW", ids: ["td_paw", "examen_paw"], coefs: [0.4, 0.6], multiple: 2 },
        { nom: "ECONOMIE_ISIL", ids: ["examen_economie_isil"], coefs: [1], multiple: 1 },
    ];

    let matieres2 = [
        { nom: "RI", ids: ["td_ri", "examen_ri"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "CYBERSECURITY_ISIL", ids: ["td_cybersecurity_isil", "examen_cybersecurity_isil"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "DSS_ISIL", ids: ["tp_dss_isil", "examen_dss_isil"], coefs: [0.4, 0.6], multiple: 3 },
        { nom: "SE2_ISIL", ids: ["td_se2_isil", "tp_se2_isil", "examen_se2_isil"], coefs: [0.2, 0.2, 0.6], multiple: 3 },
        { nom: "PROJET_ISIL", ids: ["examen_projet_isil"], coefs: [1], multiple: 3 },
        { nom: "BI", ids: ["examen_bi"], coefs: [1], multiple: 1 },
        { nom: "RS_ISIL", ids: ["examen_rs_isil"], coefs: [1], multiple: 1 },
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
            const input = document.getElementById(id);
            if (!input) return;

            let note = parseFloat(input.value) || 0; if (note < 0 || note > 20) return;
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
