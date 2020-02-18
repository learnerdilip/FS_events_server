const { Router } = require("express");
const Event = require("../event/model");

const router = new Router();

router.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(post => res.send(post))
    .catch(err => next(err));
});

router.get("/event", (req, res, next) => {
  Event.findAll().then(posts => res.send(posts));
});

router.get("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => res.send(event))
    .catch(next);
});

router.put("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next);
});

router.delete("/event/:id", (req, res, next) => {
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(number => res.send({ success: true, eventId: req.params.id }))
    .catch(next);
});

module.exports = router;
