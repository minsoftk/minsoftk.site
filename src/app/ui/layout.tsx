import { NaviListType } from '@/components/navigation/navigation.type';
import Sidebar from '@/components/navigation/SideNavigation';
import {
  faCircleChevronDown,
  faGlobe,
  faList,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const naviList: NaviListType[] = [
  {
    key: 'ui',
    text: '전체보기',
    href: '/ui',
    iconComponent: <FontAwesomeIcon icon={faGlobe} />,
  },
  {
    key: 'accordion',
    text: '아코디언',
    href: '/ui/accordion',
    iconComponent: <FontAwesomeIcon icon={faList} />,
  },
  {
    key: 'dropdown',
    text: '드롭다운',
    href: '/ui/dropdown',
    iconComponent: <FontAwesomeIcon icon={faCircleChevronDown} />,
  },
  {
    key: 'tab-menu',
    text: '탭메뉴',
    href: '/ui/tab-menu',
    iconComponent: <FontAwesomeIcon icon={faTable} />,
  },
];

export default function UIPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-full grid-cols-[auto_1fr] grid-rows-[100%] justify-items-center pt-10 font-[family-name:var(--font-geist-sans)]">
      <div className="sticky col-start-1 row-start-1 h-full w-full">
        <Sidebar naviList={naviList} />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
