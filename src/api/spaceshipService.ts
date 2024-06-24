const url = "http://localhost:3000/spaceships";

export async function getShips() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro ao buscar naves!");
    }

    return await response.json();
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

export async function createShip(spaceship: {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spaceship),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar nave!");
    }

    return await response.json();
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

export async function updateShip(spaceship: { id: number }) {
  try {
    const response = await fetch(`${url}/${spaceship.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spaceship),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar nave!");
    }
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteShip(id: number) {
  try {
    const response = await fetch(`${url}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Erro ao deletar nave!");
    }
  } catch (err) {
    console.log(err.message);
  }
}
