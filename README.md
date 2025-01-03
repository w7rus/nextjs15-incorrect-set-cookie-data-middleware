1. Run any backend service prebuilted at `./SetCookieBackend/build`
2. Run nextjs-14.2.2-pass example via
  ```bash
  npm i

  npm run dev
  ```
3. Open `http://localhost:3000`, note down logs made by next side.

```
> nextjs-14-example@0.1.0 dev
> next dev

  ▲ Next.js 14.2.22
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1805ms
 ✓ Compiled /src/middleware in 211ms (168 modules)

Response from middleware via Axios, Set-Cookie: RefreshToken=Fr1kyC0UQykAotErzB9xxrwNksYntV3958hYst5ANDMeqwG2gSYM0xrrfc2Cz8FZAI3l8Ywd16d2hMUmX6cUSCx1DmwPjtwWgtnHzMhXzq3hVpudu95saA9HcyA0Hn2l; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict; httponly, RefreshTokenExpiresAt=2025-01-10T13%3A12%3A25.0520738%2B00%3A00; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict, JsonWebToken=dKTzSlNSvY64bchVnMoY11RIIKoDSWfgwpukRPiTDApW5kMlzhjzNC0q8QxxyVAeZZrKaBL64MfPMttejqfJwMfy899HIOAu385sR74TWfPYOcvaWskB8aRNkkSxvJw1; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict; httponly, JsonWebTokenExpiresAt=2025-01-03T13%3A17%3A25.0520742%2B00%3A00; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict, UserId=0b25555f-e36b-4122-9a8c-492bc494adc5; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict

Response from middleware via Fetch, Set-Cookie: RefreshToken=Fr1kyC0UQykAotErzB9xxrwNksYntV3958hYst5ANDMeqwG2gSYM0xrrfc2Cz8FZAI3l8Ywd16d2hMUmX6cUSCx1DmwPjtwWgtnHzMhXzq3hVpudu95saA9HcyA0Hn2l; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict; httponly, RefreshTokenExpiresAt=2025-01-10T13%3A12%3A25.0585277%2B00%3A00; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict, JsonWebToken=dKTzSlNSvY64bchVnMoY11RIIKoDSWfgwpukRPiTDApW5kMlzhjzNC0q8QxxyVAeZZrKaBL64MfPMttejqfJwMfy899HIOAu385sR74TWfPYOcvaWskB8aRNkkSxvJw1; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict; httponly, JsonWebTokenExpiresAt=2025-01-03T13%3A17%3A25.0585282%2B00%3A00; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict, UserId=d442816b-e733-44a6-b91b-7c8244baa7ec; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict

 ○ Compiling / ...
 ✓ Compiled / in 658ms (637 modules)
Response from AppServer, Set-Cookie: RefreshToken=Fr1kyC0UQykAotErzB9xxrwNksYntV3958hYst5ANDMeqwG2gSYM0xrrfc2Cz8FZAI3l8Ywd16d2hMUmX6cUSCx1DmwPjtwWgtnHzMhXzq3hVpudu95saA9HcyA0Hn2l; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict; httponly,RefreshTokenExpiresAt=2025-01-10T13%3A12%3A25.8656325%2B00%3A00; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict,JsonWebToken=dKTzSlNSvY64bchVnMoY11RIIKoDSWfgwpukRPiTDApW5kMlzhjzNC0q8QxxyVAeZZrKaBL64MfPMttejqfJwMfy899HIOAu385sR74TWfPYOcvaWskB8aRNkkSxvJw1; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict; httponly,JsonWebTokenExpiresAt=2025-01-03T13%3A17%3A25.8656334%2B00%3A00; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict,UserId=aa632304-4c80-4b0b-a046-151a9d683967; expires=Fri, 10 Jan 2025 13:12:25 GMT; domain=localhost; path=/; samesite=strict
 GET / 200 in 829ms
```

3. Run nextjs-15.1.3-fail example via
  ```bash
  npm i

  npm run dev
  ```
3. Open `http://localhost:3000`, note down logs made by next side.

```
> nextjs-15-example@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.1.3 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://10.8.1.21:3000

 ✓ Starting...
 ✓ Compiled in 201ms
 ✓ Ready in 1053ms

Response from middleware via Axios, Set-Cookie: UserId=c4e46628-7ec1-412b-bdd4-6c8594f69cc0; expires=Fri, 10 Jan 2025 13:07:01 GMT; domain=localhost; path=/; samesite=strict

Response from middleware via Fetch, Set-Cookie: RefreshToken=Fr1kyC0UQykAotErzB9xxrwNksYntV3958hYst5ANDMeqwG2gSYM0xrrfc2Cz8FZAI3l8Ywd16d2hMUmX6cUSCx1DmwPjtwWgtnHzMhXzq3hVpudu95saA9HcyA0Hn2l; expires=Fri, 10 Jan 2025 13:07:01 GMT; domain=localhost; path=/; samesite=strict; httponly, RefreshTokenExpiresAt=2025-01-10T13%3A07%3A01.8466803%2B00%3A00; expires=Fri, 10 Jan 2025 13:07:01 GMT; domain=localhost; path=/; samesite=strict, JsonWebToken=dKTzSlNSvY64bchVnMoY11RIIKoDSWfgwpukRPiTDApW5kMlzhjzNC0q8QxxyVAeZZrKaBL64MfPMttejqfJwMfy899HIOAu385sR74TWfPYOcvaWskB8aRNkkSxvJw1; expires=Fri, 10 Jan 2025 13:07:01 GMT; domain=localhost; path=/; samesite=strict; httponly, JsonWebTokenExpiresAt=2025-01-03T13%3A12%3A01.8466806%2B00%3A00; expires=Fri, 10 Jan 2025 13:07:01 GMT; domain=localhost; path=/; samesite=strict, UserId=6e9031ed-980d-455a-9d14-48de07bd48a2; expires=Fri, 10 Jan 2025 13:07:01 GMT; domain=localhost; path=/; samesite=strict

 ○ Compiling / ...
 ✓ Compiled / in 2.4s
Response from AppServer, Set-Cookie: RefreshToken=Fr1kyC0UQykAotErzB9xxrwNksYntV3958hYst5ANDMeqwG2gSYM0xrrfc2Cz8FZAI3l8Ywd16d2hMUmX6cUSCx1DmwPjtwWgtnHzMhXzq3hVpudu95saA9HcyA0Hn2l; expires=Fri, 10 Jan 2025 13:07:04 GMT; domain=localhost; path=/; samesite=strict; httponly,RefreshTokenExpiresAt=2025-01-10T13%3A07%3A04.3973339%2B00%3A00; expires=Fri, 10 Jan 2025 13:07:04 GMT; domain=localhost; path=/; samesite=strict,JsonWebToken=dKTzSlNSvY64bchVnMoY11RIIKoDSWfgwpukRPiTDApW5kMlzhjzNC0q8QxxyVAeZZrKaBL64MfPMttejqfJwMfy899HIOAu385sR74TWfPYOcvaWskB8aRNkkSxvJw1; expires=Fri, 10 Jan 2025 13:07:04 GMT; domain=localhost; path=/; samesite=strict; httponly,JsonWebTokenExpiresAt=2025-01-03T13%3A12%3A04.3973343%2B00%3A00; expires=Fri, 10 Jan 2025 13:07:04 GMT; domain=localhost; path=/; samesite=strict,UserId=3cf178eb-853d-4ada-b0c5-aeadc6bd0240; expires=Fri, 10 Jan 2025 13:07:04 GMT; domain=localhost; path=/; samesite=strict
 GET / 200 in 2595ms
```

As a result:

* when doing request from middleware via Axios in NextJS 15, Set-Cookie are incorrect, only received last out of 5 cookies in a request
* when doing request from middleware via Fetch in NextJS 15, Set-Cookie are correct
* Downgrading to NextJS 14 and using Axios/Fetch, Set-Cookie are correct