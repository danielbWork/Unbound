const uuid = require('uuid');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;



server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {

  if (req.method === 'POST') {
    let name = req.body['name'];
    let secret = req.body['text'];
    let allowExport = req.body['allowExport'];

    let db = require('./db.json');



    if (name === undefined || secret === undefined || name === '' || secret === '') {
      res.status(400).jsonp({
        error: "bad input parameter"
      });
    } else if (db.secrets.find(secret => secret.name === name) !== undefined) {
      console.log("Name repeat");
      res.status(409).jsonp({
        error: "Secret name already taken"
      })
    } else {

      let id = uuid.v4();

      while(db.secrets.find(secret => secret.id === id) !== undefined){
        id = uuid.v4();
      }

      req.body.allowExport = (allowExport === undefined ? false : allowExport);
      req.body.id = id;
      req.body.createdAt = new Date();
      db.secrets.push(req.body);
      next()
    }


  } else {
    next();
  }

});

server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
});
