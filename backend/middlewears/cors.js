const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'http://localhost:3000',
  'localhost:3000',
];

// const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

const checkHeaders = (req, res, next) => {
  console.log('here');
  const { origin } = req.headers;
  console.log(origin);
  // const requestHeaders = req.headers();
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', '*');
    return res.end();
  }
  // if (req.method === 'OPTIONS') {
  //   res.header('Access-Control-Allow-Headers', DEFAULT_ALLOWED_METHODS);
  // }
  next();
};

module.exports = checkHeaders;
