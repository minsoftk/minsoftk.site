import { dropdownData } from '@/assets/data/DropdownData';
import Card2 from '@/components/Card.3DFlip';
import Card3 from '@/components/Card.Radio';
import Card1 from '@/components/Card.Transition';
import DarkMode from '@/components/DarkMode';
import Dropdown from '@/components/DropDown';
import Modal from '@/components/Modal';
import HoverTooltip from '@/components/PriceTag';
import Table from '@/components/Table';

export default function UIPage() {
  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-[100%] justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="cols-starts-1 [&>*]:mx-auto [&>*]:my-10 [&>section>h2]:py-5">
        <section className="">
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
          <h2>#3. 3D Flip 카드</h2>
          <Card2></Card2>
        </section>

        <section>
          <h2>#6. Table</h2>
          <Table></Table>
        </section>

        <section>
          <h2>#8. 다크모드</h2>
          <DarkMode></DarkMode>
        </section>
      </div>

      <div className="[&>*]:my-10 [&>section>*]:py-5">
        <section>
          <h2>#4. :has를 이용한 카드</h2>
          <Card3></Card3>
        </section>

        <section>
          <h2>#5. Modal</h2>
          <Modal></Modal>
        </section>

        <section>
          <h2>#7. PriceTag 호버 툴팁</h2>
          <HoverTooltip></HoverTooltip>
        </section>
      </div>
    </div>
  );
}
