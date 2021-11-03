import { MenuProps } from './Menu.props';
import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns'

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Усі права захищені
            </div>
            <a href="#" target="_blank">Угода користувача</a>
            <a href="#" target="_blank">Кофіденційність</a>
        </footer>
    );
};