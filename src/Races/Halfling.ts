import Race from './Race';

class Halfling extends Race {
  private _maxLifePointsHalfling: number;
  private static _createdRacesInstancesHalfling = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePointsHalfling = 60;
    Halfling._createdRacesInstancesHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePointsHalfling;
  }

  static createdRacesInstances() {
    return Halfling._createdRacesInstancesHalfling;
  }
}

export default Halfling;