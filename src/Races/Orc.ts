import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;

  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }
}

export default Orc;