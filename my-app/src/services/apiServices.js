//import React from "react";

  async function getTransportTypes(url) {
    const response = await fetch(url);
    const body = await response.json();
    console.log(body)
 return body
  }
   export default getTransportTypes(url); 