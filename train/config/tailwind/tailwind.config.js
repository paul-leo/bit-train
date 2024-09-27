import bitPreset from './preset';

/** @type {import('tailwindcss').Config} */
export default {
  // use the basic preset to get the files from the workspace
  content: [...bitPreset.content],
  theme: {
    extend: {},
  },
  plugins: [],
};
