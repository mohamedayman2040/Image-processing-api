import express from 'express';
import fs from 'fs';
import sharp from 'sharp';
import validateParameters from "../middleware/validateLink";
import modifyImage from './helper'

const getimages = express.Router();

getimages.get('/',validateParameters, async (req,res)=>{
   
     let path:string = 'src/routes/api/images/full/'+req.query.filename as string+'.jpg';
    let width= Number(req.query.width);
    let height= Number(req.query.height);
    let filename=req.query.filename as string
       await fs.access(path, fs.constants.R_OK | fs.constants.W_OK,(err)=>{
     if(err){console.error('cannot access');
            res.send('cannot access this file');}
    else{console.log('can access');
         modifyImage(path,filename,width,height);
             res.sendFile(filename+'&&'+width+'&&'+height+'.jpg',{root:'src/routes/api/newImages/'});
         
        }}
);
  
              ;
    
});

export default getimages;
