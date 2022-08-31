import React, { useState, useEffect, useRef } from 'react';
import {Menu} from '@mui/material'

import './Menu.css'

interface Props {

}

const Header: React.FC<Props> = (props): JSX.Element => {
    return (
        <Menu
        id="account-menu"
        // anchorEl={anchorEl}
        open={true}
        // onClose={handleCloseMenu}
       className="menuListCategory"
        >
            {/* {
                props.categories.length >0 && props.categories.map(category =>{
                    return(
                        <MenuItem onClick={handleCloseMenu}>{category.category_name}</MenuItem>
                    )
                })
            } */}
        </Menu>
    )
}

export default Menu;