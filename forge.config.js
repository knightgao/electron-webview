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
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/default.jpg',
        format: 'ULFO'
      }
    }
  ],
};
