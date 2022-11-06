import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'Please add firstname'],
    },
    lastName:{
        type:String,
        required:[true,'Please add lastname'],
    },
    age:{
        type:Date,
        required:[true,'Please add age'],
    },
    amountOverdue:{
        type:String,
        default:'0'
    },
    amountPaid:{
        type:String,
        default:'0'
    }
},{
    timestamps:true,
})

const Customers = mongoose.model('Customers',customerSchema);

export default Customers