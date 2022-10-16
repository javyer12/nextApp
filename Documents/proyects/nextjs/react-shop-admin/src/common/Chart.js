import { Fragment } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);

export default function Charts({ chartData }) {
    return (
        <Fragment>
            <Bar
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Category',
                        fontSize: 40
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        }
                    }
                }}
            />
        </Fragment>
    );

}