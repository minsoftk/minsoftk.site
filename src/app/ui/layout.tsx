import { NaviListType } from '@/components/navigation/navigation.type';
import Sidebar from '@/components/navigation/SideNavigation';
import {
  faCircleChevronDown,
  faGlobe,
  faList,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const uiComponentNavList: NaviListType[] = [
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
  {
    key: '글래스모피즘',
    text: '글래스모피즘',
    href: '/ui/glassmophism',
    iconComponent: <FontAwesomeIcon icon={faTable} />,
  },
  {
    key: '애니메이션 모달',
    text: '애니메이션 모달',
    href: '/ui/modal',
    iconComponent: <FontAwesomeIcon icon={faTable} />,
  },
];

export default function UIPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-full w-full grid-cols-[auto_1fr] grid-rows-[100%] justify-items-center font-[family-name:var(--font-geist-sans)] [&>div]:h-full [&>div]:w-full">
      <div className="sticky top-16 col-start-1 row-start-1 max-h-[calc(100dvh-(var(--spacing)*16))] min-h-[calc(100dvh-(var(--spacing)*16))]">
        <Sidebar
          title={'MinsoftK UI 컴포넌트'}
          naviList={uiComponentNavList}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
