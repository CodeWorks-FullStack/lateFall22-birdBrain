import { Schema } from "mongoose";

export const CreepSchema = new Schema({
  birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird' },
  creepId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

CreepSchema.virtual('creep', {
  localField: 'creepId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CreepSchema.index({ creepId: 1, birdId: 1 }, { unique: true })
