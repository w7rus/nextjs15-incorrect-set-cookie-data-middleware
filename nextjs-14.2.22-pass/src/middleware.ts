import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import axios from "axios"
import qs from "qs"

export const DefaultParamsSerializer = (params: object) => {
  if (params instanceof URLSearchParams) {
    return params.toString()
  }

  return qs.stringify(params, {
    indices: false,
    allowDots: true,
    skipNulls: true
  })
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
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
      console.log(`Response from middleware via Axios, Set-Cookie: ${res.headers["set-cookie"]}`)
    })
    .catch(err => {
      console.log(err)
    })

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/TestMethod`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include' // This ensures cookies are included in cross-origin requests
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const setCookieHeader = response.headers.get("set-cookie");
      console.log(`Response from middleware via Fetch, Set-Cookie: ${setCookieHeader}`);
    } catch (err) {
      console.error(err);
    }
  };

  await fetchData()

  return NextResponse.next()
}