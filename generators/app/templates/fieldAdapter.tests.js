import React from "react";
import TestUtils from 'react-testutils-additions';

import CertificateBuilder from '../../../../testUtilities/builders/certificateBuilder';
import httpBackend from '../../../../testUtilities/httpBackend';

import <%= componentNamePC %>Adapter from 'editor/components/fields/<%= componentNameCC %>';
import <%= componentNameCC %>Store from 'editor/components/fields/<%= componentNameCC %>/<%= componentNameCC %>Store';

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
