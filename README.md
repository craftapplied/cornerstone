# Nest Auth

## Installation

```bash
# install with pnpm
$ pnpm install

# check updates
$ pnpm outdated

# update outdated
$ npm update
```

## Running the app

```bash
# run in development mode
$ pnpm run start

# run in watch mode
$ pnpm run start:dev

# run in production mode
$ pnpm run start:prod
```

## Managing the database

```bash
# ensure postgresql is stopped
$ brew services stop postgresql

# run postgres container
$ docker-compose up -d

# stop postgres container
$ docker-compose down

# stop postgres container, remove volumn
$ docker-compose down -v
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
