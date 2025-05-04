import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <header>
            <div className="container">
                <div className="header-div">
                    <div>
                        <img src={logo2} className="img-fluid" alt="Logo" />
                    </div>
                    <div className="">
                        {isLoggedIn ? (
                            <>
                                <div className="user-div">
                                    <button className="btn dropdown-toggle" type="Link" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false"><img src="https://bootstrapget.com/demos/clove-dental-care-admin/assets/images/doctor5.png"/></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                        <li><Link className="dropdown-item">Profile</Link></li>
                                        <li><Link className="dropdown-item">Settings</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item text-danger" onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <Link className="btn btn-primary" to="/login">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
