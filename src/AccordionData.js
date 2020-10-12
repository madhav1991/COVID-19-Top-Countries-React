import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {TableData} from './TableData';

export function AccordionData(props){
  return(
      <Accordion className="accordion" key={props.country.TotalConfirmed}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography className={'test'}>{props.country.Country}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableData
              country={props.country}
              className="table"
          />
        </AccordionDetails>
      </Accordion>
      );
}

export default AccordionData;
