'use client';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash-es';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');

  const navigationRef = useRef<HTMLDivElement>(null);

  const handleHeightState = debounce(() => {
    if (navigationRef.current && window.innerWidth >= 764) {
      setHeight('auto');
      setIsOpen(false);
    } else if (navigationRef.current && window.innerWidth < 764) {
      setHeight('0px');
    }
  }, 10);

  useEffect(() => {
    window.addEventListener('resize', handleHeightState);
    return () => {
      setIsOpen(false);
      removeEventListener('resize', handleHeightState);
    };
  }, []);

  useEffect(() => {
    console.log('🚀 ~ Navigation ~ isOpen:', isOpen);
    if (navigationRef.current && window.innerWidth < 768) {
      setHeight(isOpen ? `${navigationRef?.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <header className="bg-[#12CBC4] text-white">
      <div className="relative z-20 mx-auto flex h-16 max-w-[900px] items-center justify-between px-2">
        {/* order-last */}
        <h1 className="font-bolds uppercase">Minsoftk</h1>

        <div
          ref={navigationRef}
          className={`transition-height absolute top-[100%] left-0 mr-2 w-full overflow-hidden duration-300 ease-in-out md:static md:block md:w-auto [&>a]:m-0 [&>a]:block [&>a]:border-b [&>a]:bg-slate-500 [&>a]:py-2 [&>a]:text-center [&>a]:capitalize md:[&>a]:mx-2 md:[&>a]:inline md:[&>a]:border-none md:[&>a]:bg-transparent [&>a:hover]:underline ${isOpen ? 'h-auto' : 'h-0'} `}
          style={{
            height,
          }}
        >
          <nav aria-labelledby="main-nav">
            <h2
              id="main-nav"
              className="sr-only"
            >
              사이트 내 네비게이션
            </h2>
            <ul>
              <li>
                <Link href="/ui/accordion/react">아코디언</Link>
              </li>
              <li>
                <Link href="/ui/tab-menu/react">탭메뉴</Link>
              </li>
            </ul>
          </nav>
        </div>

        <nav
          aria-labelledby="external-links"
          className="[&>ul>li>a]:rounded-full [&>ul>li>a]:border [&>ul>li>a]:border-[#222f3e] [&>ul>li>a]:bg-[#222f3e] [&>ul>li>a]:p-2 [&>ul>li>a]:hover:cursor-pointer"
        >
          <h2
            id="external-links"
            className="sr-only"
          >
            Minsoftk 외부 링크
          </h2>
          <ul className="flex gap-3 [&>li]:w-full">
            <li>
              <a className="!bg-transparent text-[#222f3e]">About</a>
            </li>
            <li>
              <a
                href="https://blog.minsoftk.com"
                className="!border-white !bg-transparent"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://github.com/minsoftk"
                className="!border-white !bg-transparent"
              >
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://blog.minsoftk.com"
                className="!border-white !bg-transparent"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
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
