function afficher(id) {
    document.querySelectorAll(".specialite").forEach(el => el.style.display = "none");
    const cible = document.getElementById(id);
    cible.style.display = "block";

    cible.style.animation = "none";
    cible.offsetHeight;
    cible.style.animation = "";
}

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function(e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple-effect");

        const rect = btn.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 15) + "px";
        ripple.style.top  = (e.clientY - rect.top  - 15) + "px";

        btn.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
    });
});