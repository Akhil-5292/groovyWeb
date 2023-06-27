import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux" 
import { addCart } from "../redux/action"
import Navbar from "./Navbar"
    
    export default function Product(){
    const {id}=useParams()
    const[product,setProduct]=useState([])
    const [loading,setLoading]=useState(false)
 
    const dispatch=useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
        }
        getProducts();
    }, [])
 
    const Loading=()=>{
        return(
            <>
            Loading...
            </>
        )
    }

    const ShowProducts=()=>{
       return(
        <>
        <Navbar/>
        <div className="product">
           <img src={product.image} alt={product.title} height='300px' width='300px'/>
           <div>
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <button onClick={()=>addProduct(product)} className="btn btn-outline-dark">Add To Cart</button>
            <Link className="btn btn-outline-dark">Go To Cart</Link>
           </div>
        </div>
        </>
       )
    }

    return(
     <div>
        <div>
            {loading ? <Loading/> : <ShowProducts/>}
        </div>
     </div>
    )
}