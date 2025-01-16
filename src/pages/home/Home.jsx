import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import Herosection from '../../components/heroSection/Herosection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';

function Home() {
    return (
        <Layout>
            <Herosection></Herosection>
            <Filter></Filter>
            <ProductCard></ProductCard>
        </Layout>
    )
}

export default Home
