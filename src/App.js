import React from 'react'
// import Cards from './components/Cards/cards'
// import Charts from './components/Charts/Charts'
// import CounrtyPicker from './components/CounrtyPicker/CounrtyPicker'
// import CounrtyPicker from './components/CounrtyPicker/CounrtyPicker'


import { Cards, Charts, CounrtyPicker, CountryPicker} from './components'
import './App.module.css'
import { fetchData } from './api'
 
class App extends React.Component{
    //constructor ki jagah ye bhi use karsakhte hain
    state ={
        data: {},
        country: '',
    }
    // yaha se hum us data ko fetch karenge
    // is ke age lagane se async component 
    // ban jaega ye
    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(data)
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) =>{
        //fetch data
        //set state
        //jis country pe click karay us ka sirf data show ho
        console.log(country)
    }

    render(){
        const { data } = this.state;
        return(
            <div className="countainer">
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts />
            </div>
        )
    }
}

export default App;