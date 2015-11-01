var Reflux = require('reflux');
var storeStatusMixin = require('reflux-store-status');
var <%= componentNameCC %>Actions = require('./<%= componentNameCC %>Actions');

var <%= componentNameCC %>Store = Reflux.createStore({
    mixins: [storeStatusMixin],
    listenables: [<%= componentNameCC %>Actions],
    init() {
        this._state.<%= componentNameCC %>Data = [];
    },
    getInitialState() {
        return this._state;
    },
    reset() {
        this.resetToInitialStatus();
        this.init();
    },
    onLoadDataCompleted(<%= componentNameCC %>Data) {
        this._state.<%= componentNameCC %>Data = <%= componentNameCC %>Data;
        this.ready(this._state);
    }
});

module.exports = <%= componentNameCC %>Store;
