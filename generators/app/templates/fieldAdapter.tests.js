var React = require("react");
var TestUtils = require('react-testutils-additions');

var CertificateBuilder = require('../../../../testUtilities/builders/certificateBuilder');
var httpBackend = require('../../../../testUtilities/httpBackend');

var <%= componentNamePC %>Adapter = require('editor/components/fields/<%= componentNameCC %>');
var <%= componentNameCC %>Store = require('editor/components/fields/<%= componentNameCC %>/<%= componentNameCC %>Store');

fdescribe('The <%= componentNamePC %> Adapter', () => {
  var component;

  beforeAll(done => {
    var certificate = new CertificateBuilder("1234")
      .build();

    var props = {
      certificate,
      options: {
        propertyName: '<%= componentNameCC %>',
        resourceKey: '<%= componentNamePC %>'
      },
      editMode: true
    };

    httpBackend.mock(/api\/certificates\/1234\/audittrail/, [{}]);

    <%= componentNameCC %>Store.listen(state => {
      if (state.status === <%= componentNameCC %>Store.statusCodes.READY) {
        setTimeout(done);
      }
    });

    component = TestUtils.renderIntoDocument(<<%= componentNamePC %>Adapter {...props} />);
  });

  it('can be rendered', () => {
    expect(component).toBeDefined();
  });

  it('will render the dropdown', () => {
    var controls = TestUtils.find(component, '.form-control');
    expect(controls.length).toBe(1);
  });

});
