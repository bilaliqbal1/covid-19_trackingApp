import axios from 'axios'

// api ka url jaha se data aega
const url = "https://covid19.mathdro.id/api"

// ye data fetch karne ke liye hoga
// asyncronise data read and write data
// try successful hoga jub warna catch me ajega 
// agar data nhi mila to 
export const fetchData = async()=>{
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        // hamain api pe data mese data jis ki hamain zarorat he bus
        // lena he to hum response ki jagah 
        //direct data lenge is ko destructure karke

        // const modifyData = { confirmed, recovered,
        //     deaths,
        //     lastUpdate,
        // }

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        
    }
}