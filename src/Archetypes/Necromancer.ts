import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private damage: number;
  private _energyType: EnergyType = 'mana';
  private static _createdArchetypesInstancesNecromancer = 0;

  constructor(name: string) {
    super(name);
    
    this.damage = 0;
    Necromancer._createdArchetypesInstancesNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypesInstancesNecromancer;
  }
}

export default Necromancer;