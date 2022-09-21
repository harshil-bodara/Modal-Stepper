import React, { useState } from 'react';

import { Box, Button, OutlinedInput,MenuItem,FormControl,Select, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CloseIcon from '@mui/icons-material/Close';

import Corporate from "../../assets/images/corporate.svg";
import Union from "../../assets/images/Union.svg";

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const menuItems = [
    {
        ItemImg : Corporate,
        Title : "Passport issued by U.S. (USA)",
        Icon : <InfoIcon/>
    },
    {
        ItemImg : Corporate,
        Title : "Corporated in U.S. (USA)",
        Icon : <InfoIcon/>
    },
    {
        ItemImg : Union,
        Title : "union (G7 individuals)",
        Icon : <InfoIcon/>,
        IconLink : <InsertLinkIcon/>
    }
];

const RuleSet = () => {
    const [personName, setPersonName] = useState([]);
  
    const handleChange = (event) => {
      const {target: { value },} = event;
      setPersonName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    return (
        <Box className='rule-set'>
            <Button className='untitle'><img src={Union} alt="Intersection"/> Untitled Union Rule <InfoIcon/></Button>
            <Box className='search-sect'>
                <Box className='selected-item' display="flex" alignItems="center">
                    <Box component="span"><img src={Union} alt="Intersection"/><Typography component="label">union (G7 individuals)</Typography><InfoIcon/><InsertLinkIcon/><CloseIcon/></Box>
                    <Box component="span"><img src={Union} alt="Intersection"/><Typography component="label">union (G7 individuals)</Typography><InfoIcon/><InsertLinkIcon/><CloseIcon/></Box>
                </Box>
                <FormControl sx={{ width: '100%' }}>
                    <Box className='search-icon'><SearchIcon/></Box>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput  />}
                        MenuProps={MenuProps}
                        placeholder="Search for an existing Rule or insert Rule ID"
                    >
                    {menuItems.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                           <Box className='item-img' component="span"><img src={name.ItemImg} alt="Intersection"/></Box>{name.Title} {name.Icon} {name.IconLink}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

export default RuleSet;
