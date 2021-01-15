### Challenge Project for the startup Futurestay. https://moguelor.github.io/futurestay-challenge-project/#/

Challenge project created to show the knowledge acquired as UI Developer in frontend technologies like `react.js`.

### Started Kit

The initial structure is created by [create-react-app](https://create-react-app.dev/), the setup for a modern web app.

### Installation

Application requires [Node.js](https://nodejs.org/es/) to run.

Execute the follow commands.

```
git clone https://github.com/moguelor/futurestay-challenge-project.git
cd futurestay-challenge-project
yarn install
yarn start
```

> Note | The project is running on port `3000`.

### Structure Folder

For the folder organization, is used the metodology `structure by features`. I believe that is a easy way to manage the scalability of big project. You can split one big application into the smallest ones `divide and conquer`.

```
|-- src                     # Main code.
    |-- common              # Reusable code between the pages.
        |-- assets          # Assets to use in the applications. (images,fonts, logos)
        |-- components      # Reusable components.
        |-- hocs            # Reusable react hocs.
        |-- hooks           # Reusable react hooks.
        |-- utils           # Utils functions.
    |-- dashboard           # Each application module, is commonly defined by the direction from react-router.
        |-- components      # Dumb components used in the specific module.
        |-- Container.js    # Smart component frequently with redux.
        |-- index.js        # Module Entry point, to expose all the things reusables.
    |-- App.js              # Application component.
    |-- index.css           # General styles.
    |-- index.js            # Application entry point.
```

### Libraries

Here are the main libraries used in the project.

#### UI

* [react](https://es.reactjs.org/) - Modern web library to use in the UI.

#### CSS

* [styled-components](https://styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress.
* [react-bootstrap](https://react-bootstrap.netlify.app/) - The most popular front-end framework Rebuilt for React.

### Routing

* [react-router](https://reactrouter.com/) - Declarative routing for react.js.

#### Configuration

* [@craco/craco](https://github.com/gsoft-inc/craco) - Easy and comprehensible configuration layer for create-react-app.

#### Deploy

* [gh-pages](https://github.com/tschaub/gh-pages) - Publish files to a gh-pages branch on GitHub.

### Required feature.

*  Implement a `desktop` view responsive.

### Extra features

* Implemented responsive views on `tablet` and `mobile` design using bootstrap's grid system.

* Implemented routing with react-router to navigate in the application.

* Added a Dark Theme, Implemented theming in the project, created with a own custom hook `useThemeMode` with a persist in `localStorage`.

  > Note | If your computer or your browser has a dark theme configured, the hook will recognize and will show the application in the dark mode.

### [TODO]

* Migrate code to [Typescript](https://www.typescriptlang.org/).
* Add unit testings with [Jest](https://jestjs.io/)
* Generate a library component with [Storybook](https://storybook.js.org/)
* Add mobile gestures with [Hammer](https://hammerjs.github.io/)
