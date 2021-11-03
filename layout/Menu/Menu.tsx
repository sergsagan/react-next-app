import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { firstLevelMenuItem } from "../../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import GoodsIcon from "./icons/goods.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";
import cn from 'classnames';
import styles from './Menu.module.css';

const firstLevelMenu: firstLevelMenuItem[] = [
    { route: 'course', name: 'Курси', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервіси', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товари', icon: <GoodsIcon/>, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id == firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id == firstCategory && buildSecondLevel()}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = () => {};
    const buildThirdLevel = () => {};

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};