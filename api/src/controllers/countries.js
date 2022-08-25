
const axios = require ('axios');
const {Country} = require ('../db')

const fillDataBase =async()=>{
    const resApi = await axios.get('https://restcountries.com/v3/all');
    const infoApi = resApi.data.map(el=>{
        return {
            id : el.cca3 ,
            name: el.name.common,
            image: el.flags[1],
            capital: el.capital,
            continent: el.continents,
            area: el.area,
            population: el.population,
            subregion: el.subregion
        };
    })
    for (let i =0; i<infoApi.length;i++){
        await Country.create(infoApi[i]) 
    }
};

const countriesControllers = {
    getAll : async (req,res)=>{
        const {name} = req.query;
        try{
            const contador = await Country.count()
            if (contador===0) await fillDataBase();
            if(name){
                const countryName = await Country.findAll(); //{includes:Activity}
                const filteredByName = countryName.filter(p=>{
                    return p.name.toLowerCase().includes(name.toLowerCase())
                })
                return res.status(200).send(filteredByName)
            } else {
                const countriesDb = await Country.findAll(); //{includes:Activity}
                return res.status(200).send(countriesDb)
            }

        }catch(err){
            res.status(400).send({err: err.message})
        }
    },
    getById : async (req,res) =>{
        const {id} = req.params ;
        try{
            const countryById = await Country.findByPk(id);
            res.status(200).send(countryById)
        }catch(err){
            res.status(400).send({err:err.message})
        }
    },
    
};
 module.exports = countriesControllers;
 