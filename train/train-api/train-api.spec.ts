import { TrainApi } from './train-api.js';

describe('train api', () => {
  it('should say hello', async () => {
    const trainApi = TrainApi.from();
    const greeting = await trainApi.getHello();
    expect(greeting).toEqual('Hello World!');
  })
});
    