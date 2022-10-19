import FormProduct from '@components/FormProducts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import endPoints from '@services/api/index';
import axios from 'axios';

export default function Edit() {
    const [ product, setProduct ] = useState({});
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query;
        console.log(id)
        if (!router.isReady) return;
        async function getProduct() {
            const response = await axios.get(endPoints.products.getProduct(id));
            setProduct(response.data);
        };

        getProduct();
    }, [ router?.isReady ]);
    return <FormProduct product={product} />
}

