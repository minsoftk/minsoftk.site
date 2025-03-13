'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import { JSX, useState } from 'react';

type DropDownProps = {
  title: string;
  datas: DropDownData[];
  className: string;
  isOpen: boolean;
};

type DropDownData = {
  key: string;
  icon: JSX.Element;
  text: string | '';
};

export default function DropDown(props: DropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const [title, setTitle] = useState<string | JSX.Element>(props.title);

  const handleDropDownOpen = () => setIsOpen((prev) => !prev);
  const handleDropDownSelect = (e: React.MouseEvent<HTMLUListElement>) => {
    const clickedText = (e.target as HTMLElement).textContent;
    const targetObj = props.datas.filter((data) => data.key === clickedText);

    if (targetObj.length > 0) {
      const selectedItem = targetObj[0];
      setTitle(
        <div className="[&>*]:pr-1">
          <span>{selectedItem.icon}</span>
          <span>
            {selectedItem.key === '선택안함'
              ? 'Select your skills'
              : selectedItem.key}
          </span>
        </div>,
      );
      setIsOpen(false);
    }
  };
  return (
    <div className={`relative w-[320px] ${props.className}`}>
      <div
        onClick={handleDropDownOpen}
        className="flex cursor-pointer justify-between rounded-md border border-gray-200 bg-white p-2 px-5 text-black shadow-lg"
      >
        <b className="font-normal">{title}</b>
        <span
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'ratate-0'}`}
        >
          <ChevronDownIcon width={20}></ChevronDownIcon>
        </span>
      </div>
      <ul
        onClick={(e: React.MouseEvent<HTMLUListElement>) =>
          handleDropDownSelect(e)
        }
        className={`absolute top-[110%] max-h-[250px] w-full origin-top overflow-y-auto rounded-md border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 ease-in-out [&>li]:cursor-pointer [&>li]:rounded-md [&>li]:p-2 [&>li:hover]:bg-gray-100 [&>li>span]:ml-2 ${isOpen ? 'scale-y-full' : 'scale-y-0'}`}
      >
        {props.datas.map((data: DropDownData) => (
          <li key={data.key}>
            {data.icon}
            <span>{data.key}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
