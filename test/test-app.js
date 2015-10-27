'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('pv8-field:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        componentName: 'field name'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './scripts/editor/components/fields/fieldName/index.js',
      './scripts/editor/components/fields/fieldName/fieldNameActions.js',
      './scripts/editor/components/fields/fieldName/fieldNameAdapter.jsx',
      './scripts/editor/components/fields/fieldName/fieldNameComponent.jsx',
      './scripts/editor/components/fields/fieldName/fieldNameModel.ts',
      './scripts/editor/components/fields/fieldName/fieldNameStore.js'
    ]);
  });

  it('exposes the proper component name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/index.js', /module.exports = FieldName/]
    ]);
  });

});
