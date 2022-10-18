import { useState } from 'react';
import useFetch from '@hook/useFetch';
//Components 
import Charts from '@common/Chart';
import ProductsList from '@components/ProductsList';
//services
import endPoints from '@services/api/index';


export default function Dashboard() {
        const [ offsetProducts, setOffsetProducts ] = useState(0);
        const PRODUCTS_LIMIT = 8;

        const products = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, offsetProducts),);


        const categoryNames = products?.map((product) => product.category);
        const categoryCount = categoryNames?.map((category) => category.name);

        const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[ curr ] = ++prev[ curr ] || 1), prev), {});
        const data = {
                datasets: [ {
                        label: 'Category',
                        data: countOccurrences(categoryCount),
                        borderWidth: 2,
                        backgroundColor: [ '#006600', '#ffae', '#fffaff', '#fff1e0', '#b5a5cc' ]
                } ]
        }
        return (
                <>
                        <ProductsList />
                        <Charts className="mb-8 mt-8" chartData={data} />
                </>
        );
}
