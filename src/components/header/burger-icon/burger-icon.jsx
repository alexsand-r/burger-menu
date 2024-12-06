import './burger-icon.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io"; // Иконка крестика
import { useState, useEffect } from 'react'





function Burger({toggleNavbar}) {
    const [isVisibleBurger, setIsVisibleBurger] = useState(false);//  состояние для иконки бургера
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Состояние для управления меню

    const checkScreenWidth = () => {
        if (window.innerWidth < 460) {
            setIsVisibleBurger(true)
            console.log("Ширина экрана меньше 460 пикселей");
        } else {
            setIsVisibleBurger(false)
        }
    }
        // Добавляем эффект для отслеживания изменения ширины экрана
    useEffect(() => {
        // Проверяем ширину экрана при монтировании
        checkScreenWidth();

        // Добавляем слушатель события изменения размера окна
        window.addEventListener("resize", checkScreenWidth);

        // Убираем слушатель при размонтировании
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

       // Обработчик клика на иконку
    const handleIconClick = () => {
        setIsNavbarOpen((prev) => !prev); // Переключение состояния меню
        toggleNavbar(); // Вызываем функцию для управления меню
    };

    return (
        <>
             {isVisibleBurger && (
                <>
                    {isNavbarOpen ? (
                        <IoMdClose className="icon-close" onClick={handleIconClick} />
                    ) : (
                        <RxHamburgerMenu className="icon-burger" onClick={handleIconClick} />
                    )}
                </>
            )}
        </>
    )
}

export default Burger;