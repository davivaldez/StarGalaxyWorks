import { spaceships } from "./insideCardButtons";
import { renderSpaceship } from "../spaceshipCard";
import { getShips, createShip } from "../../api/spaceshipService";

export async function loadSpaceships() {
  const ships = await getShips();
  spaceships.push(...ships);
  ships.forEach(renderSpaceship);
}

async function addSpaceship(spaceshipName: string, spaceshipPilot: string, numberSpaceshipCrewLimit: number) {
  const spaceship = {
    name: spaceshipName,
    pilot: spaceshipPilot,
    crewLimit: numberSpaceshipCrewLimit,
    crew: [],
    inMission: false,
  };

  const newSpaceship: { id: number; name: string; pilot: string; crewLimit: number; crew: string[]; inMission: boolean } = await createShip(spaceship);

  spaceships.push(newSpaceship);
  renderSpaceship(newSpaceship);
  alert(`${newSpaceship.name} criada com sucesso!`);
}

export function saveSpaceship() {
  try {
    const spaceshipName = prompt("Nome da nave: ");
    const spaceshipPilot = prompt("Piloto da nave: ");
    const stringSpaceshipCrewLimit = prompt("Limite da tripulação");

    if (!spaceshipName || !spaceshipPilot || !stringSpaceshipCrewLimit) {
      throw new Error("Erro! Campo vazio...");
    }

    const numberSpaceshipCrewLimit = Number(stringSpaceshipCrewLimit);

    if (isNaN(numberSpaceshipCrewLimit)) {
      throw new Error("Você deve inserir um número em limite da tripulação");
    }

    let spaceshipConfirm = confirm("Tem certeza que deseja criar essa nave ?");

    if (spaceshipConfirm) {
      addSpaceship(spaceshipName, spaceshipPilot, numberSpaceshipCrewLimit);
    } else {
      alert("Você cancelou a criação da nave!");
    }
  } catch (err) {
    alert(err.message);
  }
}

export function seeSpaceship() {
  const spaceshipHome = document.getElementById("spaceship-home") as HTMLElement;
  const spaceshipContainer = document.getElementById("spaceships-container") as HTMLElement;

  if (spaceshipHome && spaceshipContainer) {
    spaceshipHome.style.display = "none";
    spaceshipContainer.style.display = "flex";
  }
}

export function imprimeSpaceships() {
  try {
    if (spaceships.length === 0) {
      throw new Error("Sem naves para exibir!");
    }

    let spaceshipsInformations: string = "";
    spaceships.forEach((spaceship: { name: string; pilot: string; crewLimit: number; crew: string[]; inMission: boolean }) => {
      const spaceshipName = `Nave: ${spaceship.name}`;
      const spaceshipPilot = `Piloto: ${spaceship.pilot}`;
      const spaceshipInMission = `Em missão: ${spaceship.inMission ? "Sim" : "Não"}`;
      const spaceshipCrewLimit = `Limite da tripulação: ${spaceship.crewLimit}`;
      const spaceshipCrew = `Membros na tripulação: ${spaceship.crew.length}`;
      spaceshipsInformations += `${spaceshipName}\n${spaceshipPilot}\n${spaceshipInMission}\n${spaceshipCrewLimit}\n${spaceshipCrew}\n`;

      spaceship.crew.forEach((crewMember) => {
        spaceshipsInformations += `   -[${crewMember}]\n`;
      });

      spaceshipsInformations += "\n\n";
    });

    alert(spaceshipsInformations);
  } catch (err) {
    alert(err.message);
  }
}

export function backToHome() {
  const spaceshipHome = document.getElementById("spaceship-home") as HTMLElement;
  const spaceshipContainer = document.getElementById("spaceships-container") as HTMLElement;

  if (spaceshipHome && spaceshipContainer) {
    spaceshipHome.style.display = "flex";
    spaceshipContainer.style.display = "none";
  }
}
