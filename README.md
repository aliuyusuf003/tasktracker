# vue-crash-2021 set up
1 <script src="https://unpkg.com/vue@next"></script> // mini project
2 npm install -g @vue/cli // latest stable.
note - any property defined in the root instance(App) is available for all components registered in it.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
-This generates the files to be deployed.
serve -s dist // This serve the generated production files
--json-server --watch db.json  // using fake json server.

```

### Vue Router
npm i vue-router@next // creating vue router


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
