const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// routes to get all thoughts and post new thought
router.route('/')
.get(getThoughts)
.post(createThought);

// routes to get/update/delete specific thought
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

//routes to update a thought by adding a reaction to it.
  router
  .route('/:thoughtId/reactions')
  .put(addReaction)

  //route to delete a specific reaction from a specific thought.
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
