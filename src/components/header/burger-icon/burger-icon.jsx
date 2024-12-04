import './burger-icon.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react'





function Burger({toggleNavbar}) {
        const [isVisibleBurger, setIsVisibleBurger] = useState(false);//  состояние для иконки бургера
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


    return (
        <>
            {isVisibleBurger && <RxHamburgerMenu className="icon-burger" onClick={toggleNavbar} />}
        </>
    )
}

export default Burger;