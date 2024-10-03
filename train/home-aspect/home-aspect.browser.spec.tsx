import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import { HomeAspectAspect } from './home-aspect.aspect.js';
import type { HomeAspectBrowser } from './home-aspect.browser.runtime.js';

it('should have no routes registered', async () => {
  const homeAspect = await loadAspect<HomeAspectBrowser>(HomeAspectAspect, {
    runtime: 'browser'
  });

  expect(homeAspect.listRoutes().length).toEqual(0);
});
