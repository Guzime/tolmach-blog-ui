"use client";
//это значит, что можешь использовать хуки и всякое такое реактовское на стороне клиента (браузер)
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

// Определяем компонент NavBar
const NavBar: React.FC = () => {
  const pathname = usePathname();
  //active - позволяет сохранять данные между рендерами setActive позволяет обновить переменную и запустить React для повторной визуализации компонента
  const [active, setActive] = useState<string>(pathname);
  //console.log("pathname ", pathname);
  //console.log("active ", active);
  //console.log("setActive ", setActive);

  //useEffect 1-ый параметр что будет сделано, при измененении 2-го параметра
  useEffect(() => {
    console.log("Эффект сработал!");
  }, [pathname]);
  return (
    <div>
      {/* fixed делает навигационную панель фиксированной относительно скроллингга */}
      <nav className="bg-white border border-solid border-[#F0F0F0] fixed top-0 left-0 right-0 z-10">
        {/* justify-around равонмерное распределение с отступами по краям */}
        {/* px-10  равонмерное распределение с отступами по краям */}
        {/* flex  если flex не использовать то блочные элементы (div) будут идти столбиком  */}
        <div className="flex justify-around py-3">
          <div>
            {/* Логотип */}
            <Link href="/">
              <h2 className="text-2xl text-black">[tolmach-blog]</h2>
            </Link>
          </div>
          <div className="flex flex-row">
            <div onClick={() => setActive('/about')}>
              <Link href="/about">
                <h2 className={`text-2xl pr-4 ${active === '/about' ? 'text-[#DCD7C9]' : 'text-black'}`}>[about]</h2>
              </Link>
            </div>
            <div>
              <Link href="/blog">
              <h2 className={`text-2xl pr-4 ${active === '/blog' ? 'text-[#DCD7C9]' : 'text-black'}`}>[blog]</h2>
              </Link>
            </div>
            <div>
              <Link href="/articles">
              <h2 className={`text-2xl pr-4 ${active === '/articles' ? 'text-[#DCD7C9]' : 'text-black'}`}>[articles]</h2>
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
