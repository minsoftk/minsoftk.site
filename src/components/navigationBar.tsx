'use client';

import {
  faGit,
  faLinkedinIn,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
// import { throttle } from 'lodash-es';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [height, setHeight] = useState<string>('auto');
  // const navigationRef = useRef<HTMLDivElement>(null);

  // const handleHeightState = throttle(() => {
  //   if (navigationRef.current && window.innerWidth >= 768) {
  //     setHeight('auto');
  //   } else if (navigationRef.current && window.innerWidth < 768) {
  //     setHeight('0px');
  //   }
  //   setIsOpen(false);
  // }, 10);

  // useEffect(() => {
  //   window.addEventListener('resize', handleHeightState);
  //   return () => {
  //     setIsOpen(false);
  //     removeEventListener('resize', handleHeightState);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('🚀 ~ Navigation ~ isOpen:', isOpen);
  //   console.log('🚀 ~ useEffect ~ window.innerWidth:', window.innerWidth);
  //   if (navigationRef.current && window.innerWidth < 768) {
  //     setHeight(isOpen ? `${navigationRef?.current.scrollHeight}px` : '0px');
  //   }
  // }, [isOpen]);

  return (
    <header className="bg-slate-400 text-white">
      <div className="relative z-20 mx-auto flex h-16 max-w-[900px] items-center justify-between px-2">
        {/* order-last */}
        <h1 className="font-bolds uppercase">
          <Link href="/">Minsoftk</Link>
        </h1>

        <div
          // ref={navigationRef}
          className={`absolute top-[100%] left-0 mr-2 max-h-0 w-full overflow-hidden transition-all duration-400 ease-in-out md:static md:block md:max-h-none md:w-auto ${isOpen ? `max-h-[200px]` : ''}`}
        >
          {/* <Link href="/ui/accordion/react">아코디언</Link>
          <Link href="/ui/tab-menu/react">탭메뉴</Link> */}
          <nav aria-labelledby="main-nav">
            <h2
              id="main-nav"
              className="sr-only"
            >
              사이트 메인 네비게이션
            </h2>
            <ul className="md:flex [&>li>a]:m-0 [&>li>a]:block [&>li>a]:border-b [&>li>a]:bg-slate-500 [&>li>a]:py-2 [&>li>a]:text-center [&>li>a]:capitalize md:[&>li>a]:mx-2 md:[&>li>a]:border-none md:[&>li>a]:bg-transparent [&>li>a:hover]:underline">
              <li>
                <Link href="/ui/accordion/react">아코디언</Link>
              </li>
              <li>
                <Link href="/ui/tab-menu/react">탭메뉴</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav
            aria-labelledby="external-navs"
            className="flex gap-10 [&>ul]:flex [&>ul]:gap-4 [&>ul>li>a]:hover:cursor-pointer"
          >
            <h2
              id="external-navs"
              className="sr-only"
            >
              Minsoftk 외부 링크
            </h2>

            {/* <ul className="[&>li>a]:rounded-full [&>li>a]:border [&>li>a]:border-[#222f3e] [&>li>a]:bg-[#222f3e]"> */}
            <ul className="flex items-center transition-all duration-200 ease-in-out [&>li>a]:border-b [&>li>a]:border-[#222f3e] [&>li>a]:bg-[#222f3e] [&>li>a]:hover:border-b-2">
              <li>
                <a className="!bg-transparent text-[#222f3e]">About</a>
              </li>
              <li>
                <a
                  href="https://blog.minsoftk.com"
                  className="!bg-transparent text-[#222f3e]"
                >
                  Blog
                </a>
              </li>
            </ul>

            {/* utility 생성 */}
            {/* <ul className="sns-links"> */}
            <ul className="sns-links">
              <li>
                <a href="https://github.com/minsoftk">
                  <FontAwesomeIcon
                    color="black"
                    icon={faGit}
                  />
                </a>
                <span>깃허브</span>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    color="black"
                    icon={faLinkedinIn}
                  />
                </a>
                <span>링크드인</span>
              </li>
              <li>
                <a href="https://blog.minsoftk.com">
                  <FontAwesomeIcon
                    color="black"
                    icon={faFacebookF}
                  />
                </a>
                <span>페이스북</span>
              </li>
              <li>
                <a href="https://blog.minsoftk.com">
                  <FontAwesomeIcon
                    color="black"
                    icon={faYoutube}
                  />
                </a>
                <span>유튜브</span>
              </li>
            </ul>
          </nav>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="hover:cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
