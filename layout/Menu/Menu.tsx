import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { firstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import GoodsIcon from "./icons/products.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";
import cn from 'classnames';
import styles from './Menu.module.css';

const firstLevelMenu: firstLevelMenuItem[] = [
    { route: 'courses', name: 'Курси', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервіси', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товари', icon: <GoodsIcon/>, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <ul>
                {firstLevelMenu.map(m => (
                    <li key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span >{m.name}</span>
                            </div>
                        </a>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </li>
                ))}
            </ul>
        );
    };

    const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <span className={styles.secondLevel}>{m._id.secondCategory}</span>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};
