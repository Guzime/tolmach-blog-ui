'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useState } from 'react';
 

// Определяем компонент NavBar
const NavBar: React.FC = () => {
  const pathname = usePathname()
  const [active, setActive] = useState<string>(pathname)
  console.log("pathname ", pathname);
  console.log("active ", active);
  console.log("setActive ", setActive);
  return (
    <div>
      {/* fixed делает навигационную панель фиксированной относительно скроллингга */}
      <nav className="bg-black fixed top-0 left-0 right-0 z-10">
        {/* justify-around равонмерное распределение с отступами по краям */}
        {/* px-10  равонмерное распределение с отступами по краям */}
        {/* flex  если flex не использовать то блочные элементы (div) будут идти столбиком  */}
        <div className="flex justify-around py-5">
          <div>
            {/* Логотип */}
            <Link href="/">
              <h2 className="text-2xl text-cyan-600">[tolmach-blog]</h2>
            </Link>
          </div>
          <div className="flex flex-row">
            <div>
              <Link href="/about">
                <h2 className="text-2xl text-cyan-600 pr-4">[about]</h2>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <h2 className="text-2xl text-cyan-600 pr-4">[blog]</h2>
              </Link>
            </div>
            <div>
              <Link href="/articles">
                <h2 className="text-2xl text-cyan-600 pr -4">[articles]</h2>
              </Link>
            </div>
          </div>
          {/* Контейнер меню */}
        </div>
      </nav>
    </div>
  );
};

// это чтобы можно было экспортировать компоненту
export default NavBar;
