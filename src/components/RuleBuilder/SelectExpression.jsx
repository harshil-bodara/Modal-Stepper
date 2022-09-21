import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import Union from "../../assets/images/Union.svg";
import Intersection from "../../assets/images/intersaction.svg";
import Complement from "../../assets/images/complement.svg";
import Difference from "../../assets/images/difference.svg";

import "../../assets/sass/main.scss";

const SelectExpression = () => {
  return (
    <>
        <Typography className='dark-black' mb={2} sx={{fontWeight: 700,fontSize: '16px'}}>Which Type of Rule do you want to create? </Typography>
        <Box>
            <Button className='btn-option'><img src={Union} alt="union"/> Union <InfoIcon/></Button>
            <Button className='btn-option'><img src={Intersection} alt="Intersection"/> Intersection <InfoIcon/></Button>
            <Button className='btn-option'><img src={Complement} alt="Complement"/> Complement <InfoIcon/></Button>
            <Button className='btn-option'><img src={Difference} alt="Difference"/> Difference <InfoIcon/></Button>
        </Box>
    </>
  )
}

export default SelectExpression;
