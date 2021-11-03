import { ReactNode } from "react";

export interface TitleProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}