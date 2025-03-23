'use client';

import Link from 'next/link';
import { useState } from 'react';

import { NaviListType } from './navigation.type';

export default function Navigation({
  mainNaviList,
  subNaviList,
}: {
  mainNaviList: NaviListType[];
  subNaviList: NaviListType[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed z-999 w-full bg-gray-800 text-white">
      <div className="relative z-100 mx-auto flex h-16 w-full items-center justify-between px-10">
        {/* order-last */}
        <h1 className="font-bolds uppercase">
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Minsoftk
          </Link>
        </h1>

        <div
          className={`absolute top-[100%] left-0 mr-2 max-h-0 w-full overflow-hidden transition-all duration-400 ease-in-out md:static md:block md:max-h-none md:w-auto ${isOpen ? `max-h-[200px]` : ''}`}
        >
          <nav aria-labelledby="main-nav">
            <h2
              id="main-nav"
              className="sr-only"
            >
              사이트 메인 네비게이션
            </h2>
            <ul className="md:flex [&>li>a]:m-0 [&>li>a]:block [&>li>a]:border-b [&>li>a]:bg-slate-500 [&>li>a]:py-2 [&>li>a]:text-center [&>li>a]:capitalize md:[&>li>a]:mx-2 md:[&>li>a]:border-none md:[&>li>a]:bg-transparent [&>li>a:hover]:underline">
              {mainNaviList.map((li) => (
                <li key={li.key}>
                  <Link href={li.href}>{li.text}</Link>
                </li>
              ))}
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

            <ul className="sns-links">
              {subNaviList.map((li) => (
                <li key={li.key}>
                  <a>{li.iconComponent}</a>
                  <span>{li.text}</span>
                </li>
              ))}
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
