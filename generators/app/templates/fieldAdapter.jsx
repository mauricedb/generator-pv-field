var React = require('react');
var Reflux = require('reflux');
var <%= componentNameCC %>Actions = require('./<%= componentNameCC %>Actions');
var <%= componentNameCC %>Store = require('./<%= componentNameCC %>Store');
var <%= componentNamePC %>Component = require('./<%= componentNameCC %>Component.jsx');
var Certificate = require('../../../models/certificate.ts');

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
        var {status, <%= componentNameCC %>Data} = this.state;
        var {data, certificate, options, editMode, onChange} = this.props;

        return <<%= componentNamePC %>Component
            data={data}
            certificate={certificate}
            <%= componentNameCC %>Data={<%= componentNameCC %>Data}
            status={status}
            editMode={editMode}
            onChange={onChange}
            options={options}/>;
    }
});

module.exports = <%= componentNamePC %>Adapter;
