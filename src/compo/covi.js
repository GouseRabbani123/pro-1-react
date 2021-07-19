import React  from 'react'
import { useEffect,useState } from 'react';
const Covid = () =>  {
    const [data,setData] = useState([])
    //to use thhe fetch API meathod we are using the "Async" function.
const getCovidData  = async  ()=>{
    //here amm storing the data get from the fetch inside the response
 //in future if the data is  rejected or pending or fullfillled then we  get it in the  await  meathod.
 try{   
 const res = await  fetch('https://api.covid19india.org/data.json');
 const actualData = await res.json();
 console.log(actualData.statewise[0]);
 setData(actualData.statewise[0]);
}
 //the below line oof code will  catch thhe  error from the  code.
 catch(err){
   console.log(err);
 }
}

    //the moment we are refreshing the page what  ever  we have return inside the page will  calls
    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <>
        <section>
        <h1>LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
       <ul>
          
           <li className="card">
               <div className="card_main">
                <div className="card_inner">
                 <p className = "card_name"><span>OUR</span> COUNTRY 
                 </p>
                 <p  className='card_total'>INDIA</p>
                </div>
               </div>

           </li>
           <li className="card">
               <div className="card_main">
                <div className="card_inner">
                 <p className = "card_name"><span>Total</span> Recovered
                 </p>
                 <p  className='card_total'>{data.recovered}</p>
                </div>
               </div>

           </li>
           <li className="card">
               <div className="card_main">
                <div className="card_inner">
                 <p className = "card_name"><span>Total</span> Conformed
                 </p>
                 <p  className='card_total'>{data.confirmed}</p>
                </div>
               </div>

           </li>
           <li className="card">
               <div className="card_main">
                <div className="card_inner">
                 <p className = "card_name"><span>Total </span> Deaths
                 </p>
                 <p  className='card_total'>{data.deaths}</p>
                </div>
               </div>

           </li>
           <li className="card">
               <div className="card_main">
                <div className="card_inner">
                 <p className = "card_name"><span>Total</span> Active
                 </p>
                 <p  className='card_total'>{data.active}</p>
                </div>
               </div>

           </li>
           <li className="card">
               <div className="card_main">
                <div className="card_inner">
                 <p className = "card_name"><span>Last</span> Update
                 </p>
                 <p  className='card_total'>{data.lastupdatedtime}</p>
                </div>
               </div>

           </li>
       </ul>
        
        </section>
        </>
    )
}
export default  Covid