import Reflux = require('reflux');
import {query} from 'utils/httpClient';
import <%= componentNamePC %>Model from './<%= componentNameCC %>Model.ts';

var <%= componentNameCC %>Actions = Reflux.createActions({
    loadData: {asyncResult: true}
});

<%= componentNameCC %>Actions.loadData.listen(function (registrationNumber, kind) {
    query('api/certificates/' + encodeURIComponent(registrationNumber) + '/audittrail?kind=' + encodeURIComponent(kind))
        .then(
            e => this.completed(e.map(<%= componentNamePC %>Model.fromJSON)),
            e => this.failed(e)
    );
});

export default <%= componentNameCC %>Actions;
