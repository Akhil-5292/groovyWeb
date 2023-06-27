// for add item

export const addCart = (product)=>{
    return {
        type: "ADDITEM",
        payload: product
    }
}


// for remove item

export const delCart = (product)=>{
    return {
        type: "DELITEM",
        payload: product
    }
}