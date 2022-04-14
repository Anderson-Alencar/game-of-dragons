import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _c1: Fighter, private _c2: Fighter) {
    super(_c1);
  }

  fight(): number {
    while (this._c1.lifePoints > 0 && this._c2.lifePoints > 0) {
      this._c1.attack(this._c2);
      this._c2.attack(this._c1);
    }

    return this._c1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;