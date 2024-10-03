import type { HomeConfig } from './home-config.js';


export class HomeNode {
  constructor(
    private config: HomeConfig,
  ) {}
  
  static dependencies = [];

  static defaultConfig: HomeConfig = {};

  static async provider(
    []: [],
    config: HomeConfig,
  ) {
    const home = new HomeNode(config);
    

    return home;
  }
}

export default HomeNode;
