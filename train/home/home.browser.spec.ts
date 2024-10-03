import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import type { HomeBrowser } from './home.browser.runtime.js';
import { HomeAspect } from './home.aspect.js';

it('should retrieve the aspect', async () => {
  const home = await loadAspect<HomeBrowser>(HomeAspect, {
    runtime: 'browser',
  });

  expect(home).toBeTruthy();
});    
