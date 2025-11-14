import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/main-layout';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Pages } from './pages/pages/pages';
import { Projects } from './pages/projects/projects';
import { Shop } from './pages/shop/shop';
import { NotFound } from './pages/not-found/not-found';
import { ShopSingle } from './pages/shop/shop-single';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pages" element={<Pages />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<News />} />{' '}
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ShopSingle />} />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
