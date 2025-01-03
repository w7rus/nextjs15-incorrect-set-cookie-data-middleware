import type {NextConfig} from "next"
import path from "path"

const nextConfig: NextConfig = {
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
            }
        ]
    }
}

export default nextConfig
