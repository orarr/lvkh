import React from 'react';
import { shallow } from 'enzyme';
import CoreLayout from 'layouts/CoreLayout';
import { AuthLayoutComponent } from 'routes/Auth/layouts/AuthLayout/AuthLayout';

describe('(Layout) Auth/AuthLayout', () => {
  let children;
  let wrapper;

  beforeEach(() => {
    children = <div />;
    wrapper = shallow(<AuthLayoutComponent>{children}</AuthLayoutComponent>);
  });

  it('Should extend the `CoreLayout`', () => {
    const layout = (
      <CoreLayout>
        <div className="auth-container">
          {children}
        </div>
      </CoreLayout>
    );

    expect(wrapper.contains(layout)).to.be.true();
  });
});
