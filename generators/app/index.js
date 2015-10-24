'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.lodash = require('lodash');
    this.path = require('path');

    this.argument('componentName', {
      type: String,
      required: true
    });
  },
  prompting: function () {
    // var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stupendous ' + chalk.red('PV field') + ' generator!'
    ));

    // var prompts = [{
    //   type: 'confirm',
    //   name: 'createComplex',
    //   message: 'Would you like to create a complex field?',
    //   default: true
    // }];

    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someOption;

    //   done();
    // }.bind(this));
  },

  writing: function () {
      // this.log('this.props.createComplex = ', this.props.createComplex);

      var files = [
        'index.js',
        'fieldAdapter.jsx',
        'fieldActions.js',
        'fieldModel.ts'
      ];
      files.forEach(function(file) {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(file),
          this
        );
      }, this);

      // this.fs.copy(
      //   this.templatePath('index.js'),
      //   this.destinationPath('package.json')
      // );
      // this.fs.copy(
      //   this.templatePath('_bower.json'),
      //   this.destinationPath('bower.json')
      // );
    }
});
