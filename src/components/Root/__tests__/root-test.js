import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Root from './../index';

const expect = chai.expect;

describe('root', function() {

  it('renders without problems ', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(React.createElement(Root, {}, 'text'));
    const comp = renderer.getRenderOutput();

    expect(comp).to.exist;
    expect(comp.type).to.be.equal('div');
  });
});
