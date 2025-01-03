import path from "path"
import {fileURLToPath} from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    reactStrictMode: true,
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: '**.unicore.cloud',
                port: ""
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: ""
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "9000"
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ]
    }
}

export default nextConfig
