import axios from "axios";
import { TcasterCard } from "./components/TcasterCard";
import { useEffect, useState } from "react";

export type dataFormat = {
  id: string,
  name: string,
  logo: string,
  roundSeats: number[],
  score: number,
  faculty: {
    id: string,
    name: string,
    tagId: string,
    university: {
      id: string,
      name: string
    }
  },
  updatedAt: string,
  likes: number

}

export function App() {
  const [data, setData] = useState<dataFormat>();

  const callApi = async () => {
    const res = await axios.get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
    const data_format = await res.data

    data_format.map((item: dataFormat) => {
      setData(item)
    })
  }
  useEffect(() => {
    callApi()
  },[])
  
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <TcasterCard logo={data?.logo} faculty={data?.faculty.name} university={data?.faculty.university.name} name={data?.name} roundSeats={data?.roundSeats} />
    </div>
  )
}

