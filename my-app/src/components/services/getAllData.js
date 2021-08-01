const GetAllData= async ()=>{


    
const res = await  fetch('https://developers.ria.com/auto/categories/?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs');
  if(res.ok) {
      const data=await res.json();
      console.log(data)
  
    return  data;
} else {
    console.log("error, res.status")
}
        };

     
    export default GetAllData;