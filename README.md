<div style="display: flex; justify-content: center;">
  <img src="https://blog.ninja-squad.com/assets/images/angular_gradient.png" alt="angular" width="250"/>
  <img src="https://www.electronjs.org/es/assets/img/logo.svg" alt="electron" width="200" />
</div>

# Introduction

Angular 17 and Electron 27 starter template to build web and desktop applications.

## Features

- Angular 17
- Electron 27
- Electron forge configured for windows build
- Tailwind CSS configured
- Eslint configured with standard rules


## Getting started

Clone the repository:

```bash
git clone url
```

Install dependencies:

```bash
npm install
```

## Project structure

| Folder       | Description                        |
|--------------|------------------------------------|
| electron/src | Contains the Electron application. |
| src          | Contains the Angular application.  |
| dist         | Contains the Angular build.        |
| out          | Contains the Electron build.       |

## Commands

| Command                  | Description                                                                                                                                  |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `npm run start`          | Execute the app in the web browser with development configuration.                                                                           |
| `npm run build`          | Build the app for web browsers with production configuration.                                                                                |
| `npm run electron-start` | Build and start the electron app with hot-reload on changes (only angular process, electron process is not reloaded unless it is restarted). |
| `electron-package`       | Build and package the electron app into a platform-specific executable bundle, platforms are based on your `forge.config.js` config.         |
| `electron-make`          | Build, package and create distributables for your application based on your `forge.config.js` config.                                        |

## Electron forge configuration

Electron forge is configured to build the app for windows platform only, you can change this configuration in `forge.config.js` file to build for other platforms.
You can check the available platforms and how to configure them in [Electron forge documentation](https://www.electronforge.io/config/makers).

