import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import Herosection from '../../components/heroSection/Herosection';
import Filter from '../../components/filter/Filter';

function Home() {
    return (
        <Layout>
            <Herosection></Herosection>
            <Filter></Filter>
        </Layout>
    )
}

export default Home
