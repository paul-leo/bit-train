import type { HomeConfig } from './home-config.js';
import type { Badge, BadgeSlot } from './badge.js';
import {
  SymphonyPlatformBrowser,
  SymphonyPlatformAspect,
} from '@bitdev/symphony.symphony-platform';

export class HomeBrowser {
  constructor(private config: HomeConfig, private badgeSlot: BadgeSlot) {}

  static dependencies = [SymphonyPlatformAspect];

  static defaultConfig: HomeConfig = {};

  static async provider(
    [symphonyPlatform]: [SymphonyPlatformBrowser],
    config: HomeConfig,
    [badgeSlot]: [BadgeSlot]
  ) {
    const home = new HomeBrowser(config, badgeSlot);
    symphonyPlatform.registerRoute([
      {
        path: '/',
        component: home.HelloWorld,
      },
    ]);
    badgeSlot.register([
      {
        name: 'home',
        component: () => {
          return <div>Home</div>;
        },
      },
    ]);
    symphonyPlatform.registerLayoutEntry([
      {
        component: () => {
          return <div>Home</div>;
        },
        position: 'top',
      },
    ]);
    return home;
  }

  // 提供一个 React 组件
  HelloWorld = () => {
    return <h1>Hello World</h1>;
  };

  // 或者如果你想基于配置返回不同的内容
  getHelloWorld() {
    return () => <h1>Hello {this.config?.name || 'World'}</h1>;
  }

  registerUserBadge(badges: Badge[]) {
    this.badgeSlot.register(badges); // an API for registering new values to the slot.
    return this; // returning `this` is useful for chaining, but no required.
  }

  /**
   * list all badges plugged-in by other aspects.
   */
  listBadges() {
    return this.badgeSlot.flatValues(); // provide access to registered slot values. can be private as needed.
  }

  /**
   * API for aspects to plugin their user badge.
   */
}

export default HomeBrowser;
