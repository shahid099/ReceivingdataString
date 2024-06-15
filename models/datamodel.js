import mongoose from "mongoose";

const DataModel = new mongoose.Schema({
    customerData: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});


const sultanCustomerdata = mongoose.model('sultanCustomerdata', DataModel);

export default sultanCustomerdata;