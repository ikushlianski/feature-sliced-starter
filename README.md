# Feature-Sliced methodology starter

## Folder structure

The folder structure follows [Feature Sliced Design methodology](https://feature-sliced.design/docs/reference/units).

It operates 3 structural units:
1) Layers, from top to bottom
   - app
   - processes
   - pages
   - widgets
   - features
   - entities
   - shared
2) Slices (diagram, note, todo, tag, user)
3) Segments (ui, model, lib, api, config)


Here are layers and slices:
```
├── app/
|   # Application composition layer
|   # Only contains abstract initialization logic and static assets
|
├── processes/
|   # Slices implementing page-independent workflows or workflows involving multiple pages
|   ├── auth
|   ├── payment
|   ├── quick-tour
|   └── ...
|
├── pages/
|   # Slices implementing complete application views
|   ├── login
|   |
|   ├── dashboard
|   |   # Due to routing specifics, this layer can contain nested structures
|   |   ├── edit
|   |   └── stats
|   |
|   ├── diagram
|   └── ...
|
├── widgets/
|   # Slices implementing various combinations of abstract and / or business units from lower layers,
|   # to deliver isolated atomic User Interface fragments
|   ├── navbar
|   ├── tag-list
|   ├── todo-list
|   └── ...
|
├── features/
|   # Sliced implementing user scenarios, which usually operate on business entities
|   ├── list-projects
|   ├── create-project
|   ├── toggle-todo
|   └── ...
|
├── entities/
|   # Slices implementing business units in terms of which application business logic works
|   ├── diagram
|   ├── part
|   ├── tag
|   ├── note
|   └── ...
|
├── shared/
|   # This layer is a set of abstract Segments
|   # It means that it must not contain any business units or business-related logic
```

Each **slice** may contain the following **segments**:

1) `ui`. UI representation of the module. It contains React components.
2) `model`. Business logic of the module (hooks, checks etc.)
3) `api`. Anything that calls APIs to get some data
4) `lib`. Helpers and utility logic specific to this slice (project, todo, note, tag etc.)

Guidelines:
1) Highest-level layer is `app`, lower-layer level is `shared`. Higher-level layers import lower-level ones, but not vice versa.
2) Files from the same level cannot import each other. E.g. two features cannot import each other. Instead, they need to be composed on a higher level, for example on the Widget or Page level.
3) The lower the code level, the more dangerous it is to make changes there, since they are imported into multiple higher-level modules.
4) Each layer and slice exposes its own public api

```
└── features/               # 
       ├── auth-form /      # Internal structure of the feature
       |     ├── ui/        #
       |     ├── model/     #
       |     ├── {...}/     #
       ├── index.ts         # Entrypoint features with its public API


**/**/index.ts
export { Form as AuthForm } from "./ui"
export * as authFormModel from "./model"
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Lints the Typescript and Javascript files inside the `src` folder and fixes formatting issues. The linter is a combination of ESLint and Prettier.

You can find Prettier rules in `.prettierrc.json`.

If the linter finds warnings during the check, it exits asking you to fix the issue.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
