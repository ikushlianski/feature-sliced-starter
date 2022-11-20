# `shared` directory

## What should go into this folder?

- shared UI kit of the application (`shared/ui`) 
- shared auxiliary libraries (`shared/lib`) 
- general module for working with the API (`shared/api`) 
- module configuration of the application and its environment (`shared/config`)


### `shared/ui`

Shared components based on Material UI but tweaked to be used with XSell.

Components inside `ui-kit` do not contain any logic and just render what was passed them in props.

Those components should be ready to move into their separate ui-kit NPM package at any time as they may be shared with other Analog tools in the future.

### `shared/config`

Env variables that can be used in the code of the overlying layers

### `shared/api`

Code responsible for fetching from API. For example, `Redux Toolkit`'s api definition should go here

---

See [Frontend folder structure](../../README.md)
