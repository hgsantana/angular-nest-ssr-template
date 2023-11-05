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

Run `npm run test` to execute the unit tests via `Karma` for Angular and `Jest` for NestJS.

## Server port

The server runs on port 4200 by default for local development. You can give another port through the `PORT` environment variable. Most cloud providers will set the right port for you automatically.

## API URL

API URL must be set within `src/environments/environment.ts` and `src/environments/environment.development.ts`. We assume `localhost:4200/api` for local development, but you need to provide the right DNS/IP and port for production (eg.: `https://yourdomain.com/api`). It must be done this way for server-side rendering to work. **You can't use relative paths like `/api`**.

## Production running

You can use `dist` folder alone in your production server. And you can call `node dist/server/main.js` from wherever folder you are in prompt, assuming folders `server` and `browser` are siblings as they are in `dist` folder after build.

Example:

- create your server folder: `mkdir /opt/example`
- copy `dist` folder content (`server` and `browser` folders) to your server folder: `cp -r dist/* /opt/example`
- run the server with port 8080: `PORT=8080 node /opt/example/server/main.js`
