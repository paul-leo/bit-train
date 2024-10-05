
import OrderService from './services/OrderService.js';
import AuthService from './services/AuthService.js';
import TrainService from './services/TrainService.js';
import { Service } from './types.js';

class ServiceRegistry {
  private services: Record<string, Service> = {};

  registerService(name: string, ServiceClass: new () => Service): void {
    this.services[name.toLowerCase()] = new ServiceClass();
  }

  getService(name: string): Service | undefined {
    console.log(this.services);
    return this.services[name.toLowerCase()];
  }

  initializeServices(): void {
    console.warn('Initializing services');
    this.registerService('orders', OrderService);
    this.registerService('auth', AuthService);
    this.registerService('train', TrainService);
  }
}

export default new ServiceRegistry();