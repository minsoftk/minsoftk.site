import { useEffect, useRef, useState } from 'react';
import { AccordionItemType } from './type';

export function AccordionBasic({
  current,
  id,
  title,
  description,
  toggleItem,
}: AccordionItemType) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(current ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [current]);

  return (
    <li
      key={id}
      className="border p-2"
    >
      <button
        onClick={toggleItem}
        aria-expanded={current}
        aria-controls={`accordion-content-${id}`}
        className="w-full text-left text-xl font-bold hover:cursor-pointer"
      >
        {title}
      </button>

      <div
        ref={contentRef}
        id={`accordion-content-${id}`}
        role="region"
        aria-hidden={!current}
        // className={`transition-all duration-500 ease-in-out ${
        //   current ? `sacle-y-100 max-h-auto origin-top` : 'scale-y-0 max-h-0'
        // }`}
        // className={`transition-all duration-500 ease-in-out ${
        //   current
        //     ? 'translate-y-0 opacity-100 max-h-auto'
        //     : '-translate-y-4 opacity-0 max-h-0'
        // }`}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ height }}
      >
        <p className="p-2 text-sm">{description}</p>
      </div>
    </li>
  );
}

export function AccordionItemWithDetails({
  current,
  id,
  title,
  description,
}: AccordionItemType) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <details
      key={id}
      className="group transtion-all w-full border p-2 text-left text-xl font-bold duration-200"
      open={current}
    >
      <summary className="hover:cursor-pointer">{title}</summary>
      <div
        ref={contentRef}
        className="overflow-hidden p-2 text-sm transition-all duration-300 ease-in-out"
      >
        <p>{description}</p>
      </div>
    </details>
  );
}
