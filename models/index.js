import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';
import dotenv from 'dotenv';

const db = {};
db.mongoose = mongoose;
db.grades = gradesModel(mongoose);
// db.url = process.env.MONGODB;
db.url =
  'mongodb+srv://aagaio:novenet@cluster0.ffkhj.mongodb.net/db1?retryWrites=true&w=majority';

export { db };
