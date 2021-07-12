"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this function to validate teh parameters of the query
var validateParameters = function (req, res, next) {
    // receive data from the link
    var fname = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    // check if the file name is not exist
    if (!fname) {
        res.status(400).send('can\'t response without file name');
    }
    // check the link contains height or not
    if (!height) {
        res.status(400).send('can\'t response without height');
    }
    //check if the height is positive or not
    else if (height < 0) {
        res.send('height must be positive');
    }
    // check the link contains width or not
    if (!width) {
        res.status(400).send('can\'t response without width');
    }
    // check the height is positive or not
    else if (width < 0) {
        res.send('width must be positive');
    }
    next();
};
exports.default = validateParameters;
