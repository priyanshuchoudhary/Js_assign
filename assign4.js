import { log } from 'console';
import fetch from 'node-fetch'

const url = "https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json";


const object={
    "Cancelled":0,
    "Delayed":0,
    "Diverted":0,
    "On Time":0,
    "Total":0,
}
const data = async ()=>{
    const res=await fetch(url);

    const result = await res.json();

    const new_result=result.map(data=>data)
    
    let sum_delayed=0;
    let sum_diverted=0;
    let sum_cancelled=0;
    let sum_ontime=0;
    let sum_total=0;
    new_result.forEach(data=>{
        
        sum_delayed+=data.Statistics.Flights.Delayed
        sum_diverted+=data.Statistics.Flights.Diverted
        sum_cancelled+=data.Statistics.Flights.Cancelled
        sum_ontime+=data.Statistics.Flights['On Time']
        sum_total+=data.Statistics.Flights.Total
       
        
    })
    console.log(sum_cancelled+sum_delayed+sum_diverted+sum_ontime)

   object['Delayed']=sum_delayed
   object['Cancelled']=sum_cancelled
  object['Diverted']=sum_diverted
  object['On Time']=sum_ontime
  object['Total']=sum_total
   console.log(object);


}


data();

