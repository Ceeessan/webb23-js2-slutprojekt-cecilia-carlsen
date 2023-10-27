
export default function CartIcon({ setWhatToShow, userArrayWithProducts, userQuantity }) {

    function handleClickOnIcon() {
        if (userArrayWithProducts.length === 0) {
            setWhatToShow('emptyCart')
        } else {
            setWhatToShow('cartPage')
        }
    }


    return (
        <div id="cart-div">
            <i className='fa fa-shopping-cart' id="cart-icon" onClick={handleClickOnIcon}></i>
            <div>
                <p id="cart-quantity" onClick={handleClickOnIcon}>{userQuantity}</p>
            </div>
        </div>
    )
}