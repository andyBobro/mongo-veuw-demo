const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, database) {
  let DB = database.db('m1');

  // GET ALL POSTS
  app.get('/posts', (req, res) => {
    DB.collection('posts').find({}).toArray(function(err, items) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(items);
      }
    });
  })

  // GET ALL POSTS
  app.get('/posts', (req, res) => {
    const id = req.params.id;
    // const details = { '_id': new ObjectID(id) };
    DB.collection('posts').findOne({}, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    })
  })

  // GET A POST BY ID
  app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    DB.collection('posts').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    })
  })

  // CREATE NEW POST
  app.post('/posts', (req, res) => {
    const post = { text: req.body.text, title: req.body.title, date: new Date() };
    DB.collection('posts').insertOne(post, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // DELETE POST
  app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    DB.collection('posts').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  })

  // EDIT POST
  app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    console.log(details);
    const post = {$set: { text: req.body.body, title: req.body.title }};
    DB.collection('posts').updateOne(details, post, (err, result) => {
      if (err) {
          console.log(err);
          res.send({'error':'An error has occurred'});
      } else {
          res.send(post);
      }
    });
  });
};
