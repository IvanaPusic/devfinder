import search from '../assets/icon-search.svg';
const Search = ({ isDark, handleSubmit, handleInput, input }) => {
  return (
    <form
      className='md:min-w-[35.8125rem] lg:w-[45.625rem]'
      onSubmit={handleSubmit}
    >
      <label className='relative block'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-[1rem] pr-[1rem] '>
          <img src={search} alt='search' />
        </span>
        <button className='search-btn' type='submit'>
          Search
        </button>
        <input
          className={isDark ? 'input-dark' : 'input'}
          placeholder='Search github username...'
          type='text'
          name='search'
          value={input}
          onChange={handleInput}
        />
      </label>
    </form>
  );
};

export default Search;
