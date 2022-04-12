import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private damage: number;
  private _energyType: EnergyType = 'stamina';
  private static _createdArchetypesInstancesRanger = 0;

  constructor(name: string) {
    super(name);
    
    this.damage = 0;
    Ranger._createdArchetypesInstancesRanger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypesInstancesRanger;
  }
}

export default Ranger;