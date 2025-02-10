import Image from "next/image";
import Link from "next/link";

// Определяем компонент NavBar
const NavBar: React.FC = () => {
  return (
    <div>
        {/* fixed делает навигационную панель фиксированной относительно скроллингга */}
      <nav className="bg-black fixed top-0 left-0 right-0 z-10">
        {/* justify-around равонмерное распределение с отступами по краям */}
        {/* px-10  равонмерное распределение с отступами по краям */}
        {/* flex  если flex не использовать то блочные элементы (div) будут идти столбиком  */}
        <div className="flex justify-around py-5">
          <div>
            <div className="">
              {/* Логотип */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold">
                  [tolmach-blog]
                </h2>
              </Link>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold pr-4">[about]</h2>
              </Link>
            </div>
            <div>
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold pr-4">[blog]</h2>
              </Link>
            </div>
            <div>
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold pr -4">[articles]</h2>
              </Link>
            </div>
          </div>
          {/* Контейнер меню */}
        </div>
      </nav>
    </div>
  );
};

console.log("NavBar sssss:", NavBar);

// это чтобы можно было экспортировать компоненту
export default NavBar;
