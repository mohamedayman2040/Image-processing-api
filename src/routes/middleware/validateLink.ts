import express from 'express';
import fs from 'fs';
// this function to validate teh parameters of the query
const validateParameters = (req:express.Request, res:express.Response, next:Function):void=>{
   // receive data from the link
    let fname=req.query.filename as string;
    let width=req.query.width as unknown;
    let height=req.query.height as unknown;
    // check if the file name is not exist
    if(!fname){
        res.status(400).send('can\'t response without file name');
        
        
    }
    // check the link contains height or not
    if(!(height as number)){
        res.status(400).send('can\'t response without height');
    }
    //check if the height is positive or not
    else if(height as number < 0) {
        res.send('height must be positive');
    }
   // check the link contains width or not
    if(!(width as number)){
        res.status(400).send('can\'t response without width');
    }
// check the height is positive or not
    else if (width as number < 0){
            res.send('width must be positive')
     }    
    next();
}
export default validateParameters;