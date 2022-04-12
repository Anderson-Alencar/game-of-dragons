import Race from './Race';

class Dwarf extends Race {
  private _maxLifePointsDwarf: number;
  private static _createdRacesInstancesDwarf = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePointsDwarf = 80;
    Dwarf._createdRacesInstancesDwarf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePointsDwarf;
  }

  static createdRacesInstances() {
    return Dwarf._createdRacesInstancesDwarf;
  }
}

export default Dwarf;