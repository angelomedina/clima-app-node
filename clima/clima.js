const axios = require('axios');

const getClima = async(lat, lng) => {

    let latitude = encodeURI(lat);
    let longitude = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=fbd4749a3a9ba1449ae1783902afe83e`)

    if (resp.data.status == 'ZERO_RESULTS') {

        throw new Error(`No hay resultados para la lat ${ lat } y long ${ lng } `);
    }

    return resp.data.main.temp

}

module.exports = {
    getClima
}