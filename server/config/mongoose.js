var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/gameofthrones1');
require('../models/Comments.js');
require('../models/Posts.js');
require('../models/Users.js');
require('../config/passport.js');
//put this in server if error
