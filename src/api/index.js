import axios from 'axios'

// api ka url jaha se data aega
const url = "https://covid19.mathdro.id/api"

// ye data fetch karne ke liye hoga
// asyncronise data read and write data
// try successful hoga jub warna catch me ajega 
// agar data nhi mila to 
 const fetchData = async(country)=>{
     let changebleUrl = url;

     if (country) {
         changebleUrl = `${url}/countries/${country}` 
     } 
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changebleUrl)
        // hamain api pe data mese data jis ki hamain zarorat he bus
        // lena he to hum response ki jagah 
        //direct data lenge is ko destructure karke

        // const modifyData = { confirmed, recovered,
        //     deaths,
        //     lastUpdate,
        // }

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error)
    }
}
 const fetchDailyData = async()=>{
    try {
        const {data } = await axios.get(`${url}/daily`)
        // console.log(data)
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error)

    }
}
const fetchCountries = async()=>{
    try {
        const {data :{countries}} = await axios.get(`${url}/countries`)
        // console.log(response)
        return countries.map((country)=> country.name)
    } catch (error) {
        console.log(error)

    }
}
export {
    fetchData,
    fetchDailyData,
    fetchCountries,
}