var React = require("react");
var TestUtils = require('react-testutils-additions');

var CertificateBuilder = require('../../../../testUtilities/builders/certificateBuilder');
var httpBackend = require('../../../../testUtilities/httpBackend');

var ComponentNameAdapter = require('editor/components/fields/componentName');
var componentNameStore = require('editor/components/fields/componentName/componentNameStore');

fdescribe('The ComponentName Adapter', () => {
  var component;

  beforeAll(done => {
    var certificate = new CertificateBuilder("1234")
      .build();

    var props = {
      certificate,
      options: {
        propertyName: 'componentName',
        resourceKey: 'ComponentName'
      },
      editMode: true
    };

    httpBackend.mock(/api\/certificates\/1234\/audittrail/, [{}]);

    componentNameStore.listen(state => {
      if (state.status === componentNameStore.statusCodes.READY) {
        setTimeout(done);
      }
    });

    component = TestUtils.renderIntoDocument(<ComponentNameAdapter {...props} />);
  });

  it('can be rendered', () => {
    expect(component).toBeDefined();
  });

  it('will render the dropdown', () => {
    var controls = TestUtils.find(component, '.form-control');
    expect(controls.length).toBe(1);
  });

});
