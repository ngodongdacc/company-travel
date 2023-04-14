export default () => ({
  // app port
  env: process.env.APP_PORT,
  api: {
    domain: process.env.API_DOMAIN,
    company: process.env.API_DOMAIN + '/webprovise/companies',
    travel: process.env.API_DOMAIN + '/webprovise/travels',
  },
});
