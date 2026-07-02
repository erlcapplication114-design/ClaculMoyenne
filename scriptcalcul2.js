"use strict";

/* ===========================
   CONFIGURATION
=========================== */

const STORAGE_PREFIX = "notes_";

const CONFIG = {
    L1: { titre: "PREMIERE ANNEE", niveau: "Licence 1" },
    L2: { titre: "DEUXIEME ANNEE", niveau: "Licence 2" },
    L3SI: { titre: "TROISIEME ANNEE SI", niveau: "Licence 3" },
    L3ISIL: { titre: "TROISIEME ANNEE ISIL", niveau: "Licence 3" }
};

/* ===========================
   INITIALISATION
=========================== */

const params = new URLSearchParams(window.location.search);
const level = params.get("level");

if (!CONFIG[level] || !ANNEES[level]) {
    console.error("Niveau inconnu :", level);
} else {

    document.getElementById("titre-annee").textContent =
        CONFIG[level].titre;

    document.getElementById("titre-niveau").textContent =
        CONFIG[level].niveau;

    renderSemestre(
        ANNEES[level].sem1,
        "container1_id",
        "moyenne_semestrielle"
    );

    renderSemestre(
        ANNEES[level].sem2,
        "container2_id",
        "moyenne_semestrielle2"
    );

    attacherListeners();

    charger();
}

/* ===========================
   RENDU
=========================== */

function renderSemestre(semestre, containerId, moyenneId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    let html = "";

    html += `<div class="entete">
                <strong>${semestre.label}</strong>
             </div>`;

    semestre.matieres.forEach(matiere => {

        html += `
        <div class="matiere">

            <label class="nom_matiere">
                ${matiere.label}
            </label>

            <div>
        `;

        matiere.inputs.forEach(input => {

            html += `
                <span>${input.label}</span>

                <input
                    type="number"
                    min="0"
                    max="20"
                    step="0.25"
                    id="${input.id}"
                    placeholder="0"
                >
            `;

        });

        html += `
            <span id="moy_${matiere.nom.toLowerCase()}"></span>

            </div>

        </div>
        `;

    });

    html += `<span id="${moyenneId}"></span>`;

    container.innerHTML = html;
}

/* ===========================
   LISTENERS
=========================== */

function attacherListeners() {

    document.querySelectorAll("input").forEach(input => {

        input.addEventListener("input", () => {

            verifierNote(input);

            sauvegarder(input);

            calculer();

        });

    });

}

/* ===========================
   VALIDATION
=========================== */

function verifierNote(input) {

    let valeur = parseFloat(input.value);

    if (isNaN(valeur)) return;

    if (valeur < 0) valeur = 0;

    if (valeur > 20) valeur = 20;

    input.value = valeur;

}

/* ===================================================
   MOTEUR DE CALCUL VERSION 2.0
=================================================== */

function calculer() {

    const page = document.body.dataset.page;

    const pages = {

        premiere_annee: premiereAnnee,
        deuxieme_annee: deuxiemeAnnee,
        deuxieme_annee_new: deuxiemeAnneeNew,
        troisieme_annee_si: troisieme_annee_si,
        troisieme_annee_isil: troisieme_annee_isil

    };

    if (pages[page]) {

        pages[page]();

    }

}

/* ===================================================
   CALCUL D'UNE ANNEE
=================================================== */

function calculerAnnee(semestre1, semestre2) {

    const resultat1 = calculerSemestre(semestre1);

    const resultat2 = calculerSemestre(semestre2);

    afficherMoyenneSemestre(

        resultat1.somme,

        resultat1.coefficients,

        "moyenne_semestrielle"

    );

    afficherMoyenneSemestre(

        resultat2.somme,

        resultat2.coefficients,

        "moyenne_semestrielle2"

    );

    afficherMoyenneGenerale(

        resultat1,

        resultat2

    );

}

/* ===================================================
   CALCUL D'UN SEMESTRE
=================================================== */

function calculerSemestre(matieres) {

    let somme = 0;

    let coefficients = 0;

    matieres.forEach(matiere => {

        let moyenne = 0;

        let valide = true;

        matiere.ids.forEach((id, index) => {

            const champ = document.getElementById(id);

            if (!champ) {

                console.warn(id + " introuvable");

                valide = false;

                return;

            }

            let note = parseFloat(champ.value);

            if (isNaN(note))

                note = 0;

            if (note < 0 || note > 20) {

                champ.style.border = "2px solid red";

                valide = false;

                return;

            }

            champ.style.border = "";

            moyenne += note * matiere.coefs[index];

        });

        if (valide) {

            somme += moyenne * matiere.multiple;

            coefficients += matiere.multiple;

        }

        const span = document.getElementById(

            "moy_" + matiere.nom.toLowerCase()

        );

        if (span) {

            span.textContent =

                "Moyenne : " + moyenne.toFixed(2);

            span.style.color =

                moyenne >= 10

                    ? "#1bbf00"

                    : "#d00000";

        }

    });

    return {

        somme,

        coefficients

    };

}

/* ===================================================
   MOYENNE SEMESTRIELLE
=================================================== */

function afficherMoyenneSemestre(

    somme,

    coeff,

    id

) {

    const span = document.getElementById(id);

    if (!span) return;

    if (coeff === 0) {

        span.textContent = "";

        return;

    }

    const moyenne = somme / coeff;

    span.textContent =

        "Votre moyenne semestrielle est de "

        + moyenne.toFixed(2);

    span.style.color =

        moyenne >= 10

            ? "#19c000"

            : "#d00000";

}

/* ===================================================
   MOYENNE GENERALE
=================================================== */

function afficherMoyenneGenerale(

    semestre1,

    semestre2

) {

    const span = document.getElementById(

        "moyenne_generale"

    );

    if (!span)

        return;

    const coeff =

        semestre1.coefficients +

        semestre2.coefficients;

    if (coeff === 0) {

        span.textContent = "";

        return;

    }

    const moyenne =

        (

            semestre1.somme +

            semestre2.somme

        ) / coeff;

    span.textContent =

        "Votre moyenne générale est de "

        + moyenne.toFixed(2);

    span.style.color =

        moyenne >= 10

            ? "#19c000"

            : "#d00000";

}

/* ===================================================
   SAUVEGARDE DES NOTES
=================================================== */

function sauvegarder(input) {

    if (!input) return;

    localStorage.setItem(

        STORAGE_PREFIX + input.id,

        input.value

    );

}

/* ===================================================
   CHARGEMENT
=================================================== */

function charger() {

    document

        .querySelectorAll("input")

        .forEach(input => {

            const valeur =

                localStorage.getItem(

                    STORAGE_PREFIX + input.id

                );

            if (valeur !== null) {

                input.value = valeur;

            }

        });

    calculer();

}

/* ===================================================
   VIDER UNIQUEMENT LES NOTES
=================================================== */

function vider() {

    document

        .querySelectorAll("input")

        .forEach(input => {

            input.value = "";

            localStorage.removeItem(

                STORAGE_PREFIX + input.id

            );

        });

    calculer();

}

/* ===================================================
   EXPORT JSON
=================================================== */

function exporterNotes() {

    const data = {};

    document

        .querySelectorAll("input")

        .forEach(input => {

            data[input.id] = input.value;

        });

    return JSON.stringify(

        data,

        null,

        4

    );

}

/* ===================================================
   IMPORT JSON
=================================================== */

function importerNotes(json) {

    try {

        const data =

            JSON.parse(json);

        Object.keys(data)

            .forEach(id => {

                const champ =

                    document

                        .getElementById(id);

                if (champ) {

                    champ.value = data[id];

                    sauvegarder(champ);

                }

            });

        calculer();

    }

    catch (e) {

        console.error(

            "Import impossible",

            e

        );

    }

}

/* ===================================================
   RESET AUTOMATIQUE
=================================================== */

function resetApplication() {

    if (

        confirm(

            "Supprimer toutes les notes ?"

        )

    ) {

        vider();

    }

}

premiereAnnee()

deuxiemeAnnee()

deuxiemeAnneeNew()

troisieme_annee_si()

troisieme_annee_isil()