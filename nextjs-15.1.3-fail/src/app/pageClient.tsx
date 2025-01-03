"use client"

import axios from "axios"
import {DefaultParamsSerializer} from "@/middleware"
import {useEffect} from "react"

export default function AppClient() {
  const axiosInstance = axios.create({
    paramsSerializer: {
      serialize: DefaultParamsSerializer
    },
    withCredentials: true
  })

  useEffect(() => {
    axiosInstance.get(`http://localhost:5000/TestMethod`, {
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        console.log(`Response from AppClient, Set-Cookie: ${res.headers["set-cookie"]}`)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return <p>
    Meow world client
  </p>
}