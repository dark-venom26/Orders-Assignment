import { useEffect, useState } from "react";
import "./home.css";
import axios from 'axios';
import Order from "../order/Order";


function Home() {
    const [order, setOrder] = useState({"data": null})

    useEffect(() => {
        const fetchData = async ()=>{
                try{
                    const res = await axios.get(`https://staging-api.dahmakan.com/test/orders`)
                    setOrder({"data":res?.data})
                }catch(err){
                    setOrder({"data": null})
                }
        }
       fetchData()
    }, [])

    
  return (
    <div className="mainSection">
        <div className="heading">Orders</div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Order Number</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
            {
                order?.data ? order?.data.orders.map((record)=>{
                    return <Order key={record.order_id} record={record}/>
                }) : <tr><td colSpan="5" className="center">Something went wrong, please reload the page again</td></tr>
            }
        </tbody>
      </table>
    </div>
  );
}

export default Home;
