import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { BirdSchema } from '../models/Bird.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Birds = mongoose.model('Bird', BirdSchema)
}

export const dbContext = new DbContext()
