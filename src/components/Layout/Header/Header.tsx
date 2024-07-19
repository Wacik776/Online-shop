import "../Header/header.scss"
// /<reference types="vite-plugin-svgr/client"/>
import  PhoneIcon from "../Header/icons/phone.svg?react";
import DeliveryIcon from "../Header/icons/delivery-icon.svg?react"

export const Header = () => {
  return (
    <>
      <div className='container'>
        <nav className='header__nav'>
          <ul className='header__main-info'>
            <li ><a className="header__nav-item" href="#about">О нас</a></li>
            <li ><a className="header__nav-item" href="#contact">Контакты</a></li>
            <li ><a className="header__nav-item" href="#home">Главная</a></li>
          </ul>
          <ul className='header__connectivity'>
            <li ><a className="header__nav-item" href="tel:+79648999119"><div className="header__phone-icon"><PhoneIcon/></div>8 (964) 89 99 119</a></li>
            <li ><a className="header__nav-item" ><div className="header__delivery-icon"><DeliveryIcon width={27} height={18}/></div>Доставка</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
