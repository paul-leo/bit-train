import type { ApplicationInstance } from '@teambit/application';
import { Port } from '@teambit/toolbox.network.get-port';
import type { HomeAspectConfig } from './home-aspect-config.js';
import { BackendServer, BackendSlot } from './backend.js';
import { startGateway } from './home-aspect-gateway.js';

export class HomeAspectNode {
  constructor(
    private backendSlot: BackendSlot,
    private config: HomeAspectConfig
  ) {}

  /**
   * run the app in the node runtime.
   */
  async run() {
    const [gatewayFrom, gatewayTo] = this.config.gatewayPort;
    const gatewayPort = await Port.getPort(gatewayFrom, gatewayTo);
    const platformPort = process.env.NODE_RUNTIME_PORT 
      ? parseInt(process.env.NODE_RUNTIME_PORT, 10) 
      : gatewayPort;
      
    const services = await this.runBackendServers();
    const gateway = await startGateway(services, {
      port: platformPort,
    });

    console.log(`gateway server is listening on ${gateway.port}`);
  }

  private runBackendServers(): Promise<ApplicationInstance[]> {
    const [fromPort, toPort] = this.config.servicePortRange;
    const backendServers = this.listBackendServers();

    return Promise.all(backendServers.map(async (backendServer) => {
      const servicePort = await Port.getPort(fromPort, toPort);
      const context = {
        port: servicePort
      };

      return backendServer.run(context);
    }));
  }

  /**
   * register a backend server.
   */
  registerBackendServer(backends: BackendServer[]) {
    this.backendSlot.register(backends);
    return this;
  }

  /**
   * list backends.
   */
  listBackendServers() {
    return this.backendSlot.flatValues();
  }

  static defaultConfig: HomeAspectConfig = {
    gatewayPort: [5000, 5010],
    servicePortRange: [5100, 5200],
  }

  static dependencies = [];

  static async provider(
    deps: [],
    config: HomeAspectConfig,
    [backendSlot]: [BackendSlot]
  ) {
    const homeAspect = new HomeAspectNode(
      backendSlot,
      config
    );

    return homeAspect;
  }
}

export default HomeAspectNode;
