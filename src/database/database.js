const Mongo = require('mongodb');
const assert = require('assert');

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('firstCollection');
  // Insert some documents
  collection.insertOne(
    {
      'user1': {
        'name': 'imię',
        'email': 'email@example.com',
        'phone': 'telefon'
      }
    }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log("Inserted 1 documents into the collection");
    callback(result);
  });
}

Mongo.connect('mongodb://localhost:27017', (err, client) => {
  assert.equal(null, err);
  console.log('db connected');

  const db = client.db('pierwszaBaza');

  insertDocuments(db, () => client.close());
})
