import "../Header/header.scss"
///<reference types="vite-plugin-svgr/client"/>
import PhoneIcon from "../Header/icons/phone.svg?react";

export const Header = () => {
  return (
    <>
      <div className='container'>
        <nav className='header__nav'>
          <ul className='header__main-info'>
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
          <ul className='header__connectivity'>
            <li><a href="tel:+79648999119"><PhoneIcon/>8 (964) 89 99 119</a></li>
            <li><a href="!#">Доставка</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
