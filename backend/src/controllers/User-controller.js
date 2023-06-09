let express = require('express');
let user = require('../model/Userschema');
let bcrypt = require('bcrypt');
let saltRounds = 10; // to generate generic hashed password
const generateToken = require('../utils/generateId');
const statuscode = require('../utils/statuscode');
const sendEmail = require('../utils/emailService.js');
const verify = require('../Services')


const generateToken = require('../utils/generateId')

// define secert key  
const { access_token } = process.env;


// user Registration endpoint
const userRegistration = async (req, res) => {

    const { username, fullname, password, email } = req.body;

    try {
        let isAlreadyRegistered = (verify.ValidateUserEmail({ email }) && Auth_data.ValidateUserName(username))
        if (isAlreadyRegistered) {
            return res.status(statuscode.FORBIDDEN).json({
                message: `Already registered`,
                success: false
            })

        }

        const hashedPassword = verify.Hash(password, salt);
        const Token = generateToken(access_token, email)

        // const UserDetails = new user({
        //     username,
        //     fullname,
        //     password: hashedPassword,
        //     email,
        //     Token
        // }).save();

        const UserDetails = new user({
            ...others
        })
        
            (await UserDetails).save().then(() => {
                res.status(200).send.json({ message: 'successfullname', password: hashed })
            })

        console.log('________________________________');
        await sendEmail('Test@test.com', 'Anybody@gmail.com', 'TESTING SMPT', 'Lorem Ipsuim')
        console.log('________________________________');
        return res.status(200).send({ message: 'User created successfully', data: generateToken() });

    } catch (e) {

        console.log(e.message)
    }

}
module.exports = userRegistration





