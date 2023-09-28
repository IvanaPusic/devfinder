import { useEffect, useState } from 'react';
import { Header, Search, User } from './components';

function App() {
  const [input, setInput] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState({});

  const url = 'https://api.github.com/users/octocat';

  const getUser = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUserByInput = async (input) => {
    try {
      const res = await fetch(`https://api.github.com/users/${input}`);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      getUserByInput(input);
      setInput('');
    }
  };

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
        <Search
          isDark={isDark}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          input={input}
          getUserByInput={getUserByInput}
        />
        <User isDark={isDark} user={user} />
      </div>
    </section>
  );
}

export default App;
