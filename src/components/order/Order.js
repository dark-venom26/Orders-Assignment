import React from "react";

function Order(props) {
    const {order_id, arrives_at_utc, total_paid} = props.record
    const dateTime= new Date(arrives_at_utc)
    const dayNo = dateTime.getDay();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    var day;
    var date = dateTime.getDate().toString() + "/" + dateTime.getMonth().toString() + "/" + dateTime.getFullYear().toString()
    switch (dayNo) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            break;
    }

    const timeRightNow = Date.now();
    const now= new Date(timeRightNow)
    if(dateTime == null){
        var status = "Cancelled"
    }else if(now>dateTime){
        status = "Delivered"
    }else{
        status = "Confirmed"
    }

  return (
    <tr>
      <th scope="row">{status}</th>
      <td>{day+ " " +date}</td>
      <td>{hours+":"+minutes+" "+ampm}</td>
      <td>{order_id}</td>
      <td>{total_paid}</td>
    </tr>
  );
}

export default Order;
