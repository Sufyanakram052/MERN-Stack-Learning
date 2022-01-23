{
    "name": "Sufyan AKram",
    "email": "Sufyan@gmail.com",
    "phone": 9232472487,
    "work": "web dev",
    "password": "SufyanAKram",
    "cpassword": "SufyanAKram"
}

// By Using Promises

// router.post('/register', (req, res) => {

//     const { name, email, phone, work, provinance, city,  password, cpassword }  = req.body;

//     if(!name || !email || !phone || !work || !provinance || !city || !password || !cpassword) {
//         return res.status(422).json({ error : 'Please Filled the field Properly' });
//     }

//     User.findOne({ email: email })
//     .then((userExist) => {
//         if(userExist) { 
//             return res.status(422).json({ error : 'Email already Exist' });
//         }

//         const user = new User({ name, email, phone, work, provinance, city,  password, cpassword });

//         user.save().then(() => {
//             return res.status(201).json({ message : 'User registered Successfully' });
//         }).catch((err) => res.status(500).json({ error : 'User failed to registered' }));

//     }).catch( err => {console.log(err) });

// });
