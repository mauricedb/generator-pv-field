var Reflux = require('reflux');
var httpClient = require('../../../../utils/httpClient');
var <%= lodash.capitalize(componentName) %>Model = require('./<%= lodash.camelCase(componentName) %>Model.ts');

var <%= lodash.camelCase(componentName) %>Actions = Reflux.createActions({
    loadData: {asyncResult: true}
});


<%= lodash.camelCase(componentName) %>Actions.loadData.listen(function (registrationNumber, kind) {

    httpClient.query('api/certificates/' + encodeURIComponent(registrationNumber) + '/audittrail?kind=' + kind)
        .then(
            e => this.completed(e.map(<%= lodash.capitalize(componentName) %>Model.fromJSON)),
            e => this.failed(e)
    );
});

module.exports = <%= lodash.camelCase(componentName) %>Actions;
