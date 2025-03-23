'use client';

import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/assets/utils/css';
import {
  faMagnifyingGlass,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NaviListType } from './navigation.type';

export default function SideNavigation({
  naviList,
  title,
}: {
  naviList: NaviListType[];
  title: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div
      className={cn(
        'sidebar group h-full bg-gray-800 p-3',
        'transition-all duration-300 ease-in-out',
        isOpen ? 'w-[250px]' : 'sidebar-close w-[65px]',
      )}
    >
      <div
        className={cn(
          'logo mb-5 flex items-center justify-between border-b border-white py-2 text-white',
        )}
      >
        <h1 className="group-[.sidebar-close]:hidden">{title}</h1>
        <FontAwesomeIcon
          onClick={handleOpen}
          className={cn(
            'cursor-pointer p-3 transition-all duration-300',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
          color="white"
          icon={faRightFromBracket}
        />
      </div>

      <div className="search relative group-[.sidebar-close]:hidden">
        <input
          type="search"
          className="h-[35px] w-full rounded-md bg-white p-2 pl-7 text-[#333] outline-none"
        ></input>
        <span className="absolute top-[8px] left-2 text-[#777]">
          <FontAwesomeIcon
            color="black"
            icon={faMagnifyingGlass}
          />
        </span>
      </div>

      <ul
        className={cn(
          'navi',
          `mt-3 text-white`,
          '[&>li]:relative [&>li]:p-3 [&>li]:text-lg [&>li>a>span]:ml-3',
        )}
      >
        {naviList.map((d) => (
          <li key={d.key}>
            <Link href={d.href || '#none'}>
              {d.iconComponent}
              <span className={''}>{d.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
