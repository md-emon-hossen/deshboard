import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './chart.css';

const Chart = () => {



    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4550,
            amt: 2100,
        },
        {
            name: 'Agu',
            uv: 3490,
            pv: 3400,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 2900,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 1700,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 9100,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 4339,
            amt: 2100,
        },
    ];
    return (
        <div className='chartwrper' >
            <h2>Salse Analysic</h2>
            <ResponsiveContainer className='reChart' width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Chart;