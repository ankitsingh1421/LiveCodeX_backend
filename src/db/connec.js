const mongoose = require('mongoose');

module.exports = async function connectDatabase() {
    const DB = process.env.DATABASE;
    if (!DB) {
        throw new Error('DATABASE environment variable is not configured');
    }

    await mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Connection Successful');
};
