// Jaied Bin Mahmud
// Project Name: BME 3200
// Institue: KUET


//External Imports
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');

//Internal Imports 
const instituteRouter = require('./Routes/Institutes/router');
const hospitalRouter = require('./Routes/Hospitals/router');
const patientRouter = require('./Routes/Patient/router');
const hospitaladminRouter = require('./Routes/HospitalAdmin/router');
const loginRouter = require('./Routes/Login/router');
const adminRouter = require('./Routes/Admin/router');
const doctorRouter = require('./Routes/Doctor/router');
const {errorHandler} = require('./Middleswares/Errors/errorHandler');
const { urlencoded } = require('express');

//Database Connection
mongoose.connect(`${process.env.data_base_connection_string}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log('Data Base Connection Succesfful');
}).catch((error) => {
    console.log("Data Base Error: "+ error);
});

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello Hospital');
})

app.use('/institues', instituteRouter);
app.use('/hospital', hospitalRouter);
app.use('/patient', patientRouter);
app.use('/hospitaladmin', hospitaladminRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/doctor', doctorRouter);


app.use(errorHandler);

//Listening Port
app.listen(process.env.port, () => {
    console.log(`Listening on Port ${process.env.port}`);
});