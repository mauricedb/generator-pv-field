import Reflux from 'reflux';
import httpClient from 'utils/httpClient';
import <%= componentNamePC %>Model from './<%= componentNameCC %>Model.ts';

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

export default <%= componentNameCC %>Actions;
