import './savState.css';

const SavState = ({ setMovieList }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const inputSearch = e.target.search.value;

    fetch(`https://api.tvmaze.com/search/shows?q=${inputSearch}`)
      .then((resp) => resp.json())
      .then((moviesFromServer) => setMovieList(moviesFromServer));

    e.target.reset();
  };
  return (
    <div className='container'>
      <div>
        <h1>Sav State</h1>
      </div>
      <div></div>
      <div>
        <form onSubmit={handleChange}>
          <input
            className='search'
            placeholder='Search'
            type='search'
            id='site-search'
            name='search'
            size={40}
          />

          {/* <button type='submit'>Search</button> */}
        </form>
      </div>
    </div>
  );
};

export default SavState;
