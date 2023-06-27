import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom"

export default function Cart(){

    const state = useSelector((state)=>state.addItem)
    const dispatch=useDispatch()

    const handleClose=(item)=>{
        dispatch(delItem(item))
    }
    const cartItems=(cartItem)=>{
        return(
            <div key={cartItem.id}>
                <div>
                <button onClick={()=>handleClose(item)}>
                </button>
                <div>
                    <div>
                        <img src={cartItem.image} alt={cartItem.title} height="200px" width="200px"/>
                    </div>
                    <div>
                        <h3>
                            {cartItem.title}
                        </h3>
                        <p>
                            ${cartItem.price}
                        </p>
                    </div>
                </div>
                </div>
            </div>
        )
    }

    const emptyCart=()=>{
        return(
            <div>
                <h3>
                    Your Cart Is Empty
                </h3>
            </div>
        )
    }

    const button= ()=>{
        return(
            <div>
                <Link to='/checkout' className="btn btn-outline-primary">
                 Proceed To CheckOut
                </Link>
            </div>
        )
    }
    return(
        <div>
          {state.length===0 && emptyCart()}
          {state.length !==0 && state.map(cartItems)}
          {state.length !==0 && button()}
        </div>
    )
}