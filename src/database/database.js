const Mongo = require('mongodb');
const assert = require('assert');

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('firstCollection');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

Mongo.connect('mongodb://localhost:27017', (err, client) => {
  assert.equal(null, err);
  console.log('db connected');

  const db = client.db('pierwszaBaza');

  insertDocuments(db, () => client.close());
})
