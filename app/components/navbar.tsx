import Image from "next/image";
import Link from "next/link";

// Определяем компонент NavBar
const NavBar: React.FC = () => {
  // Состояние для управления отображением меню

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Логотип */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold">tolmach-blog</h2>
              </Link>
            </div>
          </div>
          {/* Контейнер меню */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                {/* Пункты меню */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

console.log("NavBar:", NavBar);

// это чтобы можно было экспортировать компоненту
export default NavBar;
