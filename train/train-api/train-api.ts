
/**
 * train api
 */
export class TrainApi {
  
  /**
   * say hello.
   */
  async getHello() {
    return 'Hello World!';
  }

  /**
   * create a new instance of a train api.
   */
  static from() {
    return new TrainApi();
  }
}
