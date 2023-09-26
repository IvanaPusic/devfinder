import { useState } from 'react';
import { Header, Search, User } from './components';
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <section
      className={
        isDark
          ? 'dark:bg-dark h-full  md:pl-[6.06rem] md:pr-[6.12rem] lg:flex lg:justify-center lg:align-middle'
          : 'bg-light-gray h-full pb-[4.94rem] md:pl-[6.06rem] md:pr-[6.12rem] lg:flex lg:justify-center lg:align-middle'
      }
    >
      <div className=' pt-[1.94rem] px-[1.5rem] pb-[4.94rem] md:pb-[14.75rem] '>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Search isDark={isDark} />
        <User isDark={isDark} />
      </div>
    </section>
  );
}

export default App;
