import mongoose from 'mongoose';
import { mongooseConnect } from '../db/mongoose.js';

await mongooseConnect();

const robotSchema = new mongoose.Schema({
    id: String,
    name: String,
    img: String,
    speed: { type: Number, min: 0, max: 10 },
    endurance: { type: Number, min: 0, max: 10 },
    creationDate: String,
});

export const Robot = mongoose.model('Robot', robotSchema);
