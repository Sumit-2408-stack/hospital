import { NavLink } from "react-router-dom";

export const Headers = () => {
    return ( 
    <header> 
<div className="container">
    <div className=" navbar-grid">
        <div className="Logo"> 
            <NavLink to ="/">
        <h1> ➕Life Line</h1>
        </NavLink>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to = "/">Home</NavLink>
                </li>
                <li>
                    <NavLink to = "/about">About</NavLink>
                </li>
                <li>
                    <NavLink to = "/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to ="/doctor"> Doctor</NavLink>
                </li>
                
            </ul>
        </nav>
    </div>
</div>
    </header>
    );
};