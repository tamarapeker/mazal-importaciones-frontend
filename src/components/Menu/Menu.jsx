import React, { useState, useEffect, useRef } from 'react';
import {Menu} from '@material-ui/core'

import './Menu.css'

function Menu (props) {
    return (
        <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
       className="menuListCategory"
        >
            {
                props.categories.length >0 && props.categories.map(category =>{
                    return(
                        <MenuItem onClick={handleCloseMenu}>{category.category_name}</MenuItem>
                    )
                })
            }
        </Menu>
    )
}

export default Menu;