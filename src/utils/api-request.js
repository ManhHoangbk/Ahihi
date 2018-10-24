import axios from 'axios';

export const handleRequest = (api, callback) => 
    axios(api).then(response => {
       
        console.log(response.data)
        //if(response.data.status === apiConfig.API_STATUS_SUCCESS) 
       // {
            callback(null, response.data.data)
       // }
        // else
        // {
        //     callback(response.data.message);
        // }
    })
    .catch(err => callback(err.response));