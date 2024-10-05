import express from 'express';
import { TrainApi } from "./train-api.js";
import routes from './route.js';

export function run() {
  const app = express();
  const trainApi = TrainApi.from();
  const port = process.env.PORT || 3000;

  /**
   * learn more on the express docs:
   * https://expressjs.com/en/starter/hello-world.html
   */
  app.get('/', async (req, res) => {
    const greeting = await trainApi.getHello();
    res.send(greeting);
  });
  app.use('/api', routes);
  
  const server = app.listen(port, () => {
    console.log(`🚀  Server ready at: http://localhost:${port}`);
  });

  return {
    port,
    // implement stop to support HMR.
    stop: async () => {
      server.closeAllConnections();
      server.close();
    }
  };
}
