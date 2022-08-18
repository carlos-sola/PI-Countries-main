const {Activity} = require("../db");
const {Country} = require('../db');


 
 const activityControllers = {
     createActivity : async (req,res) =>{
         const {name,hardness,duration,season,country} = req.body;
         try{
            const newActivity = await Activity.create({
                name: name,
                hardness: hardness,
                duration: duration,
                season:season
            });
            if(country&&country.length){
                let countryDb=[];
                for(let i =0;i< country.length;i++){
                    let countryFound = await Country.findOne({
                        where:{
                            name:country[i]
                        }
                    });
                    countryDb.push(countryFound);
                    await newActivity.addCountries(countryDb)
                }
            }
            return res.status(200).send(newActivity);
         }catch(error){
            res.status(400).send({error:error.message})
         }
         
     }
 };

 module.exports = activityControllers;