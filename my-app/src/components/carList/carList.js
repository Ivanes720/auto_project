import React, { useState, useEffect, setResult } from "react";
import SearchFormTitle from "../searchFormTitle";
const carList=(props)=>{
  SearchFormTitle=new SearchFormTitle();
return (

    <div id='searchResults'>
       <p>
        {setResult.map((item) => (
                  <p key={item.value} value={item.value}>
                    {result}
                  </p>
                ))}

</p>
        

    </div>
);

};
export default carList;