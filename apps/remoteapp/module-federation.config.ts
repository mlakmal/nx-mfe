import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remoteapp',
  exposes: {
    './Routes': 'apps/remoteapp/src/app/remote-entry/entry.routes.ts',
  },
  remotes: [],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
