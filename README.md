# Angular 16 / Nest 10 / SSR - Template

This project is a template for building websites with server-side rendering, using Angular 16 and NestJS 10 as a base.

The project is localized to Brazil, with currency, language and date configuration. If you want to use it in another setup/language, remember to change the `<html>` tag in `index.html` and the configuration in `src/app/app.config.ts`.

## Angular

The Angular (frontend) files are in `src` folder.

## NestJS

The NestJS (backend) files are in `server` folder.

## Development server

Run `npm run dev:ssr` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. You can use `dist` folder alone to run your server. No need for `node_modules`.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
