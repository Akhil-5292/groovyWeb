import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { addCart } from "../redux/action"
import Navbar from "./Navbar"


export default function Product(){
    const {id}=useParams()
    const[product,setProduct]=useState([])
    const[loading,setLoading]=useState(false)

    const dispatch= useDispatch()
    const addProduct = (product) =>{
        dispatch(addCart(product))
    }
    useEffect(()=>{
         const getProducts=async()=>{
            setLoading(true)
            const res=await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
         }
         getProducts();
    },[])

    const Loading=()=>{
        return(
            <>
            Loading...
            </>
        )
    }

    const ShowProduct=()=>{
        return(
            <>
            <Navbar/>
            <div className="col-md-6">
              <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className="text-upperCase text-black-50">
                    {product.category}
                </h4>
                <h1>
                    {product.title}
                </h1>
                <h3>
                    ${product.price}
                </h3>
                <p>
                    {product.description}
                </p>
                <button onClick={()=>addProduct(product)} className="btn btn-outline-dark">
                    Add to Cart
                </button>
                <Link to='/cart' className="btn btn-outline-dark m-2">
                    Go to Cart
                </Link>
            </div>
            </>
        )
    }
    return(
        <div>
           <div className="container">
            <div className="row">
              {loading ? <Loading/> : <ShowProduct/>}
            </div>
           </div>
        </div>
    )
}