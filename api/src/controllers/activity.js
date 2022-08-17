const Activity = require("../models/Activity");

 
 const activityControllers = {
     createActivity : async (req,res) =>{
         const {id,name,herdness,duration,season} = req.body;
         const newActivity = await Activity.create({
             id: id,
             name: name,
             herdness: herdness,
             duration: duration,
             season:season
         });
         return res.status(200).send(newActivity);
     }
 };

 module.exports = activityControllers