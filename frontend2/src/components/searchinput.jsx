export default function SearchInput({ setSearchGame, searchWord, setSearchWord, setWhatToShow, setSelectedGenre }) {


    function handleChange(event) {
        setSearchWord(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        event.target.reset();

        setSearchGame(searchWord);
        setWhatToShow('products');
        setSelectedGenre(null);
    }


    return (
        <form id=" input-search-and-btn" onSubmit={handleSubmit}>
            <input type="text" id="input-search" placeholder="Sök spel" onChange={handleChange} value={searchWord} />
            <button id="input-btn" >Sök</button>
        </form>
    )
}