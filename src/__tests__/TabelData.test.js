import React from 'react';
import { shallow} from 'enzyme';
import TableData from "../TableData";

const getMinProps = newProps => Object.assign({}, {
    country: "Canada"
}, newProps);

const setup = props => shallow(<TableData {...props} />);


describe('Component: TableData', () => {
  describe('component rendering', () => {
    const props = getMinProps();
    const wrapper = setup(props);
    const TableData = wrapper.find('TableData');

    it('should render with the correct class', () => {
      expect(TableData.render().hasClass(className)).toBe(true);
    });

    it('should render with the correct props', () => {
      expect(TableData.props()).toMatchObject({
        ...defaultProps
      });
    });
  });

  describe('component Table', () => {
    const props = getMinProps({
      country: "Canada"
    });
    const wrapper = setup(props);
    const AccordionData = wrapper.find('Table');

    it('should render with the correct class', () => {
      expect(AccordionData.length).toEqual(1);});
  });
});

