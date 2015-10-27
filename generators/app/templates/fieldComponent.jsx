var React = require('react');
var Translate = require('react-translate-component');
var moment = require('moment');
var statusCodes = require('reflux-store-status/statusCodes');
var ProgressIndicator = require('../../../../common/progressIndicator.jsx');
var Certificate = require('../../../models/certificate.ts');
var <%= lodash.capitalize(componentName) %>Model = require('./<%= lodash.camelCase(componentName) %>Model.ts');

var <%= lodash.capitalize(componentName) %>Component = React.createClass({
    propTypes: {
        certificate: React.PropTypes.instanceOf(Certificate).isRequired,
        <%= lodash.camelCase(componentName) %>Data: React.PropTypes.arrayOf(<%= lodash.capitalize(componentName) %>Model).isRequired,
        status: React.PropTypes.string.isRequired
    },
    _getActivitiesOnSystem(systemCode) {
        var {registrationNumber} = this.props.certificate;

        return (this.props.activitiesOnSystem[systemCode] || [])
            .filter(activity => activity.registrationNumber !== registrationNumber);
    },
    _renderData() {
        var {componentData} = this.props;

        var items = componentData.map(item => <li>
                {moment(item.date).format('YYYY-MM-DD')}
                {item.userName}
                {item.action} 
            </li>);

        return <ul>
            {items}
        </ul>;
    },
    render() {
        var {status} = this.props;
        var fieldValue;

        if (status === statusCodes.PENDING || status === statusCodes.INITIAL) {
            fieldValue = <ProgressIndicator />;
        } else if (status === statusCodes.READY) {
            fieldValue = this._renderData();
        } else {
            fieldValue = <Translate content='PermitVision.Label_Error'/>;
        }

        return <div className="row editrow">
            <div className="fieldname">
                <Translate content='PermitVision.Label_<%= lodash.capitalize(componentName) %>'/>
            </div>
            <div className="fieldvalue">
                { fieldValue }
            </div>
        </div>;
    }
});

module.exports = <%= lodash.capitalize(componentName) %>Component;
