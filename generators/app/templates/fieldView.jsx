var React = require('react');
var Translate = require('react-translate-component');
var moment = require('moment');
var statusCodes = require('reflux-store-status/statusCodes');
var ProgressIndicator = require('../../../../common/progressIndicator.jsx');
var Certificate = require('../../../models/certificate.ts');
var <%= componentNamePC %>Model = require('./<%= componentNameCC %>Model.ts');

var <%= componentNamePC %>View = React.createClass({
    propTypes: {
        certificate: React.PropTypes.instanceOf(Certificate).isRequired,
        <%= componentNameCC %>Data: React.PropTypes.arrayOf(<%= componentNamePC %>Model).isRequired,
        status: React.PropTypes.string.isRequired
    },
    _getActivitiesOnSystem(systemCode) {
        var {registrationNumber} = this.props.certificate;

        return (this.props.activitiesOnSystem[systemCode] || [])
            .filter(activity => activity.registrationNumber !== registrationNumber);
    },
    _onItemSelected(e) {
        this.props.onChange(this.props.options.propertyName, e.target.value);
    },
    _renderData() {
        var {data, componentData} = this.props;

        if (this.props.editMode) {
            var options = componentData.map((item, index) =>
                <option key={ index }
                    value={ item.action } >
                {item.action}
            </option>);

            return <select className="form-control"
                           value={ data }
                           onChange={ this._onItemSelected }>
                    { options }
                </select>;
        }

        return {data};
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
                <Translate content={ 'PermitVision.Label_' + this.props.options.resourceKey } />
            </div>
            <div className="fieldvalue">
                { fieldValue }
            </div>
        </div>;
    }
});

module.exports = <%= componentNamePC %>View;
