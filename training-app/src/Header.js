import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                <div className="me-3">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                            data-bs-toggle="minimize">
                        <span className="icon-menu"></span>
                    </button>
                </div>
                <div>
                    <Link className="navbar-brand brand-logo" to="/">
                        <h2>Shop</h2>
                    </Link>
                    <Link className="navbar-brand brand-logo-mini" to="/">
                        <h2>Shop</h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-top">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                        <h1 className="welcome-text">
                            Admin, <span className="text-black fw-bold">Zubair Ali</span>
                        </h1>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <form className="search-form" action="#">
                            <i className="icon-search"></i>
                            <input type="search" className="form-control" placeholder="Search Here"
                                   title="Search here"/>
                        </form>
                    </li>
                    <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                        <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            <img className="img-xs rounded-circle" src="images/faces/face8.jpg" alt="Profile image"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown"
                             aria-labelledby="UserDropdown">
                            <div className="dropdown-header text-center">
                                <img className="img-md rounded-circle" src="images/faces/face8.jpg"
                                     alt="Profile image"/>
                                <p className="mb-1 mt-3 font-weight-semibold">Zubair Ali</p>
                                <p className="fw-light text-muted mb-0">zubair.ali@invozone.com</p>
                            </div>
                            <a className="dropdown-item">
                                <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile
                            </a>
                            <a className="dropdown-item">
                                <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> Logout
                            </a>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-bs-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    );
}

export default Header;