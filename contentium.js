function myLoad() {
    var body = document.getElementsByTagName("body");
    alert("Je sais vous êtes nouveau! Portez-vous bien");
}

function openWork() {
    const d = new Date();
    document.getElementById("hourdate").innerHTML = d;
    document.getElementById("hourdate").style.color = "red";
}

alertWork = () => {
    alert("Vous aurez tous les infos concernant les travaux!");
}

alerTeam = () => {
    alert("Vous aurez tous les infos concernant les équipes!");
}

alertContact = () => {
    alert("Vous aurez tous les infos concernant les équipes!");
}

setTimeout(myTimer, 1000);

function myTimer() {
    const timer = document.getElementById("timer");
    timer.innerHTML = "A bientôt";
}