import express from 'express';
import images  from './api/Images'

const routes = express.Router();

routes.get('/',(req,res)=>{
           res.status(200).send("welcome to image processing API");
           });

routes.use('/images',images);

export default routes;
