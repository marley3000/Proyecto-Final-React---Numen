
const Product = ({data, addToCart}) => {

    const {id, name, price} = data; 

    return (
        <div className="product">
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onclick={() => addToCart(id, data)}>Agregar</button>
        </div>
    )
}

export default Product