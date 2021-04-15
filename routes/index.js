const express = require('express');
const router = express.Router();
const { c, cpp, node, python, java } = require('compile-run')

router.get('/', function (req, res, next) {
  res.send("Hello")
});

router.post("/", async function (req, res, next) {

  if (req.body.lang == 'javascript') {
    
    node.runSource(req.body.code, { stdin: req.body.input })
      .then(result => res.json(result))
      .catch(result => console.log(result))

  } else if (req.body.lang == 'python') {

    python.runSource(req.body.code, { stdin: req.body.input })
      .then(result => res.json(result))
      .catch(result => console.log(result))

  } else if (req.body.lang == 'c_cpp') {
    cpp.runSource(req.body.code, { stdin: req.body.input })
      .then(result => res.json(result))
      .catch(result => console.log(result))
  }

})



module.exports = router;
