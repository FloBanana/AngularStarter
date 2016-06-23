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
The `core.module.js` implements all util modules inside the core folders.
In the `core` folder is an subfolder `service` this represents a typical service. How this is implemented will be described in an own section. Inside the `service` folder are two files. The `service.module.js` file is the standard `module` file which already explained.
The `service.service.js`file implements the logic of the service.

The `hello-world` contains the first component of this boilerplate. It consists of three files, the obligatory `module` file which is already explained. Additional there are two further files `hello-world.component.js` which implements the logic of the module and the controller for this component and additional javascript stuff. The `hello-world.template.html` is the template of the injected component and contains the html code which will be displayed.

## new component creation

To create a new component the following steps are necessary:
1. Create a folder within the app folder with the name of the component written in `kebab-case` 
2. Inside this folder create three files and replace the `<name>` with the name of the component written in `kebab-case`: `<name>.module.js`, `<name>.component.js` and `<name>.template.html`
3. Add the following into the `<name>.module.js`:
```
'use strict';

angular.module('<name in camel-case>', ['<dependency>']);
```
4. Add the following into the `<name>.component.js`:
```
'use strict';

angular.
  module('<name in camel-case>').
  component('<name in camel-case>', {
    templateUrl: '<name in kebab-case>/<name in kebab-case>.template.html',
    controller: ['<dependency>',
        function(<dependency>){
            <logic>
        }
    ]
  });
```

5. Inside the `<name>.template.html` file is just the html code for the visualization stored

6. Add the new module into the dependencies of the main application module inside `app.module.js`

7. Add a route to new component into the `routeProvider` inside the `app.config.js` file like the following:
```
  ...
  .when('/<url>', {
    template: '<<name in kebab-case>></<name in kebab-case>>'
  })
  ...
```

8. Now you have to add the injection of the new created files into the index.html so that the modules can be known from the application.
```
...
<script src="<name in kebab-case>/<name in kebab-case>.module.js"></script>
<script src="<name in kebab-case>/<name in kebab-case>.component.js"></script>
...
```

## service
