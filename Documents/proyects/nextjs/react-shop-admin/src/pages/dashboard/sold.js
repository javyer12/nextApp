
import { useState, Fragment } from 'react';
import { ChartsLine } from '@common/Chart';
import endPoints from '@services/api/index';
import useFetch from '@hook/useFetch';

export default function Sold() {
    const [ offsetProducts, setOffsetProducts ] = useState(0);
    const PRODUCTS_LIMIT = 200;

    const products = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, offsetProducts),);


    const categoryNames = products?.map((product) => product.category);
    const categoryCount = categoryNames?.map((category) => category.name);
    const count = categoryCount?.map((categories) => categories);
    const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[ curr ] = ++prev[ curr ] || 1), prev), {});
    const data = {
        datasets: [ {
            label: 'Categories most sold',
            data: countOccurrences(count),
            borderWidth: 2,
            borderColor: 'rgb(75, 192, 192)',
        } ]
    }



    return (
        <Fragment>
            <ChartsLine className="mb-8 mt-8" chartData={data} />
        </Fragment>
    );
}