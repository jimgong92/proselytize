import Character from '../Character';

class Cleric extends Character {
  constructor(config = Cleric.defaultConfig) {
    super(config);
  }
}

Cleric.defaultConfig = Character.defaultConfig;
Cleric.defaultConfig.MAX_MOVES = 2;
Cleric.defaultConfig.BASE_DAMAGE = 5;
Cleric.defaultConfig.BASE_DEFENSE = 2;
Cleric.defaultConfig.MAX_FAITH = 20;

export default Cleric;
