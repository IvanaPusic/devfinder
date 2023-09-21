import search from '../assets/icon-search.svg';

const Search = () => {
  return (
    <label className='relative block'>
      <span className='sr-only'>Search</span>
      <span className='absolute inset-y-0 left-0 flex items-center pl-[1rem] pr-[1rem] '>
        <img src={search} alt='search' />
      </span>
      <button className=' flex justify-center align-middle font-space-mono absolute inset-y-[0.41rem] right-0 flex items-center mr-2 py-[0.78rem] pl-[1.12rem] pr-[0.87rem] rounded-md text-white bg-primary w-[5.25rem] h-[2.875rem]'>
        Search
      </button>
      <input
        className='placeholder:font-space-mono placeholder:pl-[1rem] placeholder:text-gray-blue block py-[1.25rem] bg-white w-full rounded-md  pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
        placeholder='Search github username'
        type='text'
        name='search'
      />
    </label>
  );
};

export default Search;
