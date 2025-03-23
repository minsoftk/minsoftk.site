'use client';

import AccordionJSComponent from './accordion.javascript';
import AccordionReactBasic from './accordion.react.basic';
import AccordionWithDetailTag from './accordion.react.detailTag';
import { data } from './accordion.data';
import { useState } from 'react';
export default function AccordionPage() {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const [currentId2, setCurrentId2] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () =>
    setCurrentId((prev) => (prev === id ? null : id));
  const toggleItem2 = (id: string) => () =>
    setCurrentId2((prev) => (prev === id ? null : id));
  return (
    <div className="grid grid-cols-[1fr_1fr] items-center justify-center [&>section]:h-full [&>section]:w-full [&>section]:p-5 [&>section>article]:py-3 [&>section>article>h3]:text-lg [&>section>article>h3]:font-semibold [&>section>h2]:text-xl [&>section>h2]:font-semibold">
      <section>
        <h2 className="text-xl">자바스크립트 아코디언</h2>
        <article>
          <h3>#1. 자바스크립트 래퍼를 이용한 아코디언</h3>
          <AccordionJSComponent />
        </article>
      </section>

      <section className="">
        <h2 className="items-center justify-start text-xl">리액트 아코디언</h2>
        <article>
          <h3>#1. 리액트 기본 아코디언</h3>

          {data.map((d) => (
            <AccordionReactBasic
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggleItem={toggleItem(d.id)}
            />
          ))}
        </article>
        <article>
          <h3>#2. 리액트 아코디언 With Detail태그</h3>
          <p className="p-3">
            details를 사용하면 브라우저 기본동작 때문에 트랜지션 적용이 어렵다.
          </p>
          {data.map((d) => (
            <AccordionWithDetailTag
              {...d}
              key={d.id}
              current={currentId2 === d.id}
              toggleItem={toggleItem2(d.id)}
            />
          ))}
        </article>
      </section>
    </div>
  );
}
