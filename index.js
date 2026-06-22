function afficher(sectionId) {
    let affichage = document.getElementById(sectionId);
    let affichagetext = document.getElementById("affichage1");
    const toutesLesSpecialites = document.querySelectorAll(".specialite");

    const isVisible = affichage.style.display === "block";

    toutesLesSpecialites.forEach(div => div.style.display = "none");

    affichage.style.display = isVisible ? "none" : "block";
    affichagetext.style.display = isVisible ? "none" : "block";
}