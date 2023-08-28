const router = require('express').Router();
const apiRoutes = require('./api');

//establishes the url path to get to all of the API routes.
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
