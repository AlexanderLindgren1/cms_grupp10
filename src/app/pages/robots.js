// export default function Robots() {
//     return {
//         rules: {
//           userAgent: '*',
//           allow: '/',
//           disallow: '/private/',
//         },
//         sitemap: '',
//       }
// }


// pages/robots.js

export default function Robots() {}

export async function getServerSideProps({ res }) {
  const robotsTxt = `
    User-agent: *
    Disallow:

    Sitemap: ${process.env.SITE_URL}/sitemap.xml
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}
