import React, { useEffect, useState } from "react";
import { Button, Title, Tag, Text, Rating } from '../components';
import { withLayout } from '../layout/Layout'
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps) : JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        console.log('Counter', counter)
        return function cleanUp() {
            console.log('Unmount')
        }
    });
    

    useEffect(() => {
        if (counter > 0) {
            console.log('Mounted')
        }
    }, []);

    return (
    <>
        <Title tag='h3'>{counter}</Title>
        <Button className="btn" arrow='right' appearance='primary' onClick={() => setCounter(x => x + 1)}>Add +</Button>
        <Button  arrow='down' appearance='ghost'>Deleted</Button>
        <Text size="s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, sint.</Text>
        <Tag size='s'>Ghost</Tag>
        <Tag size='m' color='red'>100</Tag>
        <Tag color='green'>Green</Tag>
        <Tag color='primary'>10Pts</Tag>
        
        <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
};

interface HomeProps extends Record<string, unknown> {
   menu: MenuItem[];
   firstCategory: number;
}
