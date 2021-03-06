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
exports.delete_by_email = async (req, res, next) => {
    try{
        await User.query().delete().where('email', req.body.email).first();
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
                jwt.sign(
                {
                    email: user.email,
                    userId: user.id
                },
                process.env.JWT_KEY,
                { expiresIn: '1h' },
                (err, token) => {
                    if(err){
                        res.status(401).json({
                            message: "Auth failed"
                        });
                    }
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                });

            }
            else{
                res.status(401).json({
                    message: "Auth failed"
                });
            }
        });
    }catch(err){
        return res.status(500).send(err);
    }
};

//update user
exports.patch = async (req, res, next) => {
    try{
        const pw =  req.body.newPassword ? req.body.newPassword : req.body.password;

        const password = await bcrypt.hash(pw, saltRounds);

        try{
            email = req.body.newEmail ? req.body.newEmail : req.body.email;

            const updated = await User.query().where('email', req.body.email).first().patch({email: email, password: password });

            if(updated){
                return res.status(200).send();
            }
            return res.status(404).send();
        }catch(err){
            return res.status(500).send();
        }
    }catch(err){
        return res.status(500).send();
    };
};