// Personal API Key for OpenWeatherMap API
let baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&APPID=1dfbe50ce0c68118f81a95ab4b0d0071';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zipCode = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;

    getWeatherData(baseUrl, zipCode, apiKey,)
        .then(function(data){
            // Add data
            postData('/add',{temp:data.list[0].main.temp, date:data.list[0].dt, content:feelings});
        })
        .then(
            updateUI()
        )
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseUrl, zipCode, apiKey) => {

    const result = await fetch(baseUrl+zipCode+apiKey);

    try{
      const data = await result.json();
      return data;
    } catch(error){
        console.log(error);

    }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData
    }catch(error) {
        console.log("error", error);
    }
}



/* Function to GET Project Data */

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;

    }catch(error){
        console.log("error", error);
    }
}