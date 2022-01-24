import axios from 'axios'

const KEY = 'AIzaSyCHHPTyW5WcKTutNcPDQavbFl_3cN79qLA' 

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5 , 
        key : KEY
    }
})