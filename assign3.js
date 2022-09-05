import fetch from 'node-fetch'

const res= async ()=>{
    const z =await fetch('http://api.nobelprize.org/v1/prize.json');
    const data= await z.json();

    const filterData= data.prizes.filter( data =>data.year>=2000 && data.year <= 2019).filter(data=>data.category ='chemistry');
    console.log(filterData)
    
    filterData.forEach(element => {
        console.log(element);
    });















//     fetch("http://api.nobelprize.org/v1/prize.json")
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data)
//     const prizes=data.prizes;
//     const filteredData=prizes.filter(
//         (prize)=>
//         prize.year >='2000' &&

//         prize.year <='2019'&&
//         prize.category=='chemistry'
//     );
//     console.log(filteredData)})
//   //     

//     .catch((error)=>console.log(error));


}

res();