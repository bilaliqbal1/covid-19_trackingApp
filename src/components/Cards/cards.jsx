import React from 'react';
import { Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames'


import styles from  './Cards.module.css'
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) =>{
    // console.log(props)
    if (!confirmed) {
        return 'Loading....';
    }
    return (
        // <h2> Cards</h2>
        <div className="container">
            <Grid container spacing={3} justify="center">
                
                {/* multiple css apply karne ke liye is tarah se likhte hain upper import bhi hoga styles */}
                <Grid item component={Card} xs={12} md={3} margin={5} className={cx(styles.card, styles.infected )}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            {/* counting ke liye CountUp import hoga phir is tarah likhenge */}
                            <CountUp start ={0} end = {confirmed.value} duration = {2.5} separator = ","/>                           
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered )}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                            <CountUp start ={0} end = {recovered.value} duration = {2.5} separator = ","/>                           
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of Recovered of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths )}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                            <CountUp start ={0} end = {deaths.value} duration = {2.5} separator = ","/>                           
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of Deaths in COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;