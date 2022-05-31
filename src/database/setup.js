const mongoose = require('mongoose');

const url = process.env.DB_URL || 'mongodb://root:root@127.0.0.1:27017/mongo';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database online');
}).catch((err) => {
    console.log(`Database error: ${ err }`);
});

module.exports = mongoose;