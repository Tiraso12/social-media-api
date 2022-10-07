const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizza-hunt',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
//logs mongo queries being executed to console!
mongoose.set('debug', true);
app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));