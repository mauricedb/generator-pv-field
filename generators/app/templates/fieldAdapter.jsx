var React = require('react');
var Reflux = require('reflux');
var Certificate = require('editor/models/certificate.ts');
var <%= componentNameCC %>Actions = require('./<%= componentNameCC %>Actions');
var <%= componentNameCC %>Store = require('./<%= componentNameCC %>Store');
var <%= componentNamePC %>Component = require('./<%= componentNameCC %>View.jsx');

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

module.exports = <%= componentNamePC %>Adapter;
