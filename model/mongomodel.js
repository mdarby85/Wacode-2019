const DATABASEURL = 'mongodb://drewb97:<Liz33power>@cluster0-shard-00-00-uavy0.gcp.mongodb.net:27017,cluster0-shard-00-01-uavy0.gcp.mongodb.net:27017,cluster0-shard-00-02-uavy0.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
const uri = "mongodb+srv://drewb97:Liz33power@cluster0.mongodb.net/admin"
const MongoClient = require('mongodb').MongoClient;

//const client = new MongoClient(DATABASEURL, { useNewUrlParser: true });

MongoClient.connect(DATABASEURL, function(err, client) {
  if (err) throw err;

  const collection = client.db('wacode').collection('twiliomessages');
  //perform actions on the collection object
  console.log('yeet')

  client.close();
});
