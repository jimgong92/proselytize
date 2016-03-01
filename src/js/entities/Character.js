class Character {
  constructor(config = Character.defaultConfig) {
    this.MAX_MOVES = config.MAX_MOVES || Character.defaultConfig.MAX_MOVES;
    this.movesRemaining = this.MAX_MOVES;
    this.baseDamage = config.baseDamage || Character.defaultConfig.baseDamage;
    this.MAX_FAITH = config.MAX_FAITH || Character.defaultConfig.MAX_FAITH;
    this.faithRemaining = this.MAX_FAITH;
    this.faithType = config.faithType || Character.defaultConfig.faithType;
    this.location = config.location || Character.defaultConfig.location;
    this.weapon = config.weapon || Character.defaultConfig.weapon;
    this.armor = config.armor || Character.defaultConfig.armor;
  }
}

Character.defaultConfig = {
  maxMoves: 1,
  baseDamage: 1,
  MAX_FAITH: 1,
  faithType: null,
  location: { row: 0, column: 0 },
  weapon: null,
  armor: null
};

export default Character;