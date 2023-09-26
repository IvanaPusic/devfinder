import company from '../assets/icon-company.svg';
import location from '../assets/icon-location.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import user from '../assets/placeholder.svg';

const User = ({ isDark }) => {
  return (
    <article
      className={
        isDark
          ? 'mt-4 bg-navy-blue rounded-[0.9375rem] px-[1.5rem] md:min-w-[35.8125rem] lg:w-[45.625rem]'
          : 'mt-4 bg-gray-white rounded-[0.9375rem] px-[1.5rem] md:min-w-[35.8125rem] lg:w-[45.625rem]'
      }
    >
      <div className='flex pt-[2.06rem]   gap-[1.22rem]'>
        <div className='w-[4.375rem] h-[4.375rem] rounded-lg'>
          <img src={user} alt='user' className='max-w-[100%] max-h-[100%]' />
        </div>
        <div>
          <h1
            className={
              isDark
                ? 'text-base font-space-mono font-bold text-white'
                : 'text-base font-space-mono font-bold text-dark-gray'
            }
          >
            The Octocat
          </h1>
          <p className='text-primary text-xs font-space-mono'>@octocat</p>
          <p
            className={
              isDark
                ? 'text-xs text-white font-space-mono'
                : 'text-xs text-gray font-space-mono'
            }
          >
            Joined 25 Jan 2011
          </p>
        </div>
      </div>
      <p
        className={
          isDark
            ? 'pt-[2.13rem] min-w-[17.4375rem] max-w-[30.8125rem] text-white text-xs font-space-mono'
            : 'pt-[2.13rem] min-w-[17.4375rem] max-w-[30.8125rem] text-gray-blue text-xs font-space-mono'
        }
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div
        className={
          isDark
            ? 'mt-[1.44rem] pt-[1.13rem] flex justify-around align-middle bg-dark rounded-[0.625rem]'
            : 'mt-[1.44rem] pt-[1.13rem] flex justify-around align-middle bg-light-gray rounded-[0.625rem]'
        }
      >
        <div className='pb-[1.19rem] text-center'>
          <h3
            className={
              isDark
                ? 'text-2xs font-space-mono text-white'
                : 'text-2xs font-space-mono text-gray-blue'
            }
          >
            Repos
          </h3>
          <p
            className={
              isDark
                ? 'text-white font-bold font-space-mono text-base'
                : 'text-dark-gray font-bold font-space-mono text-base'
            }
          >
            8
          </p>
        </div>
        <div className='pb-[1.19rem] text-center'>
          <h3
            className={
              isDark
                ? 'text-2xs font-space-mono text-white'
                : 'text-2xs font-space-mono text-gray-blue'
            }
          >
            Followers
          </h3>
          <p
            className={
              isDark
                ? 'text-white font-bold font-space-mono text-base'
                : 'text-dark-gray font-bold font-space-mono text-base'
            }
          >
            3938
          </p>
        </div>
        <div className='pb-[1.19rem] text-center'>
          <h3
            className={
              isDark
                ? 'text-2xs font-space-mono text-white'
                : 'text-2xs font-space-mono text-gray-blue'
            }
          >
            Following
          </h3>
          <p
            className={
              isDark
                ? 'text-white font-bold font-space-mono text-base'
                : 'text-dark-gray font-bold font-space-mono text-base'
            }
          >
            9
          </p>
        </div>
      </div>
      <div className='mt-[1.5rem] pb-[3.06rem]'>
        <p
          className={
            isDark
              ? 'flex gap-[1.2rem] text-xs text-white font-space-mono pb-[1.06rem]'
              : 'flex gap-[1.2rem] text-xs text-gray-blue font-space-mono pb-[1.06rem]'
          }
        >
          <span>
            <img src={location} alt='location' />
          </span>
          San Francisco
        </p>
        <p
          className={
            isDark
              ? 'flex gap-[1.2rem] text-xs text-white font-space-mono pb-[1.06rem]'
              : 'flex gap-[1.2rem] text-xs text-gray-blue font-space-mono pb-[1.06rem]'
          }
        >
          <span>
            <img src={website} alt='website' />
          </span>
          https://github.blog
        </p>
        <p
          className={
            isDark
              ? 'flex gap-[1.2rem] text-xs text-white font-space-mono pb-[1.06rem]'
              : 'flex gap-[1.2rem] text-xs text-gray-blue font-space-mono pb-[1.06rem]'
          }
        >
          <span>
            <img src={twitter} alt='twitter' />
          </span>
          Not Available
        </p>
        <p
          className={
            isDark
              ? 'flex gap-[1.2rem] text-xs text-white font-space-mono pb-[1.06rem]'
              : 'flex gap-[1.2rem] text-xs text-gray-blue font-space-mono pb-[1.06rem]'
          }
        >
          <span>
            <img src={company} alt='company' />
          </span>
          @github
        </p>
      </div>
    </article>
  );
};

export default User;
