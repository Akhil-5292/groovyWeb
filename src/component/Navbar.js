import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export default function Navbar() {
    const state=useSelector((state)=>state.handleCart)
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="#">Groovy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/products">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                   <div className="buttons">
                    <Link to="/login" className="btn btn-outline-dark">
                        <i class="fa fa-sign-in me-1"></i>
                      Login
                    </Link>
                    <Link to="/" className="btn btn-outline-dark ms-2">
                        <i class="fa fa-user-plus me-1"></i>
                      Register
                    </Link>
                    <Link to="/cart" className="btn btn-outline-dark ms-2">
                        <i class="fa fa-shopping-cart me-1"></i>
                      Cart ({state.length})
                    </Link>
                   </div>
                </div>
            </div>
        </nav>
    )
}