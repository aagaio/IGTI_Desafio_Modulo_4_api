import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';
import dotenv from 'dotenv';

const db = {};
db.mongoose = mongoose;
db.grades = gradesModel(mongoose);
db.url = process.env.MONGODB;

export { db };
