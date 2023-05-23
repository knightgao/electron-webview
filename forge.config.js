module.exports = {
  packagerConfig: {
    osxsign: {}
  },
  rebuildConfig: {},
  packagerconfig: {    
    icon: '/assets/default' 
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    // {
    //   name: '@electron-forge/maker-zip',
    //   platforms: ['darwin','linux'],
    // },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/default.jpg',
        format: 'ULFO'
      }
    }
    // {
    //   name: '@electron-forge/maker-zip',
    //   config: {},
    // },
  ],
};
