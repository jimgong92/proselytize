import Character from '../Character';

class Crusader extends Character {
  constructor(config) {
    super(config);
    this.MAX_MOVES = this.movesRemaining = 2;
    this.MAX_FAITH = this.faithRemaining = 20;
    this.BASE_DAMAGE = 10;
    this.BASE_DEFENSE = 2;
  }
}

export default Crusader;
