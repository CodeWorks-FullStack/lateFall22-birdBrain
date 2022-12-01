import { Schema } from "mongoose";
import { CreepSchema } from "./Creep.js";

export const BirdSchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 20 },
  canFly: { type: Boolean, required: false, default: false },
  size: { type: String, enum: ['small', 'medium', 'large', 'chunko'], required: true },
  img: { type: String, required: true, maxLength: 400 },
  peeperId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

BirdSchema.virtual('peeper', {
  localField: 'peeperId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

BirdSchema.virtual('creepCount', {
  localField: '_id',
  foreignField: 'birdId',
  ref: 'Creep',
  count: true
})