import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const NavBarElement = ({ to, children}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (  
        <li className={isActive? 'active' : 'inactive'}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

export default NavBarElement;