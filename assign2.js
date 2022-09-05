// import fetch from 'node-fetch'
const axios=require('axios')
// const fetch = require('node-fetch');

// "axios": "^0.27.2",

const url = "https://api.github.com/search/repositories?q=%22priyanshuchoudhary/Hospital-Management-system%22";



const data = async ()=>{
    const res=await axios.get(url);
    const result=await res.data;
    // const result = await res.json()
    console.log(result.items[0].name)
    //.then(data=>console.log(data.items[0].name));

}

data();

