//is me hooks use karhe he usestate or useeffect 
import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import cx from 'classnames'
import styles from  './Charts.module.css'


const Charts = ({data: {confirmed, deaths, recovered}, country}) =>{
    const [dailyData, setDailyData] = useState([]);
    // state = {
    //     dailyData={}
    // }
    //await keywords se phele hum wait karte he data ka
    //async is me nhi chale ga to hum is me fetchApi ka function use karahe hain
    useEffect(()=>{
        const fetchApi = async ()=>{
            setDailyData( await fetchDailyData());
        }
        // console.log(dailyData)
        fetchApi();
    });
    const lineChart =(
        dailyData.length
        ? ( 
            <Line 
                data = {{
                    labels: dailyData.map(({date})=>date),
                    datasets: [{
                        data: dailyData.map(({confirmed})=>confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    {
                        data: dailyData.map(({recovered})=>recovered),
                        label: 'recovered',
                        borderColor: 'rgba(0, 255, 255, 0.5)',
                        fill: true,
                    },{
                        data: dailyData.map(({deaths})=>deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />
        ):null
    );

    const barChart = (
        confirmed
        ?(
            <Bar 
                data ={{
                    labels: ['Infected','Recovered', 'Deaths'],
                    datasets:[{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)', ' rgba(255, 0, 0, 0.5)',],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display:false},
                    title:{display:true, text: `Current state in ${country}` }  ,
                }}
            />
        ):null
    )

    return (
        // <h2> Charts</h2>
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;