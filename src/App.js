import React from 'react'
// import Cards from './components/Cards/cards'
// import Charts from './components/Charts/Charts'
// import CounrtyPicker from './components/CounrtyPicker/CounrtyPicker'

import { Cards, Charts, CounrtyPicker, CountryPicker} from './components'
import './App.css'
import { fetchData } from './api'
 
class App extends React.Component{
    //constructor ki jagah ye bhi use karsakhte hain
    state ={
        data: {},
    }
    // yaha se hum us data ko fetch karenge
    // is ke age lagane se async component 
    // ban jaega ye
    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(data)
        this.setState({data: fetchedData})
    }
    render(){
        const { data } = this.state;
        return(
            <div className="countainer">
                <Cards data={this.state.data}/>
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}

export default App;