## Getting Started

Follow these instructions to run project locally.

### Prerequisites

Follow these commands to run project successfully.

- npm

  ```sh
  npm install npm@latest -g
  ```

  - or install yarn

### Installation

1. Clone the repo

   ```sh
   git clone git@github.com:hamzaashfaq39/chatapp-frontend.git
   ```

2. Install packages in root directory

   ```sh
   npm install
   ```

3. All done :smile:

<!-- USAGE  -->

## Usage

For additional usage read docs.

<!-- ROADMAP -->

<!-- ## Roadmap -->

<!--
See the [open issues](https://github.com/magnusmage/creatachain-web-wallet/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Folder Structure Conventions

- `src:` This folder will contain all of your source code files.
- `assets:` contains all the media and font assets used in the project.
- `components:` This folder will contain reusable UI components that you can use across your application.
- `navigation:` This folder will contain all routes.
- `layout:` This folder will contain layout components that define the overall structure of your application.
- `view:` This folder will contain your application's pages. Each page should have its own folder that contains a JavaScript file with the same name as the folder.
- `utils:` This folder will contain utility functions that you can use throughout your application.
- `store:` This folder will contain all of your Redux store-related files.
- `slices:` This folder will contain all of your Redux slice files. Each slice should have its own file with a name in camel case.
- `theme:` This folder will contain all of your MUI theme-related files, such as your palletes, typography, and overrides.
- `var:` This folder will contain variables that are used throughout your application, such as API endpoints, environment variables, and schema files.

**Use short capitalized names for all JavaScript file, while all other files and folders name should be in lowercase.**

## A typical top-level directory layout

```
src
    │   App.css
    │   App.js
    │   index.css
    │   index.js
    │   reportWebVitals.js
    │
    ├─── assets
    │   ├─── fonts
    │   └─── images
    │
    ├─── components
    │   ├─── card
    │   │       index.js
    │   ├─── modals
    │   │       DeleteModal.js
    │   └─── notFound
    │           index.js
    │
    ├───layout
    │   │   index.js
    │
    ├─── navigation
    │       Routes.js
    │
    ├─── view
    │   ├─── chats
    │   ├─── people
    │   ├─── rooms
    │
    ├───store
    │   │   store.js
    │   │
    │   └─── slices
    │
    ├───theme
    │    ├───  index.js
    │       │   palette.js
    │       │   typography.js
    │       │
    │       └─── overrides
    │               index.js
    │               MuiButton.js
    │               MuiList.js
    │               MuiSvgIcon.js
    │               MuiTextField.js
    │
    ├─── utils
    │       Utils.js


```

## Contributing

For contributions **greatly appreciated**.

1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add: NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

<!-- Commit -->

## How to commit

For commit use prefixes in commit messages to provide context and clarity about the changes made to the code. This convention involves using short, descriptive prefixes such as

- `Add:` for new features
- `Update:` for modifications to existing functionality
- `Improvement:` for code improvements
- `Fix:` for bug fixes
- `Integration:` for integration
- `Remove:` for deleting code or features
- `Docs:` for documentation updates

By following a consistent commit message convention, developers can efficiently track changes to the code and easily understand the history of modifications made over time.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

```
hamza.ashfaq39@gmail.com
```
