import Race from './Race';

class Orc extends Race {
  private _maxLifePointsOrc: number;
  private static _createdRacesInstancesOrc = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePointsOrc = 74;
    Orc._createdRacesInstancesOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePointsOrc;
  }

  static createdRacesInstances() {
    return Orc._createdRacesInstancesOrc;
  }
}

export default Orc;