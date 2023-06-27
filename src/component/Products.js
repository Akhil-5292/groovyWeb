import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                setData(await res.clone().json())
                setFilter(await res.json());
                setLoading(false)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center" style={{gap:'5px'  }}>
                    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="products">
                                    <div class="card h-100" key={product.id} style={{width: '18rem'}}>
                                        <img src={product.image} class="card-img-top" alt={product.title} height='250px'/>
                                            <div class="card-body">
                                                <h5 class="card-title">{product.title}</h5>
                                                <p class="card-text">${product.price}</p>
                                                <Link to={`/products/${product.id}`} class="btn btn-primary">Buy Now</Link>
                                            </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }


    return (
        <>
            {/* <Navbar /> */}
            <div className="container">
                <div className="row">
                    <h1 className="d-flex justify-content-center">
                        Latest Products
                    </h1>
                    <hr/>
                </div>
                <div >
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </>

    )
}