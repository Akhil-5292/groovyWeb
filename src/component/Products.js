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

    const filterProducts=(cat)=>{
      const updatedList=data.filter((x)=>x.category===cat)
      setFilter(updatedList)
    }
    const ShowProducts = () => {
        return (
            <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("electronics")}>Electronic</button>
            </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4" >
                                <div class="card h-100 text-center p-4" key={product.id} style={{width: "18rem"}}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height='250px'/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <Link to={`/products/${product.id}`} class="btn btn-primary">Buy Now</Link>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <> 
            <Navbar/>  
         <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="d-flex justify-content-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
        </>

    )
}