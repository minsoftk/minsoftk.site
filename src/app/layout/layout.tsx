import { NaviListType } from '@/components/navigation/navigation.type';
import Sidebar from '@/components/navigation/SideNavigation';
import {
  faCircleChevronDown,
  faGlobe,
  faList,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const layoutNavList: NaviListType[] = [
  {
    key: 'ui',
    text: '전체보기',
    href: '/layout',
    iconComponent: <FontAwesomeIcon icon={faGlobe} />,
  },
  {
    key: 'accordion',
    text: '로그인(글래스모피즘)',
    href: '/layout/login',
    iconComponent: <FontAwesomeIcon icon={faList} />,
  },
  // {
  //   key: 'dropdown',
  //   text: '애니메이션',
  //   href: '/ui/dropdown',
  //   iconComponent: <FontAwesomeIcon icon={faCircleChevronDown} />,
  // },
  // {
  //   key: 'tab-menu',
  //   text: '탭메뉴',
  //   href: '/ui/tab-menu',
  //   iconComponent: <FontAwesomeIcon icon={faTable} />,
  // },
];
export default function LayoutPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[100%] justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="sticky top-16 col-start-1 row-start-1 max-h-[calc(100dvh-(var(--spacing)*16))] min-h-[calc(100dvh-(var(--spacing)*16))]">
        <Sidebar
          title="MinsoftK 레이아웃 컴포넌트"
          naviList={layoutNavList}
        />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
