import React from 'react';

import { Heading } from '../styles/Header';
import {
    Nav,
    NavLink,
    NavMenu,
} from '../styles/NavBar'
const Header = () => {
    return (
        <>
            <Heading>Recipes App</Heading>
            <Nav>
                <NavMenu>
                    <NavLink to="/" className="link" activeClassName="active" exact activeStyle>
                        Recipes List
                    </NavLink>
                    <NavLink to="/add" className="link" activeClassName="active" activeStyle>
                        Add Recipe
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Header;