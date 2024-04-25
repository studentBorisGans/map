import React, {useState, useEffect} from "react"
import Axios from "axios";

const App = () => {
  const [data, setData] = useState("");

  const getData = async()=> {
    const response = await Axios.get("http://localhost:2000/getData");
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