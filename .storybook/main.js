module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../packages/**/*.story.tsx', '../packages/**/*.story.mdx'],
  // TODO: wait for theme switch complete
  // features: {
  //   storyStoreV7: true,
  // },
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    {
      /**
      Once "display full source" is restored as the default behavior of addon-storysource, @storybook/addon-docs can be
      uninstalled (as it is provided as part of addon-essentials) and this config can be removed
      See: https://github.com/storybookjs/storybook/tree/master/addons/storysource#displaying-full-source
      */
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'none',
  },
  managerWebpack: async (config, options) => {
    // * storybook can support custom title, we should set that by our self
    // * that may be change in future version update
    // https://github.com/storybookjs/storybook/blob/8940c2a3ca/lib/manager-webpack5/src/presets/manager-preset.ts#L89
    config.plugins
      .filter((plugin) => plugin.constructor?.name === 'HtmlWebpackPlugin')
      .forEach((plugin) => {
        plugin.userOptions.title = 'Juno Storybook';
      });

    return config;
  },
  // refs,
  // managerBabel,
  // features,
};
