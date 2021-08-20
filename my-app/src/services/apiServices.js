//import React from "react";

  async function getTransportData(url) {
    const response = await fetch(url);
    const body = await response.json();
    console.log(body)
 return body
  }




  
   export default getTransportData; 