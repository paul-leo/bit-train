import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import type { HeaderBrowser } from './header.browser.runtime.js';
import { HeaderAspect } from './header.aspect.js';

it('should retrieve the aspect', async () => {
  const header = await loadAspect<HeaderBrowser>(HeaderAspect, {
    runtime: 'browser',
  });

  expect(header).toBeTruthy();
});    
