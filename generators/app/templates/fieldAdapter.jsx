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
        <%= lodash.camelCase(componentName) %>Actions.loadData(certificate.registrationNumber, certificate.kind);
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
        var {status, <%= lodash.camelCase(componentName) %>Data} = this.state;
        var {certificate} = this.props;

        return <<%= lodash.capitalize(componentName) %>Component 
            certificate={certificate}
            <%= lodash.camelCase(componentName) %>Data={<%= lodash.camelCase(componentName) %>Data}
            status={status} />;
    }
});

module.exports = <%= lodash.capitalize(componentName) %>Adapter;
