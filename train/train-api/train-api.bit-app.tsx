import { NodeServer } from '@bitdev/node.node-server';

export default NodeServer.from({
  name: 'train-api',
  mainPath: import.meta.resolve('./train-api.app-root.js'),
});
