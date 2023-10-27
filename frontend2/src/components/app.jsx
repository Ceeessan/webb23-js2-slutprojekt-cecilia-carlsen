import { useState, useEffect } from "react";
import Navbar from "./navbar.jsx";
import MainPage from "./mainpage.jsx";

export function App() {

    const [games, setGames] = useState([]);
    const [whatToShow, setWhatToShow] = useState('ok');
    const [userArrayWithProducts, setUserArrayWithProducts] = useState([]);
    const [searchGame, setSearchGame] = useState('');
    const [userQuantity, setUserQuantity] = useState(0);
    const [searchWord, setSearchWord] = useState("");
    const [selectedGenre, setSelectedGenre] = useState(null);




    async function getGames() {
        const apiURL = `http://localhost:3000/games?title=${searchGame}`;
        console.log('GET GAMES')

        try {
            const response = await fetch(apiURL);
            const games = await response.json();
            setGames(games);

            console.log('games data:', games);

        }
        catch (error) {
            console.log('Error fetching games:', error);


        }
    }


    useEffect(() => { getGames(); }, [searchGame]);


    async function handleClickOnProducts(product) {
        const availableQuantity = product.quantity;

        if (availableQuantity === 0) {
            console.log('inga produkter i lager')
            return;
        }


        try {

            const updatedGames = games.map((game) => {
                if (game.id === product.id) {
                    return {
                        ...game,
                        quantity: game.quantity - 1
                    };
                }
                return game;
            })
            setGames(updatedGames)

            setUserArrayWithProducts([...userArrayWithProducts, product]);
            setUserQuantity(userArrayWithProducts.length + 1);


        } catch (error) {
            console.log('Error:', error)
        }

    }

    function handleClickForProducts() {

        setWhatToShow('products');
        setSearchGame('');
        setSelectedGenre(null);
    }

    function handleGenre(event, genre) {

        event.preventDefault();
        setSelectedGenre(genre);

    }





    return (

        <div>
            <Navbar
                games={games}
                setSearchGame={setSearchGame}

                whatToShow={whatToShow}
                setWhatToShow={setWhatToShow}

                handleClickForProducts={handleClickForProducts}

                userArrayWithProducts={userArrayWithProducts}

                userQuantity={userQuantity}

                searchWord={searchWord}
                setSearchWord={setSearchWord}

                setSelectedGenre={setSelectedGenre}



            />
            <div id="div-for-page">


                {games.length > 0 ? (
                    <MainPage
                        games={games}
                        setGames={setGames}

                        whatToShow={whatToShow}


                        userArrayWithProducts={userArrayWithProducts}
                        setUserArrayWithProducts={setUserArrayWithProducts}

                        handleClickOnProducts={handleClickOnProducts}

                        setWhatToShow=
                        {setWhatToShow}

                        setUserQuantity={setUserQuantity}

                        selectedGenre={selectedGenre}
                        setSelectedGenre={setSelectedGenre}

                        handleGenre={handleGenre}

                    />
                ) : <p id="products-text"> Loading...</p>}
            </div>


        </div>

    )
}