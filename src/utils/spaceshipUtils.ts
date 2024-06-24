import { spaceships } from "../components/spaceshipButtons/insideCardButtons";

export function findSpaceship(id: number) {
  return spaceships.find((spaceship: { id: number }) => spaceship.id === id) as {
    id: number;
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };
}
