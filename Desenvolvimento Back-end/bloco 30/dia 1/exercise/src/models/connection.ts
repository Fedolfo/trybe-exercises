import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/world_cups') =>
  mongoose.connect(mongoDatabaseURI);

export default connection;