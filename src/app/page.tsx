import Dropdown from '@/components/Dropdown';

import Card1 from '@/components/Card.Transition';
import Card2 from '@/components/Card.3DFlip';
import Card3 from '@/components/Card.Radio';
import { dropdownData } from '@/assets/data/DropdownData';

export default function Home() {
  return (
    <div className="grid h-full w-full grid-cols-[1fr_1fr] grid-rows-[100%] justify-items-center pt-10 font-[family-name:var(--font-geist-sans)]">
      <div className="cols-starts-1 [&>*]:my-10 [&>section>h2]:py-5">
        <section>
          <h2 className="">#1 드롭다운 With Scale</h2>
          <Dropdown
            title="Select yout skills"
            datas={dropdownData}
            isOpen={false}
          ></Dropdown>
        </section>

        <section>
          <h2>#2. 트랜지션 카드</h2>
          <Card1></Card1>
        </section>
        <section>
          <h2>#2. 3D Flip 카드</h2>
          <Card2></Card2>
        </section>
      </div>

      <div className="[&>*]:my-10 [&>section>*]:py-5">
        <section>
          <h2>#4. :has를 이용한 카드</h2>
          <Card3></Card3>
        </section>
      </div>
    </div>
  );
}
