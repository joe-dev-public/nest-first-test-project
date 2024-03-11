A first test project for learning about Nest.js

Start with `npm run start:dev`.

> [!NOTE]
> See `README-default.md` for Nest.js's automatically-generated readme.

### Todo:

- [ ] Set up Docker
- [ ] Adjust endpoints so they have the same shape as FastAPI test project.
  -  (Will allow for option of using same FE project for both BEs.)
- [ ] Set up Docker Compose (integrating this API BE, DB, FE)


Requirements for running with non-Compose Docker:

- `docker network create some-network` (if you haven't added this network already)
- `make build` (if you haven't built before, but no harm in running if you have :)
- `make up`

Then `make down` to stop.

Also useful:

- `make logs`
- `make bash`