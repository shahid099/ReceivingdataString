import express from 'express';
const router = express.Router();

// Inmporting Model
import sultanCustomerdata from '../models/datamodel.js';

router.get('/', async (req, res)=> {
    const uploadedData = await sultanCustomerdata.find();
    res.send({uploadedData});
})

router.post('/', async (req, res)=> {
    try {
        const { textValue } = req.body;
            let data = new sultanCustomerdata({
                customerData: textValue,
            })
            const savedData = await data.save();
            console.log(savedData)
            res.send({ savedData })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({error: "Internal Server error"})
    }
})

export default router;