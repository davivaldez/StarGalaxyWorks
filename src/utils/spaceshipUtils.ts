import { spaceships } from "../components/spaceshipButtons/insideCardButtons";
import { Spaceship } from "../models/spaceshipModel";

export function findSpaceship(id: number) {
  return spaceships.find((spaceship: { id: number }) => spaceship.id === id) as Spaceship;
}
