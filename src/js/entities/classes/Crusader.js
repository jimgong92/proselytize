import Character from '../Character';

class Crusader extends Character {
  constructor(config = Crusader.defaultConfig) {
    super(config);
  }
}

Crusader.defaultConfig = Character.defaultConfig;
Crusader.defaultConfig.MAX_MOVES = 2;
Crusader.defaultConfig.BASE_DAMAGE = 6;
Crusader.defaultConfig.MAX_FAITH = 20;

export default Crusader;
