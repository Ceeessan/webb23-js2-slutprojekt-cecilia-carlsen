export default function CartPage({ games, userArrayWithProducts, setUserArrayWithProducts, setGames, setWhatToShow, setUserQuantity }) {


    async function postGames() {

        const apiPostURL = `http://localhost:3000/quantity`;
        console.log('posting', userArrayWithProducts)

        try {
            const response = await fetch(apiPostURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userArrayWithProducts)
            });
            const data = await response.json();
            console.log('games data:', data);
            console.log(data)
            setGames(data)

        }
        catch (error) {
            console.log('Error fetching games:', error);
        }
    }


    function totalQuantity() {

        const total = userArrayWithProducts.reduce((accumulator, products) => {
            return accumulator + products.price;
        }, 0)
        console.log('total:', total)
        return total;
    }

    function handlePayBtn() {
        postGames();

        setUserArrayWithProducts([]);
        setUserQuantity(0);
        setWhatToShow('thankYouCard');
    }


    function emptyCart() {
        // Skapar en kopia av användarens produkter i varukorgen
        const updatedGames = [...games];

        // Återställ lagerantalet för användarens produkter
        userArrayWithProducts.forEach(product => {
            const gameIndex = updatedGames.findIndex(game => game.id === product.id);
            if (gameIndex !== -1) {
                updatedGames[gameIndex].quantity += 1;
            }
        });


        setGames(updatedGames);
        setUserArrayWithProducts([]);
        setUserQuantity(0);
        setWhatToShow('products');
    }

    return (
        <div >
            <h3 id="products-text"> Produkter i Varukorgen: </h3>

            {userArrayWithProducts.map((product, index) => (
                <div key={index} className="cart-page-products">
                    <img src={product.img} id="img-product-page" alt="Product" />
                    <p>{product.title}</p>
                    <p>Pris: {product.price} kr</p>
                </div>
            ))}

            <h3 id="products-text"> Totalt: {totalQuantity()} kr </h3>
            <div id="cart-btn-div">

                <button id="cart-btn-pay" onClick={handlePayBtn}> Betala </button>
                <button id="cart-btn-empty" onClick={emptyCart}> Töm Varukorg</button>
            </div>

        </div>
    )
}