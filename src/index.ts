import { loadSpaceships, saveSpaceship, seeSpaceship, imprimeSpaceships, backToHome } from "./components/spaceshipButtons/outsideCardButtons";

document.addEventListener("DOMContentLoaded", loadSpaceships);
document.getElementById("save-spaceship").addEventListener("click", saveSpaceship);
document.getElementById("see-spaceships").addEventListener("click", seeSpaceship);
document.getElementById("imprime-spaceships").addEventListener("click", imprimeSpaceships);
document.getElementById("back-to-home").addEventListener("click", backToHome);
