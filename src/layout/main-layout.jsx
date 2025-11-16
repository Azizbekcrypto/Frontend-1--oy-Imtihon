import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FooterTop } from './components/footer-top';

export const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header className="bg-white shadow-sm sticky top-0 z-50 py-4" />
        <main className="flex-1">
          <Outlet />
        </main>
        <FooterTop/>
        <Footer />
      </div>
    </>
  );
};
