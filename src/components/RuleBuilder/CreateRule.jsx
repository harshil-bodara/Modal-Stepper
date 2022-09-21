import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import Union from "../../assets/images/Union.svg";
import Transaction from "../../assets/images/transaction.svg";

const CreateRule = () => {
  return (
    <Box className='create-rule'>
        <Button className='untitle'><img src={Union} alt="Intersection"/> My first union rule <InfoIcon/></Button>
        <Box textAlign="center" mt={2}>
            <img src={Transaction} alt="transaction"/>   
            <Typography className='dark-black'>Sign the transaction...</Typography>
        </Box>
    </Box>
  )
}

export default CreateRule;
