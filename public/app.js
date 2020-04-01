// Personal API Key for OpenWeatherMap API
let baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&APPID=1dfbe50ce0c68118f81a95ab4b0d0071';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zipCode = document.getElementById('zip').value;
    getWeatherData(baseUrl, zipCode, apiKey);
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseUrl, zipCode, apiKey) => {

    const result = await fetch(baseUrl+zipCode+apiKey);

    try{
      const data = await result.json();
      console.log(data);
      return data;
    } catch(error){
        console.log(error);

    }
}

/* Function to POST data */


/* Function to GET Project Data */

