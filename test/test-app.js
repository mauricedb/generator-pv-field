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
      './scripts/editor/components/fields/fieldName/fieldNameActions.ts',
      './scripts/editor/components/fields/fieldName/fieldNameAdapter.jsx',
      './scripts/editor/components/fields/fieldName/fieldNameModel.ts',
      './scripts/editor/components/fields/fieldName/fieldNameStore.ts',
      './scripts/editor/components/fields/fieldName/fieldNameView.jsx'
    ]);
  });

  it('exposes the proper component name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/index.js', /export default FieldName/]
    ]);
  });

  it('exposes the proper actions name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/fieldNameActions.ts', /export default fieldNameActions/]
    ]);
  });

  it('exposes the proper adapter name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/fieldNameAdapter.jsx', /export default FieldNameAdapter/]
    ]);
  });

  it('exposes the proper model name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/fieldNameModel.ts', /export default FieldNameModel/]
    ]);
  });

  it('exposes the proper store name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/fieldNameStore.ts', /export default fieldNameStore/]
    ]);
  });

  it('exposes the proper view name', function () {
    assert.fileContent([
      ['./scripts/editor/components/fields/fieldName/fieldNameView.jsx', /export default FieldNameView/]
    ]);
  });
});
