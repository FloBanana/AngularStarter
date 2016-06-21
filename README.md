# angular starter

This is a boilerplate for an angularjs application which should implement some structure for services and directives. I'm trying to improve it from time to time and would be glad to get some input to it. I'm pretty new to angularjs and try to get a common starting point for my next projects with angularjs.

I used the phone application example directly from angular as an example to build up this.

## file structure

```
|-app
|--app.config.js
|--app.module.js
|--index.html
|--core
|---core.module.js
|---service
|----service.module.js
|----service.service.js
|--hello-world
|---hello-world.component.js
|---hello-world.module.js
|---hello-world.template.js
|-.bowerrc
|-bower.json
|-package.json
```

Inside the `app` folder all files which are directly related to the application itself will be stored.
Within this folder there are different files and subfolders. The `app.config.js` stores the relevant configuration informations like routing informations.
The `app.module.js` and nearly all other module files in this boilerplates store the dependency informations of the modules. The `app.config.js` especially stores the dependency informations of the whole application.
The `index.html` references all files which are needed for this project.

Inside the `core` folder are the kind of modules which are useful everywhere in the application like services.
The `core.module`

## service
