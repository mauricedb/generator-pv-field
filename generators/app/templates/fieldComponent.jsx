var React = require('react');
var Translate = require('react-translate-component');
var moment = require('moment');
var NearbyActivityItem = require('./nearbyActivityItem.jsx');
var ProgressIndicator = require('../../../../common/progressIndicator.jsx');
var Certificate = require('../../../models/certificate.ts');

var DieldComponent = React.createClass({
    propTypes: {
        certificate: React.PropTypes.instanceOf(Certificate).isRequired,
        activitiesOnSystem: React.PropTypes.object.isRequired,
        status: React.PropTypes.string
    },
    _getActivitiesOnSystem(systemCode) {
        var {registrationNumber} = this.props.certificate;

        return (this.props.activitiesOnSystem[systemCode] || [])
            .filter(activity => activity.registrationNumber !== registrationNumber);
    },
    _renderData() {
        var {certificate} = this.props;
        var {plannedWorkingPeriod} = certificate;
        var startDate = '';
        var endDate = '';
        const dateFormat = 'DD MMM YYYY';

        if (plannedWorkingPeriod && plannedWorkingPeriod.plannedStartDate) {
            startDate = moment(plannedWorkingPeriod.plannedStartDate).format(dateFormat);
        }

        if (plannedWorkingPeriod && plannedWorkingPeriod.plannedEndDate) {
            endDate = moment(plannedWorkingPeriod.plannedEndDate).format(dateFormat);
        }

        return certificate.selectedWorkObjects.map(wo => {
            var activities;
            var activitiesOnSystem = this._getActivitiesOnSystem(wo.systemCode);

            if (activitiesOnSystem.length) {
                activities = <ul>
                    {activitiesOnSystem.map(activity => <NearbyActivityItem key={activity.registrationNumber}
                                                                            activity={activity}/>)}
                </ul>;

            } else {
                activities = <div>
                    <Translate content='PermitVision.Label_NoNearbyActivitiesAtSystem'/>
                </div>;
            }

            return <div key={wo.systemCode}>
                <img src="./images/system_icon.png" className='system-icon' alt=""/>
                <Translate content='PermitVision.Label_NearbyActivitiesAtSystemHeader'
                           systemName={wo.systemDescription}
                           startDate={startDate}
                           endDate={endDate}/>
                {activities}
            </div>;
        });
    },
    render() {
        var {status, statusCodes} = this.props;
        var fieldValue;

        if (status === statusCodes.PENDING || status === statusCodes.INITIAL) {
            fieldValue = <ProgressIndicator />;
        } else if (status === statusCodes.READY) {
            fieldValue = this._renderData();
        }

        return <div className="row editrow">
            <div className="fieldname">
                <Translate content='PermitVision.Label_Field'/>
            </div>
            <div className="fieldvalue">
                { fieldValue }
            </div>
        </div>;
    }
});

module.exports = FieldComponent;
