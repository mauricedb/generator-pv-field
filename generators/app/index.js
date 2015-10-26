'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.lodash = require('lodash');
    this.path = require('path');
  },
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
      default: 'component'
    }];

    this.prompt(prompts, function (props) {
      this.componentName = props.componentName;

      done();
    }.bind(this));
  },
  writing: function () {
      var componentName = this.lodash.camelCase(this.componentName);
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
        'Component.jsx',
        'Model.ts',
        'Store.js'
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
