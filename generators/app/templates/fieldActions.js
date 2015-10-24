var Reflux = require('reflux');
var jquery = require('jquery');
var objectAssign = require('object-assign');
var httpClient = require('../../../../utils/httpClient');
var <%= lodash.capitalize(componentName) %>Model = require('./<%= lodash.camelCase(componentName) %>Model.ts');

var <%= lodash.camelCase(componentName) %>Actions = Reflux.createActions({
    getData: {asyncResult: true}
});


<%= lodash.camelCase(componentName) %>Actions.getData.listen(function (registrationNumber) {

    httpClient.query('api/activitiesAtSystem/' + encodeURIComponent(registrationNumber) )
        .then(
            e => e.map(<%= lodash.capitalize(componentName) %>Model.fromJSON),
            e => this.failed(e)
    );
});

module.exports = <%= lodash.camelCase(componentName) %>Actions;
