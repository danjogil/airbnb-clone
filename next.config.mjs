/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: [
  //     "avatars.githubusercontent.com",
  //     "lh3.googleusercontent.com",
  //     "res.cloudinary.com",
  //   ],
  // },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "referrer-policy", value: "no-referrer" }],
      },
    ];
  },
};

export default nextConfig;
