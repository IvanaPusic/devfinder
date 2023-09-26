import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';

const Header = ({ isDark, setIsDark }) => {
  return (
    <header className='flex justify-between align-middle pb-[2.19rem] md:min-w-[35.8125rem] md:pt-[8.75rem]  lg:pt-[9rem] lg:w-[45.625rem]'>
      <h3
        className={
          isDark
            ? ' text-white text-xl font-space-mono font-bold'
            : 'text-xl text-dark font-space-mono font-bold'
        }
      >
        devfinder
      </h3>
      <button
        onClick={() => setIsDark(!isDark)}
        className={
          isDark
            ? 'flex gap-4 text-xs text-white font-bold uppercase tracking-[0.15625rem]'
            : 'flex gap-4 text-xs text-gray-blue font-bold uppercase tracking-[0.15625rem]'
        }
      >
        {isDark ? 'light' : 'dark'}
        <span>{isDark ? <img src={sun} /> : <img src={moon} />}</span>
      </button>
    </header>
  );
};

export default Header;
