import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';

function order() {
    const context = useContext(myContext);
    const { name } = context;

    return (
        <Layout>
            <h1>Name : {name}</h1>
        </Layout>
    )
}

export default order
