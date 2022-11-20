# `pages` directory

## What should go into `pages`?

- Entire pages
- Screens
- Common layout between pages

All the logic of display, business rules etc should be implemented by composing the underlying layers (`shared/ui-kit`, `entities`, `features` and `widgets`).

Multiple features/widgets can co-exist on the same page. A page is the best place to combine multiple features. 

Two features cannot import each other. They should be co-located on the `widget` or `page` level.

---

See [Frontend folder structure](../../README.md)
