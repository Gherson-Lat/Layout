import { NavLink } from "react-router-dom";



const Navbar = () => {

    const activeStyle = "underline underline-offset-8"

    return (
        <nav className="flex justify-between  items-center  fixed z-10 top-0 w-full py-5 px-8  text-sm font-light">
        {/* Lado derecho  */}
          <ul className="flex items-center  gap-3">
            <li className="font-semibold text-lgñ">
                    <NavLink  to="/About for me " className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                       } >
                        About for me
                    </NavLink >
                </li>
                
                <li>
                    <NavLink  to="/Proyects"   className={ ( {isActive} ) => 
                        isActive ? activeStyle : undefined } >
                        Proyects
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/Git-Hub" className={ ( {isActive}) =>
                     isActive ? activeStyle : undefined  } >
                        Git-Hub
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/social networks" className={ ( {isActive}) => 
                    isActive ? activeStyle : undefined}>
                    social networks
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/Skils" className={ ({isActive}) =>
                     isActive ? activeStyle :undefined} >
                        Skils
                    </NavLink>
                </li>
        </ul>

        {/* Lado izquierdo  */}
        <ul className="flex items-center gap-3">
                
                <li className="font-semibold" >      
                      Git-gub Developer 
                </li>

                <li>
                    <NavLink  to="/Home"   className={ ( {isActive} ) => 
                        isActive ? activeStyle : undefined } >
                        Home
                    </NavLink>
                </li>

                <li >
                    <NavLink  to="/MyAccount" className={( {isActive }) =>
                        isActive? activeStyle : undefined} >
                    
                        MyAccount
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/MyOrder" className={({isActive}) =>
                    isActive ? activeStyle :undefined }>
                      MyOrder
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/MyOrders" className={ ( { isActive}) =>
                    isActive ? activeStyle : undefined}>
                       MyOrders
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/NotFound" className={ ( { isActive }) =>
                    isActive ? activeStyle : undefined}>
                        NotFound
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/Signin" className={( { isActive}) => 
                    isActive ? activeStyle :undefined} >
                        Signin
                    </NavLink>
                </li>

                <li>
                💻  
                </li>

            </ul>    
        </nav>

    )
}


export default Navbar;


