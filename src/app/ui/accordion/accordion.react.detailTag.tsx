import { useRef } from 'react';
import { AccordionItemType } from './type';

export function AccordionWithDetailTag({
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
