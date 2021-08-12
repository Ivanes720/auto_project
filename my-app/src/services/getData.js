import { useEffect  } from "react";

const GetData=(props)=>{


useEffect((url) => {
  async function getAllData(url) {
    const response = await fetch(url);
    const body = await response.json();
    console.log(body)
    props(body.map(({ name }) => ({ name: name, value: name })));
  }
  getAllData(url);
}, []);

}
   export default GetData; 