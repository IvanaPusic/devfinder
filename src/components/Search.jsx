import search from '../assets/icon-search.svg';

const Search = ({ isDark }) => {
  return (
    <label className='relative block'>
      <span className='sr-only'>Search</span>
      <span className='absolute inset-y-0 left-0 flex items-center pl-[1rem] pr-[1rem] '>
        <img src={search} alt='search' />
      </span>
      <button className='search-btn'>Search</button>
      <input
        className={isDark ? 'input-dark' : 'input'}
        placeholder='Search github username'
        type='text'
        name='search'
      />
    </label>
  );
};

export default Search;
