import { ToggleEvent, useEffect, useRef, useState } from 'react';
import { AccordionItemType } from './type';
import { cn } from '@/assets/utils/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function AccordionWithDetailTag({
  current,
  id,
  title,
  description,
}: AccordionItemType) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(current ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, []);

  const handleToggle = (e: ToggleEvent<HTMLDetailsElement>) => {
    const isNowOpen = (e.currentTarget as HTMLDetailsElement).open;
    setIsOpen(isNowOpen);

    if (isNowOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  };

  return (
    <details
      ref={detailsRef}
      key={id}
      className="group w-full border-b border-gray-300 p-2 text-left text-xl font-bold duration-300 select-none"
      onToggle={handleToggle}
      open={isOpen}
    >
      <summary className="flex list-none justify-between hover:cursor-pointer">
        <span>{title}</span>
        <em>
          <FontAwesomeIcon
            className={cn('transition-all duration-300 group-open:rotate-180')}
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </em>
      </summary>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 group-open:max-h-[400px]"
      >
        <p className={cn('p-2 text-sm')}>{description}</p>
      </div>
    </details>
  );
}
