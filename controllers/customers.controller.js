import Customers from "../model/customers.js";

export const getAllCustomers = async (req,res) => {
    try {
        const customers = await Customers.find();
        res.status(200).json(customers);
        // res.status(200).send('customers list');
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

export const getSingleCustomer = async (req,res)=>{
    const { id } = req.params;
    try {
        const customer = await Customers.find({_id:id})
        res.status(200).json(customer);
        // res.status(200).send(`customer = ${id}`);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

export const updateCustomer = async (req,res)=>{
    const { id } = req.params;
    const payload = req.body;
    try {
        const customer = await Customers.updateOne({_id:id},payload)
        res.status(200).json(customer);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

export const registerCustomer = async (req,res)=>{
    const payload = req.body;
    const newCustomer = new Customers(payload);
    try {
        await newCustomer.save();
        res.status(201).json({message:'Created customer'});
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

export const removeCustomer = async (req,res)=>{
    const { id } = req.params;
    try {
        await Customers.deleteOne({_id:id});
        res.status(201).json({message:'Deleted customer'});
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}