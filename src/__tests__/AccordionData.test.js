import React from 'react';
import { shallow, mount } from 'enzyme';
import AccordionData from "../AccordionData";

const getMinProps = newProps => Object.assign({}, {
  country: "Canada"
}, newProps);

const setup = props => shallow(<AccordionData {...props} />);


describe('Component: AccordionData', () => {
  describe('component rendering', () => {
    const props = getMinProps();
    const wrapper = setup(props);
    const AccordionData = wrapper.find('AccordionData');

    it('should render with the correct class', () => {
      expect(AccordionData.render().hasClass(className)).toBe(true);
    });

    it('should render with the correct props', () => {
      expect(AccordionData.props()).toMatchObject({
        ...defaultProps
      });
    });
  });

  describe('component accordion', () => {
    const props = getMinProps({
      country: "Canada"
    });
    const wrapper = setup(props);
    const AccordionData = wrapper.find('AccordionSummary');

    it('should render with the correct class', () => {
      expect(AccordionData.length).toEqual(1);});

    it('AccordionData should render with the correct props', () => {
      expect(AccordionData.props()).toMatchObject({
        "aria-controls": 'panel1a-content',
        id: "panel1a-header",
      });
    });

    it('should render with the correct props', () => {
      const TableData = wrapper.find('TableData');
      expect(TableData.props()).toMatchObject({
        country: "Canada",
        className: "table",
      });
    });
  });
});

