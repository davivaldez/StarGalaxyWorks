import { findSpaceship } from "../../utils/spaceshipUtils";
import { updateShip, deleteShip } from "../../api/spaceshipService";

export let spaceships: object[] = [];

export async function addOneCrew(id: number) {
  try {
    const crewMember = prompt("Insira um tripulante: ");

    if (!crewMember) {
      throw new Error("Tripulante não informado!");
    }

    const crewMemberConfirm = confirm("Tem certeza que deseja adicionar esse tripulante a nave ?");

    if (crewMemberConfirm) {
      const spaceship = findSpaceship(id);

      if (spaceship.crew.length >= spaceship.crewLimit) {
        alert("Limite da tripulação excedida!");
      } else {
        spaceship.crew.push(crewMember);
        await updateShip(spaceship);
        alert(`${crewMember} adicionado à ${spaceship.name} com sucesso!`);
      }
    } else {
      alert(`Tripulante ${crewMember} não foi adicionado a nave!`);
    }
  } catch (err) {
    alert(err.message);
  }
}

export async function sendSpaceship(id: number) {
  try {
    const missionConfirm = confirm("Tem certeza que deseja enviar a nave para uma missão ?");

    if (!missionConfirm) {
      throw new Error("Missão cancelada!");
    } else {
      const spaceship = findSpaceship(id);

      if (!spaceship.inMission) {
        const limit = spaceship.crewLimit * 0.3;

        if (spaceship.crew.length >= Math.floor(limit)) {
          spaceship.inMission = true;
          await updateShip(spaceship);
          alert(`${spaceship.name} enviada para missão!`);
        } else {
          alert("Tripulação insuficiente");
        }
      } else {
        alert(`${spaceship.name} já está em uma missão!`);
      }
    }
  } catch (err) {
    alert(err.message);
  }
}

export async function deleteSpaceship(id: number) {
  try {
    const spaceship = findSpaceship(id);
    const deleteShipConfirm = confirm(`Tem certeza que deseja deletar a nave ${spaceship.name} ?`);

    if (!deleteShipConfirm) {
      throw new Error("Exclusão da nave cancelada!");
    } else {
      document.getElementById(`spaceship-card-${id}`).remove();
      await deleteShip(id);
      const filteredShips = spaceships.filter((ship: { id: number }) => ship.id !== id);
      spaceships = [...filteredShips];
      alert(`${spaceship.name} deletada com sucesso!`);
    }
  } catch (err) {
    alert(err.message);
  }
}
