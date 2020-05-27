const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB conectada'))
    .catch(er => console.error(err));  