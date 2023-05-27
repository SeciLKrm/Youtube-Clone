import axios from 'axios'
const BASE_URL =  'https://youtube138.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '10f9811a7emsh8f33cb6e0745b1dp1250c8jsn50c78886d8b4',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async(url)=>{

 const {data}  /*res */  = await axios.get(`${BASE_URL}/${url}`,options)

 return data //res.data
}  






