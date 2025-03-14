import { dropdownData } from '@/assets/data/DropdownData';
import Card2 from '@/components/CardWithFlip';
import Card3 from '@/components/CardWithRadio';
import Card1 from '@/components/CardWithTransition';
import Dropdown from '@/components/Dropdown';

export default function UIPage() {
  return (
    <div className="grid h-full w-full grid-cols-[1fr_1fr] grid-rows-[100%] justify-items-center font-[family-name:var(--font-geist-sans)]">
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
