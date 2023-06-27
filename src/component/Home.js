import Navbar from "./Navbar";
import Products from "./Products";

export default function Home() {
    return (
        <div classNameName="hero">
            <Navbar/>
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="bg" height='650px'/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div classNameName="container">
                        <h5 className="card-title display-3">NEW SEASON ARRIVALS</h5>
                        <p className="card-text">
                            CHECK OUT ALL THE TRENDS
                        </p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}