import React, {useState, useEffect} from "react"
import Axios from "axios";

console.log("App");

const App = () => {
  const [data, setData] = useState("");

  const getData = async()=> {
    const response = await Axios.get("http://localhost:4000/getData");
    setData(response.data);
  }


  useEffect(()=> {
    getData()
  }, []);
  return (
    <div>{data}</div>
    // console.log(data)
  )
}

export default App