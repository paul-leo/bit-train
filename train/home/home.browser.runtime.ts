import type { HomeConfig } from './home-config.js';


export class HomeBrowser {
  constructor(
    private config: HomeConfig,
  ) {}
  
  static dependencies = [];

  static defaultConfig: HomeConfig = {};

  static async provider(
    []: [],
    config: HomeConfig,
  ) {
    const home = new HomeBrowser(config);
    

    return home;
  }
}

export default HomeBrowser;
