import {TopLevelCategory} from "./page.interface";

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
     flatMap(arg0: (m: any) => any): (string | { params: import("querystring").ParsedUrlQuery; locale?: string | undefined; })[];
     _id: {
         secondCategory: string;
     };
     pages: PageItem[];
}

export interface firstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}