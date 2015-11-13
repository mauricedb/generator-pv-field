import React from 'react';
import Reflux from 'reflux';
import Certificate from 'editor/models/certificate.ts';
import <%= componentNameCC %>Actions from './<%= componentNameCC %>Actions';
import <%= componentNameCC %>Store from './<%= componentNameCC %>Store';
import <%= componentNamePC %>Component from './<%= componentNameCC %>View.jsx';

var <%= componentNamePC %>Adapter = React.createClass({
    mixins: [Reflux.connect(<%= componentNameCC %>Store)],
    propTypes: {
        certificate: React.PropTypes.instanceOf(Certificate).isRequired
    },
    _loadData(certificate) {
        <%= componentNameCC %>Actions.loadData(certificate.registrationNumber, certificate.kind);
    },
    componentWillMount() {
        this._loadData(this.props.certificate);
    },
    componentWillReceiveProps(newProps) {
        var {certificate} = newProps;

        if (this.props.certificate !== certificate) {
            this._loadData(certificate);
        }
    },
    render() {
        return <<%= componentNamePC %>Component {...this.props} {...this.state} />;
    }
});

export default <%= componentNamePC %>Adapter;
