const { transaction } = require('objection');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const saltRounds = 15;

//create user
exports.create = async (req, res, next) => {

    try{
        const users = await User.query();

        //allow only one user
        if(users.length === 0)
        {
            try{
                //hash the password
                const password = await bcrypt.hash(req.body.password, saltRounds);

                const graph = {
                    email:req.body.email,
                    password: password
                };

                //save user to DB
                try{
                    const insertedGraph = await transaction(User.knex(), trx => {
                      return (
                        User.query(trx)
                          .insertGraph(graph)
                      );
                    });
                    res.status(201).send(err);
                }catch(err){
                    return res.status(500).send(err);
                }
            }catch(err){
                return res.status(500).send(err);
            }
        }
        else{
            return res.status(403).json({message:'user already exists'});
        }
    }catch(err){
        return res.status(500).send(err);
    }



};