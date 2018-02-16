"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var routes_1 = require("./routes");
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
mongoose.connect('mongodb://heroku_ng5zl3t5:vqfqatl36mgc90tn7tsoubv52m@ds245337.mlab.com:45337/heroku_ng5zl3t5');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connection.on('error', function (err) { });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    routes_1.default(app);
    if (!module.parent) {
        app.listen(app.get('port'), function () {
            console.log('Angular Full Stack listening on port ' + app.get('port'));
        });
    }
});
//# sourceMappingURL=app.js.map