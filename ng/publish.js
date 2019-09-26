var del = require('del');
var cpx = require('cpx')
var edition = process.argv.slice(2)[0];
var package = require('./package.json');

var editions = ['staging', 'live'];
if(!edition || editions.indexOf(edition) == -1)
    throw("Edition to publish not valid");

// This will publish the /dist folder to the appropriate location
let appName = package.name;
let publishPath = `${package.config.publish_path}/${edition}`;

// Cleanup
console.log(`Cleaning up ${publishPath}...`)
del.sync(`${publishPath}/{dist/${appName}}`, { force: true })

// Publishing
console.log(`Publishing to ${publishPath}`)
cpx.copySync("dist/**/*.*", `${publishPath}/dist`) // publish dist folder (ng-app)
cpx.copySync("../dev/api/*.*", `${publishPath}/api`) // publish API folder
cpx.copySync("../**/*.cshtml", `${publishPath}/..`)