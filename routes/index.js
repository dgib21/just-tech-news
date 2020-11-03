const router = require('express').Router();

const apiRoutes = require('./api');

//here we are collecting the packaged group of API endpoints and prefixing them 
//with the path /api
router.use('/api', apiRoutes);

//if we make a request to any endpoint that doesn't exist well receive a 404 error 
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;