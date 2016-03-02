class Character {
  constructor(config = Character.defaultConfig) {
    const {
      MAX_MOVES, BASE_DAMAGE, BASE_DEFENSE, MAX_FAITH,
      name, faithType, location, weapon, armor, board
    } = Character.defaultConfig;
    this.MAX_MOVES = config.MAX_MOVES || MAX_MOVES;
    this.BASE_DAMAGE = config.BASE_DAMAGE || BASE_DAMAGE;
    this.BASE_DEFENSE = config.BASE_DEFENSE || BASE_DEFENSE;
    this.MAX_FAITH = config.MAX_FAITH || MAX_FAITH;
    this.movesRemaining = this.MAX_MOVES;
    this.faithRemaining = this.MAX_FAITH;
    this.name = config.name || name;
    this.faithType = config.faithType || faithType;
    this.location = config.location || location;
    this.weapon = config.weapon || weapon;
    this.armor = config.armor || armor;
    this.board = config.board || board;
  }
  move() {}
  attack() {}
  special() {}
}

Character.defaultConfig = {
  MAX_MOVES: 1,
  BASE_DAMAGE: 1,
  BASE_DEFENSE: 0,
  MAX_FAITH: 1,
  name: 'Robert Paulson',
  faithType: null,
  location: { row: 0, column: 0 },
  weapon: null,
  armor: null,
  board: null
};

export default Character;