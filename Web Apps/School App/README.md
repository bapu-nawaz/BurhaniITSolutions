## Ani Theme - Free AngularJS Dashboard Starter Theme

## [Demo](http://rawgit.com/start-angular/ani-theme/master/dist/index.html)

Ani Theme is a Boilerplate for Animated AngularJS Starter Theme written with Bootstrap LESS. Powered by Gulp.
![Preview](/examples/preview.png)

Find out more [Free Angular Themes at StartAngular.com](http://www.startangular.com/).

## Installation
1. Clone this project or Download that ZIP file
2. Make sure you have [bower](http://bower.io/), [gulp](https://www.npmjs.com/package/gulp) and  [npm](https://www.npmjs.org/) installed globally
3. On the command prompt run the following commands
- cd `project-directory`
- `bower install`
- `npm install`
- `gulp serve` - For development mode
- `gulp build` - concat, minify and generate the files for deployment


### Goodness of Bootstrap Less
In the source, we have the less files of Bootstrap attached and the variables have been updated to create this theme. You can change the variable in the less file. Animation and Transitions are in separate less file.   

### Automation tools

- [Gulp](http://gulpjs.com/)

#### Debugging tips
To use this app with xampp(etc) you will need to disable firewall permissions OR
enable CORS (Cross-Origin-Request-Service).
Or even make it simpler for one time use, open cmd as admin, navigate to Chrome where you can see chrome.exe file then execute:
`chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security`
*ALOHA !!* this newly opened browser won't stop you.