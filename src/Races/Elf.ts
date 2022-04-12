import Race from './Race';

class Elf extends Race {
  private _maxLifePointsElf: number;
  private static _createdRacesInstancesElf = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePointsElf = 99;
    Elf._createdRacesInstancesElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePointsElf;
  }

  static createdRacesInstances() {
    return Elf._createdRacesInstancesElf;
  }
}

export default Elf;