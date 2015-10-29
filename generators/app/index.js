'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var lodash = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stupendous ' + chalk.red('PV field') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the component name?',
      default: 'component name'
    }];

    this.prompt(prompts, function (props) {
      this.componentName = props.componentName;
      this.componentNamePC = lodash.capitalize(lodash.camelCase(props.componentName));
      this.componentNameCC = lodash.camelCase(props.componentName);

      done();
    }.bind(this));
  },
  writing: function () {
      var componentName = this.componentNameCC;
      var destinationPath = './scripts/editor/components/fields/' + componentName + '/';

      var files = [
        'index.js'
      ];
      files.forEach(function(file) {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(destinationPath + file),
          this
        );
      }, this);

      var files = [
        'Actions.js',
        'Adapter.jsx',
        'Model.ts',
        'Store.js',
        'View.jsx'
      ];

      files.forEach(function(file) {
        this.fs.copyTpl(
          this.templatePath('field' + file),
          this.destinationPath(destinationPath + componentName + file),
          this
        );
      }, this);
    }
});
