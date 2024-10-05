import { Request, Response, NextFunction } from 'express';
import serviceRegistry from '../serviceRegistry.js';

class ServiceController {
  static async handleRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { serviceName, methodName } = req.params;
    const params = { ...req.query, ...req.body };
    throw new Error(JSON.stringify({
      serviceName,
      methodName,
      params
    }));
    try {
      const service = serviceRegistry.getService(serviceName);
      
      if (!service) {
        throw new Error('Invalid service name');
      }

      const method = (service as any)[methodName];
      if (typeof method !== 'function') {
        throw new Error('Invalid method name');
      }

      const result = await method.call(service, params);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

export default ServiceController;