import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    player: Fighter, 
    private _environment: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  private singleFight(monster: Fighter | SimpleFighter): number {
    while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
      this.player.attack(monster);
      monster.attack(this.player);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fight(): number {
    const multipleFights = this._environment
      .map((monster) => this.singleFight(monster));
    return multipleFights
      .every((result: number): boolean => result === 1) ? 1 : -1;
  }
}

export default PVE;