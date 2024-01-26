module.exports = {
  packagerConfig: {
    icon: "src/assets/favicon.ico",
    asar: true,
    ignore: [
      "^/[.].+",
      "^/electron/tsconfig.json",
      "^/electron/src",
      "^/out",
      "^/src",
      "^/angular.json",
      "^/package-lock.json",
      "^/README.md",
      "^/tailwind.config.js",
      "^/tsconfig.app.json",
      "^/tsconfig.json",
      "^/tsconfig.spec.json",
    ],
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "angular-electron-starter",
        title: "Angular electron starter",
        setupIcon: "src/assets/icons/favicon.ico",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
