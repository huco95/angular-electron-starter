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
      "^/tailwind.config.js",
      "^/tsconfig.app.json",
      "^/tsconfig.json",
      "^/tsconfig.spec.json",
      "^/README.md",
      "^/LICENSE",
      "^/CODE_OF_CONDUCT.md"
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
