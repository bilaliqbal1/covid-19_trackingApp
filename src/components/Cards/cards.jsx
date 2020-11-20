import React from 'react';
import { Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core'
import './Cards_module.css'
const Cards = ({confirmed, recovered, deaths, lastUpdate}) =>{
    // console.log(props)
    return (
        // <h2> Cards</h2>
        <div className="container">
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" >REAL DATA</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" >REAL DATA</Typography>
                        <Typography variant="body2">Number of Recovered of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" >REAL DATA</Typography>
                        <Typography variant="body2">Number of Deaths in COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;