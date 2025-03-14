'use client';
import VanillaWrapper from '@/components/vanillaWrapper';
import data from './accordion.data';

const itemBuilder = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const $li = document.createElement('li');
  $li.className = 'border p-2';

  const $button = document.createElement('button');
  $button.className = 'text-xl font-bold w-full text-left';
  $button.classList.add('accordion-tab');
  $button.setAttribute('data-id', id);
  $button.textContent = title;

  const $div = document.createElement('div');
  $div.className = 'overflow-hidden transition-all duration-300 max-h-0';
  const $p = document.createElement('p');
  $p.className = 'p-2';
  $p.textContent = description;
  $div.append($p);

  $li.append($button, $div);
  return $li;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null;
  const $ul = document.createElement('ul');
  $ul.className = 'p-2 [&>li]:m-3';

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains('accordion-tab')) return;

    const targetId = $el.dataset.id;
    if (!targetId) return;
    currentId = currentId === targetId ? null : targetId;

    $items.forEach(($item) => {
      const [$button, $div] = $item.children;
      const showCondition = currentId === ($button as HTMLElement).dataset.id;
      $div.classList.toggle('max-h-[100vh]', showCondition);
      $div.classList.toggle('max-h-0', !showCondition);
    });
  };
  $ul.addEventListener('click', handleClickTab);

  const $items = data.map(itemBuilder);
  $ul.append(...$items);

  wrapper.append($ul);
  ($items[0].children[0] as HTMLElement).click();
};

export default function AccordionReactComponent() {
  return (
    <>
      <h1 className="p-4 text-2xl">#1 아코디언 자바스크립트</h1>
      <VanillaWrapper initiator={initiator}></VanillaWrapper>
    </>
  );
}
