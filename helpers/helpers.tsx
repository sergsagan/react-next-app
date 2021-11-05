import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import GoodsIcon from "./icons/products.svg";
import { TopLevelCategory } from "../interfaces/page.interface";
import { firstLevelMenuItem } from "../interfaces/menu.interface";


export const firstLevelMenu: firstLevelMenuItem[] = [
    { route: 'courses', name: 'Курси', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервіси', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товари', icon: <GoodsIcon/>, id: TopLevelCategory.Products }
];