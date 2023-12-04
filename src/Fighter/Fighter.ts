import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  attack(enemy: SimpleFighter): void;

  special?(enemy: Fighter): void;

  levelUp(): void;

}

export default Fighter;