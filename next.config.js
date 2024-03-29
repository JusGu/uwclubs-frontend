/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		domains: ['cdn.sanity.io']
	},
    experimental: {
        taint: true,
    },
}

module.exports = nextConfig

