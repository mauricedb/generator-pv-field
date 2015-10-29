var Reflux = require('reflux');
var httpClient = require('utils/httpClient');
var <%= componentNamePC %>Model = require('./<%= componentNameCC %>Model.ts');

var <%= componentNameCC %>Actions = Reflux.createActions({
    loadData: {asyncResult: true}
});

<%= componentNameCC %>Actions.loadData.listen(function (registrationNumber, kind) {
    httpClient.query('api/certificates/' + encodeURIComponent(registrationNumber) + '/audittrail?kind=' + encodeURIComponent(kind))
        .then(
            e => this.completed(e.map(<%= componentNamePC %>Model.fromJSON)),
            e => this.failed(e)
    );
});

module.exports = <%= componentNameCC %>Actions;
