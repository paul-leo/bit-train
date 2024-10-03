import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import type { HomeNode } from './home.node.runtime.js';
import { HomeAspect } from './home.aspect.js';

it('should retrieve the aspect', async () => {
  const home = await loadAspect<HomeNode>(HomeAspect, {
    runtime: 'node',
  });

  expect(home).toBeTruthy();
});    
