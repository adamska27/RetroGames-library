import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    name: String,
    year: Number,
    description: String,
    picture: String,
    postdate: { type: Date, default: Date.now }
  }
);

export default mongoose.model('Game', gameSchema);
