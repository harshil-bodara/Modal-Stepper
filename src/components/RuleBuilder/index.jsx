import React, { useState } from 'react';

import { Box, Modal, Typography,Stepper,Step,StepLabel, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

import SelectExpression from './SelectExpression';
import RuleSet from './RuleSet';
import CreateRule from './CreateRule';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    borderRadius:"6px",
    p: "36px 50px 50px 50px",
    "&:focus-visible":{
        outline:"none"
    }
};

const steps = [
    'Select Expression',
    'Define Rule Set',
    'Create Rule',
];

const RuleBuilder = (open, setOpen) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="step-modal"
        >
            <Box sx={style}>
                <Box display="flex" justifyContent="space-between" alignItems="center"> 
                    <Typography 
                        className='dark-black' 
                        variant='h3' 
                        display="flex"
                        alignItems="center"
                        sx={{
                            fontWeight: 700,
                            fontSize: '16px',
                            'svg':{
                                fontSize: '16px',
                                ml:1
                            }
                        }}
                        >Rule Builder <InfoIcon/>
                    </Typography>
                    <Box 
                        variant="span"
                        sx={{
                            'svg':{
                                fontSize: '28px',
                                fill:"#5E6E78",
                            }
                        }}>
                        <CloseIcon/>
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }} className="stepper-build">
                    <Stepper activeStep={activeStep} alternativeLabel sx={{padding:"36px 0 20px 0"}}>
                        {steps.map((label,index) => {
                             return (
                               <Step key={label}>
                                 <StepLabel>{label}</StepLabel>
                               </Step>
                             );
                        })}
                    </Stepper>
                    <Box className='select-expression' sx={{
                        padding: '30px 45px 30px 45px',
                        border: '1px solid #DCDFE2',
                        borderRadius: '6px'
                    }}>
                        {/* <SelectExpression/> */}
                        {/* <RuleSet/> */}
                        <CreateRule/>
                    </Box>
                    <Box align="end" mt={3}>
                        <Button className='btn-create'>Create Rule</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default RuleBuilder
