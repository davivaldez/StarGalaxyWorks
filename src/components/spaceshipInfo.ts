import { findSpaceship } from "../utils/spaceshipUtils";

export function informationSpaceship(id: number) {
  const spaceship: {
    id: number;
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  } = findSpaceship(id);

  if (spaceship.inMission) {
    document.getElementById(`in-mission-${id}`).textContent = "Em missão: A nave está em uma missão";
  }
  document.getElementById(`in-mission-${id}`).style.display = "block";
  document.getElementById(`crew-limit-${id}`).style.display = "block";

  let crewInformations: string = "";
  spaceship.crew.forEach((crewMember) => (crewInformations += `  -[${crewMember}]<br>`));

  if (spaceship.crew.length !== 0) {
    document.getElementById(`crew-${id}`).innerHTML = `Tripulantes: ${spaceship.crew.length}<br>${crewInformations}`;
  }
  document.getElementById(`crew-${id}`).style.display = "block";

  const img = document.getElementById(`img-${id}`) as HTMLImageElement;
  img.src = "./resources/images/droids.png";
  document.getElementById(`btn-add-one-crew-${id}`).style.display = "none";
  document.getElementById(`btn-send-spaceship-${id}`).style.display = "none";
  document.getElementById(`btn-delete-spaceship-${id}`).style.display = "none";
  document.getElementById(`btn-informations-${id}`).style.display = "none";
  document.getElementById(`btn-back-to-card-${id}`).style.display = "block";
}

export function backToCard(id: number) {
  document.getElementById(`in-mission-${id}`).style.display = "none";
  document.getElementById(`crew-limit-${id}`).style.display = "none";
  document.getElementById(`crew-${id}`).style.display = "none";
  const img = document.getElementById(`img-${id}`) as HTMLImageElement;
  img.src = "./resources/images/luke.png";
  document.getElementById(`btn-add-one-crew-${id}`).style.display = "block";
  document.getElementById(`btn-send-spaceship-${id}`).style.display = "block";
  document.getElementById(`btn-delete-spaceship-${id}`).style.display = "block";
  document.getElementById(`btn-informations-${id}`).style.display = "block";
  document.getElementById(`btn-back-to-card-${id}`).style.display = "none";
}
