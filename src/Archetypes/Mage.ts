import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private damage: number;
  private _energyType: EnergyType = 'mana';
  private static _createdArchetypesInstancesMage = 0;

  constructor(name: string) {
    super(name);

    this.damage = 0;
    Mage._createdArchetypesInstancesMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypesInstancesMage;
  }
}

export default Mage;