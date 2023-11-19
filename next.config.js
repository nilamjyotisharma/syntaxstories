const withMDX = require('@next/mdx')(
//   {
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: []
//   }
// }
)

// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withContentlayer(nextConfig)



// const { withContentlayer } = require("next-contentlayer");

// module.exports = withContentlayer({
//   experimental: { appDir: true },
// });

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})