const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var sql = require("mssql");

const User = require('../models/User')

exports.signup = (req, res, next) => {
    /*bcrypt.hash(req.body.password, 10)
    .then(hash => {*/
        const user = new User({
            username: req.body.username,
            password: req.body.password, /*hash*/
            contact : req.body.contact,
            isAdmin : req.body.isAdmin
        })
        user.save()
        .then(()=> res.status(200).json({message: 'user created'}))
        .catch(error => res.status(400).json({ error }))
    /*})
    .catch(error => res.status(500).json({ error }))*/
}

exports.login = (req, res, next) => {
    try{
    User.findOne({ username : req.body.username })
    .then(user => {
        if (!user){
            return res.status(401).json({error : 'user not found'})
        }
        /*bcrypt.compare(req.body.password, user.password)
        .then( valid => {*/
        if (req.body.password !== user.password){
                return res.status(401).json({error : 'password incorrect'})
            }
        else {
            res.status(200).json({
                userId : user._id,
                token : jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            })
        }
    }).catch((error) => { res.status(404).json({ error }) })
    }
    catch(error) { res.status(500).json({ error }) }
}

exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
    .then((user) => { res.status(200).json(user) })
    .catch((error) => { res.status(404).json({ error }) })
}

exports.modifyUser = (req, res, next) => {
    const user = new User({
      _id: req.params.id,
      username: req.body.username,
      password: req.body.password,
      contact: req.body.contact,
      isAdmin: req.body.isAdmin,
    });
    User.updateOne({_id: req.params.id}, user)
    .then(() => { res.status(201).json({ message: 'User updated successfully!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
    .then(() => { res.status(200).json({ message: 'Deleted!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}
  
exports.getAllUsers = async (req, res, next) => {
    try {
        const result = await sql.query`select * from Accounts`
        res.status(200).json({results : result.recordset})
    }
    catch (err) {
        res.status(400).json({ err })
    }
}
