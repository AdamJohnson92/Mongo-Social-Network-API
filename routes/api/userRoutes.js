const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// route to get all users and to create a new user
router.route('/').get(getUsers).post(createUser);

// route to get a specific user, as well as update or delete that user.
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
