import Character from '../Character';

class Preacher extends Character {
  constructor(config = Preacher.defaultConfig) {
    super(config);
  }
}

Preacher.defaultConfig = Character.defaultConfig;
Preacher.defaultConfig.MAX_MOVES = 2;
Preacher.defaultConfig.BASE_DAMAGE = 10;
Preacher.defaultConfig.BASE_DEFENSE = 0;
Preacher.defaultConfig.MAX_FAITH = 20;

export default Preacher;
