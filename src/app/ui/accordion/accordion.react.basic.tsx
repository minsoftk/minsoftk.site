import { useEffect, useRef, useState } from 'react';
import { AccordionItemType } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/assets/utils/css';

export default function AccordionReactBasic({
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
      className="list-none border-b border-gray-300 p-3"
    >
      <div
        onClick={toggleItem}
        className={cn('flex items-center justify-between gap-3 py-2')}
      >
        <button
          aria-expanded={current}
          aria-controls={`accordion-content-${id}`}
          className="cursor-pointer text-left text-xl font-bold"
        >
          {title}
        </button>
        <em
          className={cn(
            'transition-all duration-300',
            current ? 'rotate-180' : '',
          )}
        >
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </em>
      </div>

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
        className={cn(`overflow-hidden transition-all duration-300`)}
        style={{ height }}
      >
        <p className="p-2 text-sm">{description}</p>
      </div>
    </li>
  );
}
