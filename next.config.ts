/** next.config.js **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,    // disabilita l’Image Optimization API
  },
  // …altre opzioni che ti servono…
}

module.exports = nextConfig