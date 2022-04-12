import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private damage: number;
  private _energyType: EnergyType = 'stamina';
  private static _createdArchetypesInstancesWarrior = 0;

  constructor(name: string) {
    super(name);
    
    this.damage = 0;
    Warrior._createdArchetypesInstancesWarrior += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypesInstancesWarrior;
  }
}

export default Warrior;