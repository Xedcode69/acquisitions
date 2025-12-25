import {  Router } from 'express';

const authRoute = Router();


authRoute.post('/', (req, res) =>{
  res.send('signup here');
});
authRoute.post('/signin', (req, res)=>{
  res.send('signin here');
});
authRoute.post('/signout', (req, res)=> {
  res.send('signout here');
});

export default authRoute;
