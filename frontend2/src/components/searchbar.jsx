export default function Searchbar({ handleGenre }) {

    return (
        <form id="search-bar-text" >
            <button id="search-bar-btn" onClick={(event) => handleGenre(event, 'plattform')}>Plattform</button>

            <button id="search-bar-btn" onClick={(event) => handleGenre(event, 'action')}>Action</button>

            <button id="search-bar-btn" onClick={(event) => handleGenre(event, 'äventyr')}>Äventyr</button>

            <button id="search-bar-btn" onClick={(event) => handleGenre(event, 'fantasy')}>Fantasy</button>

            <button id="search-bar-btn" onClick={(event) => handleGenre(event, 'role-play')}>Role-play</button>
        </form>
    )
}