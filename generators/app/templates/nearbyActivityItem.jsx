var React = require('react');
var moment = require('moment');
var Translate = require('react-translate-component');
var {caption, browserUtils} = require('../../../../utils');
var flowvisionConfig = require('../../../../common/services/flowvisionConfig.ts');

var NearbyActivityItem = React.createClass({
    _openActivity(activity) {
        var {registrationNumber, kind, state} = activity;
        var workflowStep = flowvisionConfig.getWorkflowBasedOnState(kind, state);
        browserUtils.openPopout(registrationNumber, kind, workflowStep.name);
    },
    render() {
        var {activity} = this.props;

        const dateFormat = 'DD MMM YYYY';
        var plannedStartDate = moment(activity.plannedStartDate).format(dateFormat);
        var plannedEndDate = moment(activity.plannedEndDate).format(dateFormat);
        var kind = caption.forKind(activity);
        var state = caption.forState(activity);


        return <li key={activity.registrationNumber}>
            <div>
                <span className='btn-link activity-popout'
                      onClick={() => this._openActivity(activity)}>
                    {kind} {activity.registrationNumber}, {state}
                </span>
            </div>
            <div>
                <Translate content='PermitVision.Label_NearbyActivitiesWorkPeriodFormat'
                           startDate={plannedStartDate}
                           endDate={plannedEndDate}/>
            </div>
            <div className='activity-title'>
                {activity.title}
            </div>
        </li>;

    }
});

module.exports = NearbyActivityItem;
