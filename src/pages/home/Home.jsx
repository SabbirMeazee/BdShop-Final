import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import Herosection from '../../components/heroSection/Herosection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';

function Home() {
    return (
        <Layout>
            <Herosection></Herosection>
            <Filter></Filter>
            <ProductCard></ProductCard>
            <Track></Track>
            <Testimonial></Testimonial>
        </Layout>
    )
}

export default Home
