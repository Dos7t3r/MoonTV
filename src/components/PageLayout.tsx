import MobileBottomNav from './MobileBottomNav';
import MobileHeader from './MobileHeader';
import { useSidebar } from './Sidebar';
import Sidebar from './Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
  activePath?: string;
}

const PageLayout = ({ children, activePath = '/' }: PageLayoutProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <>
      {/* 桌面端布局 */}
      <div className='hidden md:grid md:grid-cols-[auto_1fr] w-full'>
        <Sidebar activePath={activePath} />
        <div
          className={`min-w-0 transition-all duration-300 ${
            isCollapsed ? 'col-start-2' : 'col-start-2'
          }`}
        >
          {children}
        </div>
      </div>

      {/* 移动端布局 */}
      <div className='md:hidden flex flex-col min-h-screen w-full'>
        <MobileHeader />
        <main
          className='flex-1 pb-14'
          style={{
            paddingBottom: 'calc(3.5rem + env(safe-area-inset-bottom))',
          }}
        >
          {children}
        </main>
        <MobileBottomNav activePath={activePath} />
      </div>
    </>
  );
};

export default PageLayout;
