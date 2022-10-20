import { Fragment } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend);

export function Charts({ chartData }) {
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
export function ChartsLine({ chartData }) {
    return (
        <Fragment>
            <Line
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Categories ',
                        fontSize: 40
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        }
                    },
                    element: {
                        point: {
                            radius: 3,
                            pointStyle: 'circle'
                        }
                    }
                }}
            />
        </Fragment>
    );

}