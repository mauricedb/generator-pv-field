import React from 'react';
import Translate from 'react-translate-component';
import statusCodes from 'reflux-store-status/statusCodes';
import ProgressIndicator from 'common/progressIndicator.jsx';
import Certificate from 'editor/models/certificate.ts';
import <%= componentNamePC %>Model from './<%= componentNameCC %>Model.ts';

var <%= componentNamePC %>View = React.createClass({
    propTypes: {
        certificate: React.PropTypes.instanceOf(Certificate).isRequired,
        <%= componentNameCC %>Data: React.PropTypes.arrayOf(<%= componentNamePC %>Model).isRequired,
        status: React.PropTypes.string.isRequired
    },
    _onItemSelected(e) {
        this.props.onChange(this.props.options.propertyName, e.target.value);
    },
    _renderData() {
        var {data, <%= componentNameCC %>Data} = this.props;

        if (this.props.editMode) {
            var options = <%= componentNameCC %>Data.map((item, index) =>
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

        return <span>{data}</span>;
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

export default <%= componentNamePC %>View;
