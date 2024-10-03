import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import { HomeAspectAspect } from './home-aspect.aspect.js';
import type { HomeAspectNode } from './home-aspect.node.runtime.js';

it('should have an existing node runtime', async () => {
  const homeAspect = await loadAspect<HomeAspectNode>(HomeAspectAspect, {
    runtime: 'node'
  });

  expect(homeAspect).toBeTruthy();
});
