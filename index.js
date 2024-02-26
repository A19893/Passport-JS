const express= require('express');
const { PORT } = require("./config/serverConfig");
const passport = require('./config/auth');
const setupAndStartServer = async()=>{
    const app = express();
    app.use(express.urlencoded({limit:'50mb',extended: true}));
    app.use(express.json({limit:'50mb', extended: true}));

    app.use(passport.initialize());
    require('./config').db_connection;

    app.use('/api', require('./routes'));
    
    app.listen(PORT,function () {
        console.clear();
        console.log(`Server listening on port ${PORT}`);
    });
}

setupAndStartServer();