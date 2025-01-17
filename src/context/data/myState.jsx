import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { onSnapshot, orderBy, query, addDoc, collection, Timestamp, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FirebaseConfig';
// import { addDoc, collection, CollectionReference, Timestamp } from 'firebase/firestore/lite';


function MyState(props) {
    const [loading, setLoading] = useState(false)
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';

        }
    }
    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )

    })
    // ********************** Add Product Section  **********************
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error('Please fill all fields')
        }
        const productRef = collection(fireDB, "products")
        setLoading(true)
        try {
            await addDoc(productRef, products)
            toast.success("Product Add successfully")

            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);


            getProductData();
            closeModal();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setProducts("")
    }
    const [product, setProduct] = useState([]);

    //  get product
    const getProductData = async () => {
        setLoading(true)
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time"),
                // limit(5)
            );
            const data = onSnapshot(q, (querySnapshot) => {
                let productsArray = [];
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productsArray)
                console.log(productsArray);
                // setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        (async () => await getProductData())
            ()

    }, []);
    //update product==============/////////
    const edithandle = (item) => {
        setProducts(item)
    }


    const deleteProduct = async (item) => {

        try {
            setLoading(true)
            await deleteDoc(doc(fireDB, "products", item.id));
            toast.success('Product Deleted successfully')
            setLoading(false)
            getProductData()
        } catch (error) {
            // toast.success('Product Deleted Falied')
            setLoading(false)
        }
    }
    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, product, addProduct, edithandle, deleteProduct }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState
