# Skalavel TS Template

A simple skalavel/ts/tsc-watch/nodemon template

## Getting started

First clone the repository

```sh
mkdir ~/repo
cd !$
git clone https://github.com/AlphaTechnolog/skalavel-ts-template.git my-awesome-skalavel-typescript-app
cd !$
```

Install the dependencies

```sh
npm install
# or with yarn
yarn
```

## Before run the application

Copy the `.env.example` -> `.env`

```sh
cp -r ./.env.example ./.env
```

**Edit it as you like!**

## Running the application

To run the application you can use the `build` and `start` scripts:

```sh
npm run build
npm run start
```

Or if you like all in one command use `build:start` script:

```sh
npm run build:start
```

Exists a script named `build:start:nodemon` that execute `build:start` with a nodemon hot reloading:

```sh
npm run build:start:nodemon
```

## Running the application (for development)

To run the application for development exists two scripts:

- `dev`
- `dev:tsc`

The difference between `dev` and `dev:tsc` is that `dev` script execute the command `nodemon --watch src --ext .js,.ts,.json --exec ts-node src/index.ts` for hot reloading, but `dev:tsc` execute the command `tsc-watch --onSuccess 'node dist/index.js'`, this is because `nodemon` with `ts-node` compile more slow that `tsc-watch`.

Use `dev` or `dev:tsc` as you like is the same!

```sh
npm run dev
# or with dev:tsc
npm run dev:tsc
```

## Opening the application in the web

To open the application in the web, check the output of the executed script, the app have a task named `PrintPortTask`, it print the configured port in the `.env` or the default port, if the `PORT` field don't exists in the `.env`, an example output is this:

```
[I]: The configured port is 8000
[S]: Server is listening successfully!
```

In this case the configured port is `8000`, because this open [localhost:8000](http://localhost:8000)

## Enjoy

Enjoy with this template!