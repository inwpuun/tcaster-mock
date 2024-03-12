import axios from "axios";
import { TcasterCard } from "./components/TcasterCard";
import { platformClient } from "./common/platformClient";
import { useEffect, useState } from "react";

export function App() {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
    const data_format = await res.data

    data_format.map((item: any) => {
      setData(item)
    })
  }
  
  useEffect(() => {
    callApi()
  },[])
  console.log(data)
  
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <TcasterCard logo={data.logo} faculty={data.faculty.name} university={data.faculty.university.name} name={data.name} roundSeats={data.roundSeats} />
    </div>
  )
}

