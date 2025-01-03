import AppClient from "@/app/pageClient"
import axios from "axios"
import {DefaultParamsSerializer} from "@/middleware"

export default async function AppServer() {
  const axiosInstance = axios.create({
    paramsSerializer: {
      serialize: DefaultParamsSerializer
    },
    withCredentials: true
  })

  await axiosInstance.get(`http://localhost:5000/TestMethod`, {
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(res => {
      console.log(`Response from AppServer, Set-Cookie: ${res.headers["set-cookie"]}`)
    })
    .catch(err => {
      console.log(err)
    })

  return <>
    <p>Meow world server</p>
    <AppClient/>
  </>
}