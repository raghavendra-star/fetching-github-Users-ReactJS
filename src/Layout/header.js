import React,{useState,useContext} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";

import {Link} from "react-router-dom"

import {UserContext} from "../context/usecontext";

const Header =()=>{
    const context=useContext(UserContext);

    const [isOpen,setisOpen]=useState(false);

    const toggle=()=>setisOpen(!isOpen);

    return(
    <Navbar color="info" light expand="md">
        <NavbarBrand><Link to="/" className="text-white">GitFire</Link></NavbarBrand>

        <NavbarText className="text-white">
            {context.user?.email ? context.user.email : ""}
        </NavbarText>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
            {
                context.user ? (
                <NavItem>
                    <NavLink
                    onClick={()=>{
                        context.setUser(null);
                    }}  className="text-white">
                    LogOut
                    </NavLink>
                </NavItem>
                ) : (
            <>
                <NavItem>
                    <NavLink tag={Link} to="/Signup" className="text-white">
                    SignUp
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to="/signin" className="text-white">
                    SignIn
                    </NavLink>
                </NavItem>
            </>
                )
            }
            </Nav>
        </Collapse>
    </Navbar>
    );
}

export default Header;