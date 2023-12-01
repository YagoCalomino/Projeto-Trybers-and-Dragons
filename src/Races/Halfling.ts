import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;

  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }
}

export default Halfling;