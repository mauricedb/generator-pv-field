var React = require('react');
var Reflux = require('reflux');
var <%= lodash.camelCase(componentName) %>Actions = require('./<%= lodash.camelCase(componentName) %>Actions');
var <%= lodash.camelCase(componentName) %>Store = require('./<%= lodash.camelCase(componentName) %>Store');
var <%= lodash.capitalize(componentName) %>Component = require('./<%= lodash.camelCase(componentName) %>Component.jsx');
var Certificate = require('../../../models/certificate.ts');

var <%= lodash.capitalize(componentName) %>Adapter = React.createClass({
    mixins: [Reflux.connect(<%= lodash.camelCase(componentName) %>Store)],
    propTypes: {
        certificate: React.PropTypes.instanceOf(Certificate).isRequired
    },
    _loadData(certificate) {
        <%= lodash.camelCase(componentName) %>Actions.loadData(certificate.registrationNumber);
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
        var {status, activitiesOnSystem} = this.state;
        var {certificate} = this.props;
        var {statusCodes} = fieldStore;

        return <<%= lodash.capitalize(componentName) %>Component 
            certificate={certificate}
            activitiesOnSystem={activitiesOnSystem}
            status={status} />;
    }
});

module.exports = <%= lodash.capitalize(componentName) %>Adapter;
