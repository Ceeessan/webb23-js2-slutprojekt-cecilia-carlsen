import SearchInput from "./searchinput.jsx";
import AllProductsBtn from "./allproductsbtn.jsx";
import CartIcon from "./carticon.jsx";

export default function Navbar({ setWhatToShow, userArrayWithProducts, userQuantity, setSearchGame, setUserQuantity, handleClickForProducts, searchWord, setSearchWord, setSelectedGenre }) {

    function handleClick() {
        setWhatToShow('ok');
    }

    return (
        <div id="navbar">

            <h1 id="gameside-logo" onClick={handleClick}>Gameside</h1>

            <div id="inner-navbar">
                <SearchInput
                    setSearchGame={setSearchGame}
                    searchWord={searchWord}
                    setSearchWord={setSearchWord}
                    setWhatToShow={setWhatToShow}
                    setSelectedGenre={setSelectedGenre}
                />

                <AllProductsBtn
                    handleClickForProducts=
                    {handleClickForProducts}
                />

                <CartIcon
                    setWhatToShow=
                    {setWhatToShow}

                    userArrayWithProducts={userArrayWithProducts}

                    setUserQuantity={setUserQuantity}

                    userQuantity={userQuantity}
                />
            </div>
        </div>
    )
}