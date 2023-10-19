import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex justify-center gap-10 mt-8">
            
           <aside className="flex gap-10">
           <img src="https://i.ibb.co/5ktcZ9x/Logo.jpg"/>
           <p className="text-2xl text-secondary"> Smart Wedding Event Managers</p>
           </aside>
            <div>
                <NavLink
                    to="/Home"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-600" : ""
                    }
                >
                    Home
                </NavLink>
            </div>

            <div>
                <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-600" : ""
                    }
                >
                    Register
                </NavLink>
            </div>

            <div>
                <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-600" : ""
                    }
                >
                    Services
                </NavLink>
            </div>

            <div>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-600" : ""
                    }
                >
                    Login
                </NavLink>
            </div>

            <div>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-600" : ""
                    }
                >
                    About
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
