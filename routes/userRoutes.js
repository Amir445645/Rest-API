const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

router.post("/addUser", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/displayUsers", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/displayUsers/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put("/updateUsers/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, { ...req.body })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put("/deleteusers/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
