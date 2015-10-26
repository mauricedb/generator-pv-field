var Reflux = require('reflux');
var storeStatusMixin = require('reflux-store-status');
var <%= lodash.camelCase(componentName) %>Actions = require('./<%= lodash.camelCase(componentName) %>Actions');

var <%= lodash.camelCase(componentName) %>Store = Reflux.createStore({
    mixins: [storeStatusMixin],
    listenables: [<%= lodash.camelCase(componentName) %>Actions],
    init() {
            this._state = {
                <%= lodash.camelCase(componentName) %>Data: []
        };
    },
    getInitialState() {
        return this._state;
    },
    reset() {
        this.resetToInitialStatus();
        this.init();
    },
    onGetDataCompleted(<%= lodash.camelCase(componentName) %>Data) {
        this._state.<%= lodash.camelCase(componentName) %>Data = <%= lodash.camelCase(componentName) %>Data;
        this.ready(this._state);
    }
});

module.exports = <%= lodash.camelCase(componentName) %>Store;