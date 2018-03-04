const { transaction } = require('objection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
                    res.status(201).send();
                }catch(err){
                    return res.status(500).send(err);
                }
            }catch(err){
                return res.status(500).send(err);
            }
        }
        else{
            return res.status(409).json({message:'user already exists'});
        }
    }catch(err){
        return res.status(500).send(err);
    }
};

//delete user by id
exports.delete_by_id = async (req, res, next) => {
    try{
        const user = await User.query().deleteById(req.params.id);
        res.send({});
    }catch(err){
        return res.status(500).send(err);
    }
};

//login
exports.login = async (req, res, next) => {
    try{
        user = await User.query().where('email', req.body.email).first();

        if(!user){
            return res.status(401).json({
                message: "Auth failed"
            });
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }

            if (result) {
                const token = jwt.sign(
                {
                    email: user.email,
                    userId: user.id
                },process.env.JWT_KEY,{ expiresIn: '1h' });

                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                });
            }
            res.status(401).json({
                message: "Auth failed"
            });
        });
    }catch(err){
        return res.status(500).send(err);
    }
};