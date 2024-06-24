import { addOneCrew, sendSpaceship, deleteSpaceship } from "./spaceshipButtons/insideCardButtons";
import { informationSpaceship, backToCard } from "./spaceshipInfo";

function createContainer(id: number) {
  const spaceshipCard = document.createElement("div");
  spaceshipCard.classList.add("spaceship-card");
  spaceshipCard.id = `spaceship-card-${id}`;
  return spaceshipCard;
}

function createSpaceshipName(id: number, spaceshipName: string) {
  const name = document.createElement("p");
  name.textContent = `Nave: ${spaceshipName}`;
  name.id = `name-${id}`;
  return name;
}

function createSpaceshipPilot(id: number, spaceshipPilot: string) {
  const pilot = document.createElement("p");
  pilot.textContent = `Piloto: ${spaceshipPilot}`;
  pilot.id = `pilot-${id}`;
  return pilot;
}

function createSpaceshipInMission(id: number) {
  const inMission = document.createElement("p");
  inMission.textContent = "Em missão: A nave não está em uma missão";
  inMission.id = `in-mission-${id}`;
  inMission.style.display = "none";
  return inMission;
}

function createSpaceshipCrewLimit(id: number, spaceshipCrewLimit: number) {
  const crewLimit = document.createElement("p");
  crewLimit.textContent = `Limite da tripulação: ${spaceshipCrewLimit}`;
  crewLimit.id = `crew-limit-${id}`;
  crewLimit.style.display = "none";
  return crewLimit;
}

function createSpaceshipCrew(id: number) {
  const crew = document.createElement("p");
  crew.textContent = "Tripulantes: Nenhum tripulante";
  crew.id = `crew-${id}`;
  crew.style.display = "none";
  return crew;
}

function createImage(id: number) {
  const img = document.createElement("img");
  img.src = "./resources/images/luke.png";
  img.id = `img-${id}`;
  return img;
}

function createBtnAddOneCrew(id: number) {
  const btnAddOneCrew = document.createElement("button");
  btnAddOneCrew.textContent = "Adicionar novo tripulante";
  btnAddOneCrew.onclick = () => addOneCrew(id);
  btnAddOneCrew.id = `btn-add-one-crew-${id}`;
  return btnAddOneCrew;
}

function createBtnSendSpaceship(id: number) {
  const btnSendSpaceship = document.createElement("button");
  btnSendSpaceship.textContent = "Enviar nave para missão";
  btnSendSpaceship.onclick = () => sendSpaceship(id);
  btnSendSpaceship.id = `btn-send-spaceship-${id}`;
  return btnSendSpaceship;
}

function createBtnDeleteSpaceship(id: number) {
  const btnDeleteSpaceship = document.createElement("button");
  btnDeleteSpaceship.textContent = "Excluir nave";
  btnDeleteSpaceship.onclick = () => deleteSpaceship(id);
  btnDeleteSpaceship.id = `btn-delete-spaceship-${id}`;
  return btnDeleteSpaceship;
}

function createBtnInformations(id: number) {
  const btnInformations = document.createElement("button");
  btnInformations.textContent = "Informações";
  btnInformations.onclick = () => informationSpaceship(id);
  btnInformations.id = `btn-informations-${id}`;
  return btnInformations;
}

function createBtnBackToCard(id: number) {
  const btnBackToCard = document.createElement("button");
  btnBackToCard.textContent = "Voltar para menu principal";
  btnBackToCard.onclick = () => backToCard(id);
  btnBackToCard.id = `btn-back-to-card-${id}`;
  btnBackToCard.style.display = "none";
  return btnBackToCard;
}

function createContainerButtons(id: number, btnAddOneCrew: HTMLButtonElement, btnSendSpaceship: HTMLButtonElement, btnDeleteSpaceship: HTMLButtonElement, btnInformations: HTMLButtonElement, btnBackToCard: HTMLButtonElement) {
  const spaceshipButtons = document.createElement("div");
  spaceshipButtons.classList.add("spaceship-container-buttons");
  spaceshipButtons.id = `spaceship-container-buttons-${id}`;
  spaceshipButtons.append(btnAddOneCrew, btnSendSpaceship, btnDeleteSpaceship, btnInformations, btnBackToCard);
  return spaceshipButtons;
}

export function renderSpaceship(spaceship: { id: number; name: string; pilot: string; crewLimit: number; crew: string[]; inMission: boolean }) {
  const spaceshipCard = createContainer(spaceship.id);
  const name = createSpaceshipName(spaceship.id, spaceship.name);
  const pilot = createSpaceshipPilot(spaceship.id, spaceship.pilot);
  const inMission = createSpaceshipInMission(spaceship.id);
  const crewLimit = createSpaceshipCrewLimit(spaceship.id, spaceship.crewLimit);
  const crew = createSpaceshipCrew(spaceship.id);
  const img = createImage(spaceship.id);
  const btnAddOneCrew = createBtnAddOneCrew(spaceship.id);
  const btnSendSpaceship = createBtnSendSpaceship(spaceship.id);
  const btnDeleteSpaceship = createBtnDeleteSpaceship(spaceship.id);
  const btnInformations = createBtnInformations(spaceship.id);
  const btnBackToCard = createBtnBackToCard(spaceship.id);
  const buttons = createContainerButtons(spaceship.id, btnAddOneCrew, btnSendSpaceship, btnDeleteSpaceship, btnInformations, btnBackToCard);

  spaceshipCard.append(name, pilot, inMission, crewLimit, crew, img, buttons);
  document.getElementById("spaceschips-children").append(spaceshipCard);
}
