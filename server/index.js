import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://venish:venish03@cluster0.hpvwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // second is a callback function when our application successfully listens
.catch((error) => console.log(error.message)); // when connection is not successfull 

//not to get any  warnings in console in browser
//mongoose.set('useFindAndModify', false);