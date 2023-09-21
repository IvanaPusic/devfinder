import { useState } from 'react';
import { Header, Search, User } from './components';
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <section
      className={isDark ? 'dark:bg-dark h-screen' : 'bg-light-gray h-screen'}
    >
      <div className='pt-[1.94rem] px-[1.5rem]'>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Search />
        <User />
      </div>
    </section>
  );
}

export default App;
