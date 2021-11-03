import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
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