export default function ProductCard({ title, img, price, quantity, id, handleClickOnProducts }) {

    const isProductAvailable = quantity > 0;

    const handleBuyClick = () => {
        if (isProductAvailable) {
            handleClickOnProducts({ title, img, price, quantity, id })

        }
    }


    return (

        <div className="product-card">
            {quantity === 0 && (<div className="out-of-stock">
                <p>Out Of Stock</p>
            </div>)}
            <img src={img} id="img-product-card" alt="Product" />
            <h3 className="card-text"> {title} </h3>
            <p className="card-text"> Pris: {price} kr </p>
            <p className="card-text"> Antal i lager: {quantity}</p>
            <button id="product-card-button" onClick={() => handleBuyClick({
                title, img, price, quantity, id
            })}
                disabled={!isProductAvailable}>
                <i className='fa fa-shopping-cart' id="cart-icon-on-icon"></i> Köp </button>
        </div>

    )
}

