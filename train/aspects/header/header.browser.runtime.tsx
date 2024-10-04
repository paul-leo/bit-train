import type { HeaderConfig } from './header-config.js';
import { Action, ActionSlot } from './action.js';
import { HeaderLinkSlot, HeaderLink } from './content.js';
import { SymphonyPlatformBrowser, SymphonyPlatformAspect } from '@bitdev/symphony.symphony-platform';
import { Header } from './header.js';
import { HeaderType } from './header-type.js';
import { ReactNode } from 'react';

export class HeaderBrowser {
  constructor(
    private config: HeaderConfig,
    private actionSlot: ActionSlot,
    private headerLinkSlot: HeaderLinkSlot,
  ) {}
  
  /**
   * register a list of action.
   */
  registerAction(actions: Action[]) {
    this.actionSlot.register(actions);
    return this;
  }

  private header?: HeaderType|undefined;

  /**
   * register a new header component.
   */
  registerHeaderComponent(headerComponent: HeaderType) {
    this.header = headerComponent;
    return this;
  }

  /**
   * list all action.
   */
  listActions() {
    return this.actionSlot.flatValues();
  }
  
  /**
   * register a list of content.
   */
  registerLink(links: HeaderLink[]) {
    this.headerLinkSlot.register(links);
    return this;
  }

  private headerContents: ReactNode|undefined;

  /**
   * register contents to the header.
   * note: this overrides the header links slot.
   */
  registerContents(contents: ReactNode) {
    this.headerContents = contents;
    return this;
  }

  /**
   * list all content.
   */
  listLinks() {
    return this.headerLinkSlot.flatValues();
  }

  static dependencies = [SymphonyPlatformAspect];

  static defaultConfig: HeaderConfig = {};

  static async provider(
    [symphonyPlatform]: [SymphonyPlatformBrowser],
    config: HeaderConfig,
    [actionSlot, headerLinkSlot]: [ActionSlot, HeaderLinkSlot]
  ) {
    const headerAspect = new HeaderBrowser(config, actionSlot, headerLinkSlot);
    // register the header to the symphony layout.
    symphonyPlatform.registerLayoutEntry([
      {
        component: () => {
          const links = headerAspect.listLinks();
          const actions = headerAspect.listActions();
          const Logo = symphonyPlatform.getLogo();

          return <Header 
            logo={<Logo />} 
            actions={actions}
            links={links} 
            HeaderComponent={headerAspect.header}
          />;
        },
        position: 'top'
      }
    ]);

    return headerAspect;
  }
}

export default HeaderBrowser;
