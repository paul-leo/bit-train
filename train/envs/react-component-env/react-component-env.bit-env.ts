/**
 * This env uses bitdev.react/react-env, inspect it's config and API - https://bit.cloud/bitdev/react/react-env
 * Learn more on how you can customize your env here - https://bit.dev/docs/react-env/set-up-your-env
 */
import { ReactEnv } from '@bitdev/react.react-env';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Preview } from '@teambit/preview';
import { EnvHandler } from '@teambit/envs';
import { ReactPreview } from '@teambit/preview.react-preview';
import { tailwindTransformer } from '@learnbit/styling.transformers.tailwind';

const require = createRequire(import.meta.url);

export class ReactComponentEnv extends ReactEnv {
  /* a shorthand name for the env */
  name = 'react-component-env';

  /* Typescript config. Learn how to replace compiler - https://bit.dev/reference/compiling/set-up-compiler */
  protected tsconfigPath = require.resolve('./config/tsconfig.json');

  protected tsTypesPath = './types';

  /* ESLint config. Learn how to replace linter - https://bit.dev/reference/linting/set-up-linter */
  protected eslintConfigPath = require.resolve('./config/eslintrc.cjs');

  /* Prettier config. Learn how to replace formatter - https://bit.dev/reference/formatting/set-up-formatter */
  protected prettierConfigPath = require.resolve(
    './config/prettier.config.cjs'
  );

  /* Vitest config. Learn how to replace tester - https://bit.dev/reference/testing/set-up-tester */
  protected vitestConfigPath = require.resolve('./config/vitest.config.mjs');

  /* component mounting and dev-server config. Learn how to replace dev-server - https://bit.dev/reference/preview/setup-preview */
  protected previewMounter = require.resolve('./preview/mounter.js');

  protected dirName = dirname(fileURLToPath(import.meta.url));

  preview(): EnvHandler<Preview> {
    /**
     * @see https://bit.dev/docs/react-env/component-previews
     */
    return ReactPreview.from({
      mounter: require.resolve('./preview/mounter'),
      transformers: [
        tailwindTransformer({cdn:false}),
      ],
    });
  }
}

export default new ReactComponentEnv();
