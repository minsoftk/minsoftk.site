'use client';

import { useState } from 'react';
import data from '../accordion.data';
import {
  AccordionItem,
  AccordionItemWithDetails,
} from '@/app/ui/accordion/react/AccordionItem';

export default function AccordionReactComponent() {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () =>
    setCurrentId((prev) => (prev === id ? null : id));

  return (
    <>
      <h2 className="p-4 text-2xl">#1 아코디언 리액트</h2>
      <ul className="mx-auto w-3/4 [&>li]:m-4">
        {data.map((d) => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggleItem={toggleItem(d.id)}
          />
        ))}
      </ul>

      <h2 className="p-4 text-2xl">#2 details를 사용한 아코디언</h2>
      <ul className="mx-auto w-3/4 [&>details]:m-4">
        {data.map((d) => (
          <AccordionItemWithDetails
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggleItem={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
}
