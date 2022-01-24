import axios from "axios";

export default  axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID Whj9cfxCDWtk8y5xl_2JvLHv6al3CISqKbdA78n3X-w'
       }
})