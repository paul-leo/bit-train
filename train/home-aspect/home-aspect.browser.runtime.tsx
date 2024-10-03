import { mount } from "./mount-client.js";
import { mountServer } from "./mount-server.js";
import { Route, RouteSlot } from "./route.js";
import { HomeAspectConfigConfig } from "./home-aspect-config.js";

export class HomeAspectBrowser {
  constructor(
    /**
     * slot for routes provided by other aspects.
     */
    private routeSlot: RouteSlot
  ) {}

  /**
   * render the app in the browser.
   */
  async render() {
    const routes = this.listRoutes();
    return mount({
      routes
    });
  }

  /**
   * render the app ssr.
   */
  async renderSsr(aspectId: string, { path, cookie }: { path: string, cookie: string }) {
    const routes = this.listRoutes();
    return mountServer(path, cookie, {
      routes,
    });
  }

  /**
   * register a new route.
   */
  registerRoute(routes: Route[]) {
    this.routeSlot.register(routes);
    return this;
  }

  /**
   * list all routes.
   */
  listRoutes() {
    return this.routeSlot.flatValues();
  }

  static dependencies = [];

  static defaultConfig: HomeAspectConfig = {};

  static async provider(deps: [], config: HomeAspectConfig, [routeSlot]: [RouteSlot]) {
    return new HomeAspectBrowser(routeSlot);
  }
}

export default HomeAspectBrowser;
