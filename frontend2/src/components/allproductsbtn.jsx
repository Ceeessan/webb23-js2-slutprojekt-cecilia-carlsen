export default function AllProductsBtn({ handleClickForProducts }) {

    return (
        <div id="all-products-div">
            <button id="all-products-btn" onClick={handleClickForProducts} >Hela sortimentet</button>
        </div >
    )
}